import { PostService } from "../../services/posts";

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS';
export const ACT_FETCH_POPULAR_POSTS = 'ACT_FETCH_POPULAR_POSTS';
export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';


/**
 * ACTION CREATORS
 */
export function actFetchLatestPosts({ posts = [] }) {
    return {
        type: ACT_FETCH_LATEST_POSTS,
        payload: {
            posts
        }
    }
}
export function actFetchPopularPosts({ posts = [] }) {
    return {
        type: ACT_FETCH_POPULAR_POSTS,
        payload: {
            posts
        }
    }
}
export function actFetchPosts({
    posts = []
}) {
    return {
        type: ACT_FETCH_POSTS,
        payload: {
            posts
        }
    }
}

/**
 * ACTION ASYNC
 */
export const actFetchLatestPostsAsync = () => {
    return async dispatch => {
            try {
                const response = await PostService.getLatest()
                const posts = response.data;
                dispatch(actFetchLatestPosts({
                    posts
                }))

            } catch (e) {

            }
        }
        // return dispatch => {
        //   PostService
        //     .getLatest()
        //     .then(response => {
        //       const posts = response.data;

    //       dispatch(actFetchLatestPosts({
    //         posts
    //       }))
    //     })
    //     .catch(err => {

    //     })
    // }
}
export const actFetchPopularPostsAsync = () => {
    return async dispatch => {
        try {
            const response = await PostService.getPopular();
            const posts = response.data;

            dispatch(actFetchPopularPosts({
                posts
            }))

        } catch (e) {

        }
    }
}
export const actFetchPostsAsync = ({
    page = 1,
    per_page = 6
} = {}) => {
    return async dispatch => {
        try {
            const response = await PostService.getList({
                page,
                per_page
            });

            const posts = response.data;

            dispatch(actFetchPosts({
                posts
            }))

        } catch (e) {

        }
    }
}