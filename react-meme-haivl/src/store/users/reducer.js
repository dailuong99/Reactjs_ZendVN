import { LOGOUT_SUCCESS } from "../auth/actions";
import { SET_USER_INFOR } from "./actions";

const initUsersState = {
  currrentUser: null
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
    default:
      return usersState;

  }
}

export default usersReducer;