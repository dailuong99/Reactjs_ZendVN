import { api } from './api';

// export const LoginService = {
//   getList() {
//     return api.call().get('/member/login.php',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password
//       }),
//     })
//   }
// }

export function LoginService(email, password) {
  console.log("User Data: ", email, password);
    return dispatch =>
    fetch('http://api-meme-zendvn-01.herokuapp.com/api/member/login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(response => {
      console.log("I'm here");
      if(response.status >= 200 && response.status < 300){
        console.log("Response; ", response);
        dispatch(loginSuccess(response));
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError());
        throw error;
      }
    })
    .catch(error => { console.log('Request Failed: ', error);});
  }