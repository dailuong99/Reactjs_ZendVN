// import Footer from './../footer/index';
// import Header from './../header/index';
// import React,{ useState } from 'react';


// export default function LoginForm({Login,error}) {
    

// const [details,setdetails]=useState({email:"", password:""});

// const submitHandel = e =>{
//     e.preventDefault();
//     Login(details);
// }

//     return (
//         <>
//             <Header></Header>
//             <main>
//                 <div className="ass1-login">
//                     {/* <div className="ass1-login__logo">
//                         <Link to="/" className="ass1-logo">Home</Link>
//                     </div> */}
//                     <div className="ass1-login__content">
//                         <p>Đăng nhập</p>
//                         <div className="ass1-login__form">
//                             <form onSubmit={submitHandel} >
//                                 <input type="text" className="form-control" onChange={e => setdetails({...details,email: e.target.value})} value={details.email} placeholder="Email" required />
//                                 <div className="ass1-input-copy">
//                                 {/*  */}
//                                     <input type="password" className="form-control" placeholder="Mật khẩu"  onChange={e => setdetails({...details,password: e.target.value})} value={details.password} required />
//                                     <a href="#">Copy</a>
//                                 </div>
//                                 {(error != "" ) && (<div className="is-error">{error}</div>)}
//                                 <div className="ass1-login__send">
//                                     <a href="dang-ky.html">Đăng ký một tài khoản</a>
//                                     <button type="submit" className="ass1-btn">Đăng nhập</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer></Footer>
//         </>
//     )

// }