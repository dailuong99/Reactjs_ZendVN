import { PostService } from "../../services/posts";


export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';


/**
 * ACTION CREATORS
 */

export function actFetchPosts({
    posts = [],
    total,
    page,
    totalPages

}) {
    return {
        type: ACT_FETCH_POSTS,
        payload: {
            posts,
            total,
            page,
            totalPages
        }
    }
}

/**
 * ACTION ASYNC
 */

export const actFetchPostsAsync = ({
    currPage = 1,
    pagesize = 3,
    ...restParams
} = {}) => {
    return async dispatch => {
        try {
            const response = await PostService.getList({
                currPage,
                pagesize,
                ...restParams
            });

            const shortdata = response.data;
            const posts = shortdata.posts;
            const headers = response.headers;
            const total = Number(headers['x-wp-total']);
            const totalPages = Number(headers['x-wp-totalpages']);

            dispatch(actFetchPosts({
                posts,
                total,
                currPage,
                totalPages
            }))

            console.log('posts', posts)
        } catch (e) {

        }
    }
}