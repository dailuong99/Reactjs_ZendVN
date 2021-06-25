import { LOGOUT_SUCCESS } from "../auth/actions";
import { SET_USER_DETAIL, SET_USER_INFOR } from "./actions";

const initUsersState = {
  currrentUser: null,
  hashUserData: {}
}

function usersReducer(usersState = initUsersState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...usersState,
        currrentUser: action.payload.user
      };
    case LOGOUT_SUCCESS:
      return {
        ...usersState,
        currrentUser: null
      }
    case SET_USER_DETAIL:
      const { user, userPosts } = action.payload;
      let newHashUserData = usersState.hashUserData;
      let newHashUserPostsData = usersState.hashUserPostsData;
      if (user) {
        newHashUserData = {
          ...usersState.hashUserData,
          [user.USERID]: user
        }
      }
      if (userPosts) {
        newHashUserPostsData = {
          ...usersState.hashUserPostsData,
          [user.USERID]: userPosts
        }
      }
      return {
        ...usersState,
        hashUserData: newHashUserData,
        hashUserPostsData: newHashUserPostsData
      }
    default:
      return usersState;

  }
}

export default usersReducer;