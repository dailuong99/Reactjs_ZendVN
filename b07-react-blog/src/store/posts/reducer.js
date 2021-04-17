import { 
  ACT_FETCH_POSTS,
  ACT_FETCH_LATEST_POSTS,
  ACT_FETCH_POPULAR_POSTS
} from "./actions";

const initPostsState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesList: []
}

function reducer(postsState = initPostsState, action) {
  switch (action.type) {
    case ACT_FETCH_POSTS:
      return {
        ...postsState,
        articlesList: action.payload.posts
      }
    case ACT_FETCH_LATEST_POSTS:
      return {
        ...postsState,
        articlesLatest: action.payload.posts
      }
    case ACT_FETCH_POPULAR_POSTS:
      return {
        ...postsState,
        articlesPopular: action.payload.posts
      }
    default:
      return postsState;
  }
}

export default reducer;