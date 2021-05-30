import { LOGIN, LOGOUT } from "./actions";

const initUsersState = {
  user: {
    email: '',
    password: ''
  },
  token: 'vkldbsavkldbjsklav-jbdslkjvbs' //null la chua dang nhap
}

function usersReducer(usersState = initUsersState, action) {
  console.log('userreducer run',action);
  switch (action.type) {
    case LOGIN:
      return {
        ...usersState,
        user: {
          email: action.payload.email,
          password: action.payload.password
        },
        token: 'vkldbsavkldbjsklav-jbdslkjvbs'
      }
    case LOGOUT:
      return {
        ...usersState,
        token: ''
      }
    default:
      return usersState;

  }
}

export default usersReducer;