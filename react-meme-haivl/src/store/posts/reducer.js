import {
    ACT_FETCH_POSTS, ACT_SEARCH,
} from "./actions";

const initPostsState = {
    listNewItem: [],
    searchList: []
}

function postsReducer(postsState = initPostsState, action) {
    switch (action.type) {

        case ACT_FETCH_POSTS:
            const newPosts = action.payload.posts;
            return {
                ...postsState,
                listNewItem: [
                    ...postsState.listNewItem,
                    ...newPosts
                ]
            }
        case ACT_SEARCH:
            const searchPosts = action.payload.posts;
            return {
                ...postsState,
                searchList: searchPosts
            }
        default:
            return postsState;

    }
}

export default postsReducer;
