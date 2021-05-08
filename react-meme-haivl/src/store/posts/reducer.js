import {
    ACT_FETCH_POSTS, ACT_SEARCH,
} from "./actions";

const initPostsState = {
    articlesPaging: {
        postList: [],
        currPage: 1,
        pagesize: 3,
        total: 0
    },
    searchList:[]
}

function reducer(postsState = initPostsState, action) {
    switch (action.type) {
        case ACT_FETCH_POSTS:
            return {
                ...postsState,
                articlesPaging: {
                    ...postsState.articlesPaging,
                    postList:  action.payload.posts,
                    
                    total: action.payload.total,
                    currPage: action.payload.currPage,
                    totalPages: action.payload.totalPages
                }
            }
      case ACT_SEARCH:
        return {
            ...postsState,
            searchList:  action.payload.posts
        }
        default:
            return postsState;

    }
}

export default reducer;
