import { PostService } from "../../services/posts";


export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';
export const ACT_SEARCH ='ACT_SEARCH';

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
export function actSearch({
    posts=[]

}) {
    return {
        type: ACT_SEARCH,
        payload: {
            posts
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


export const actSearchAsync = ({
    query='',
    ...restParams
} = {}) => {
    return async dispatch => {
        try {
            const response = await PostService.getSearch({
                query,
                ...restParams
            });

            const shortdataquery = response.data;
            const posts = shortdataquery.posts;
            const resultlength = posts.length;
            dispatch(actSearch({
                posts
            }))

            console.log('post', posts.length)
        } catch (e) {

        }
    }
}