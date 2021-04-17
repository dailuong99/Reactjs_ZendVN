import { PostsService } from "../../services/posts";


const initPostsState = {
    articlesLatest: [],
    articlesPopular: [],
    articlesList: []
}

export const ACT_FETCH_LATEST_POSTS = 'ACT_FETCH_LATEST_POSTS'


function reducerPost(postsState = initPostsState, actions) {
    switch (actions.type) {
        case ACT_FETCH_LATEST_POSTS:
            return {
                ...postsState,
                articlesLatest: actions.payload

            }
        default:
            break;
    }

    return postsState;
}

export default reducerPost;