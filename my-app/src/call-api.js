


// function apiGetListPost() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             const fakeData = [
//                 {
//                     "USERID": "2",
//                     "email": "admin@gmail.com",
//                     "username": "",
//                     "password": "",
//                     "fullname": "Trần Công Lực",
//                     "gender": "nam",
//                     "description": "Đây là mô tả ngắn của Trần Công Lực Edit",
//                     "yourviewed": "0",
//                     "profileviews": "0",
//                     "youviewed": "0",
//                     "lastlogin": "",
//                     "status": "1",
//                     "profilepicture": "http://api-meme-zendvn-01.herokuapp.com/public/user/2/avatar.jpg",
//                     "permission": "admin"
//                 }
//             ];
//             // reslove(fakeData)
//             reject({
//                 status:500,
//                 message:"token invalid"
//             })
//         }, 2000);
//     });
// }
//  const test = apiGetListPost();

const { default: axios } = require("axios");

//  test
//  .then((res)=>{
//     console.log("success =", res)
// })
//  .catch((err)=>{
//     console.log("err =", err)
// })


axios.post('http://api-meme-zendvn-01.herokuapp.com/api/member/login.php',{
  "email": "admin@gmail.com",
  "password": "123456"
})
.then(function(res){
console.log('res',res);
})

.catch(function(err){
  console.log('err',err);
})