import { LOGIN_SUCCESS } from './actions';
import { Storage } from './../../helpers';
const initState = {
  ACCESS_TOKEN: Storage.getToken() || ""
}

export default function AuthReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:

      return {
        ...state,
        ACCESS_TOKEN: action.payload.token
      }

    default:
      return state;

  }
}