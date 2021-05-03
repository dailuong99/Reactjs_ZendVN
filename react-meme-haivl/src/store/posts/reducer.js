import {
    ACT_FETCH_POSTS,
} from "./actions";

const initPostsState = {
    postList: []
}

function reducer(postsState = initPostsState, action) {
    switch (action.type) {
        case ACT_FETCH_POSTS:
            return {
                ...postsState,
                postList: action.payload.posts

            }
        default:
            return postsState;

    }
}

export default reducer;