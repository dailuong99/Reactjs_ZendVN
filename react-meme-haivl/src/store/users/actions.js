

export const LOGIN = 'LOGIN';
export const LOGOUT='LOGOUT';
/**
 * ACTION CREATORS
 */


  export function actLogout(){
console.log("dispatch actlogout");
    return{
        type:LOGOUT
    }
  }
  

export function actLogin({
    email,
 password
}) {
    return {
        type: LOGIN,
        payload: {
            email,
            password
        }
    }
}

/**
 * ACTION ASYNC
 */



// export const actPostLoginAsync = ({
//     username= '',
//     password= '',
//       ...restParams
// } = {}) => {
//     return async dispatch => {
//         try {
//             const response = await LoginService.getList({
//                 username,
//                 password,
//                 ...restParams
//             });
//             const loginuser = response.data;

//             console.log(loginuser)
            
//             dispatch(actPostLogin({
//                 loginuser
//             }))
            
//             console.log(loginuser)
//         } catch (e) {

//         }
//     }
// }
