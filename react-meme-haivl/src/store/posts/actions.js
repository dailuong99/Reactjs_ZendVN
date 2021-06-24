import PostService from "./../../services/posts";
import { actHideLoading, actShowLoading } from "../app/action";


export const ACT_FETCH_POSTS = 'ACT_FETCH_POSTS';
export const ACT_SEARCH = 'ACT_SEARCH';
/**
 * ACTION CREATORS
 */

export const actFetchPosts = ({ posts,currPage }) => ({
    type: ACT_FETCH_POSTS,
    payload: {
        posts,
        currPage
    }
})

export const actSearch = ({ posts }) => ({
    type: ACT_SEARCH,
    payload: {
        posts
    }
})

/**
 * ACTION ASYNC
 */

export const actFetchPostsAsync = ({ currPage =1, pagesize=5 } = {}) => {
    return async (dispatch) => {
        try {
            dispatch(actShowLoading())
            const res = await PostService.getList({
                currPage,
                pagesize,
            });
            dispatch(actHideLoading())

            if (res?.data?.status === 200) {
                const posts = res.data.posts;
                dispatch(actFetchPosts({ posts, currPage}))
                return {
                    ok: true,
                    data: res.data.posts
                }
            }
            return {
                ok: false,
                error: res.data.message
            }
        } catch (err) {
            dispatch(actHideLoading())
            return {
                ok: false,
                error: err.message
            }
        }
    }
}


export const actSearchAsync = ({ query } = {}) => {
    return async (dispatch) => {
        try {
            dispatch(actShowLoading())
            const res = await PostService.getSearch({
                query
            });
            dispatch(actHideLoading())

            if (res?.data?.status === 200) {
                const posts = res.data.posts;
                dispatch(actSearch({ posts }))
                return {
                    ok: true,
                    data: res.data.posts
                }
            }
            return {
                ok: false,
                error: res.data.message
            }
        } catch (err) {
            dispatch(actHideLoading())
            return {
                ok: false,
                error: err.message
            }
        }
    }
}
