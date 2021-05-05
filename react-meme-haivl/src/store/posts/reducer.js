import {
    ACT_FETCH_POSTS,
} from "./actions";

const initPostsState = {
    articlesPaging: {
        postList: [],
        currPage: 1,
        pagesize: 3,
        total: 0
    }
}

function reducer(postsState = initPostsState, action) {
    switch (action.type) {
        case ACT_FETCH_POSTS:
            return {
                ...postsState,
                // postList: action.payload.posts,
                articlesPaging: {
                    ...postsState.articlesPaging,
                    postList:  action.payload.posts,
                        // : [
                        //     ...postsState.articlesPaging.postList,
                        //     ...action.payload.posts
                        // ],
                    total: action.payload.total,
                    currPage: action.payload.currPage,
                    totalPages: action.payload.totalPages
                }
            }
      
        default:
            return postsState;

    }
}

export default reducer;