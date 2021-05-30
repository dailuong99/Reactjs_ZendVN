import { LOGIN, LOGOUT } from "./actions";

const initUsersState = {
  user: {
    email: '',
    password: ''
  },
  token: 'vkldbsavkldbjsklav-jbdslkjvbs' //null la chua dang nhap
}

function reducer(usersState = initUsersState, action) {
  console.log('userreducer run',action)
  switch (action.type) {
    case LOGIN:
      return {
        ...usersState,
        user: {
          email: action.payload.email,
          password: action.payload.password
        },
        token: action.payload.token
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

export default reducer;