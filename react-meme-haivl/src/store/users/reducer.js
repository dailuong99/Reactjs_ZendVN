import { ACT_FETCH_COMMENTS } from "./actions";

const initUsersState = {
  commentsList: []
}

function reducer(usersState = initUsersState, action) {
  switch (action.type) {
    case ACT_FETCH_COMMENTS:
      return {
        ...usersState,
        commentsList: action.payload.comments
      }
    default:
      return usersState;

  }
}

export default reducer;