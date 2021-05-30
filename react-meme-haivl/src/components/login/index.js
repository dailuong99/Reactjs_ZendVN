
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actLogin } from '../../store/users/actions';
import Footer from './../footer/index';
import Header from './../header/index';

export default function Login() {
    const token = useSelector(state => state.Users.token)
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (token) {
            //da dang nhap
            history.push('/')
        } else {
            //chua dang nhap  
    
        }
    }, [token, history])

    const handleSubmit = ({setEmail,setPassword}) =>{
        console.log(setEmail,setPassword)
        dispatch(actLogin({
            email:setEmail.email,
            password:setPassword.password
        }));
    }

    return (
        <>
            <Header></Header>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__content">
                        <p>Đăng nhập</p>
                        <div className="ass1-login__form">
                            <form >
                                
                                <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                <div className="ass1-input-copy">
                                    {/*  */}
                                    <input type="password" className="form-control" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} required />
                                    <a href="#">Copy</a>
                                </div>
                                {/* {(error != "") && (<div className="is-error">{error}</div>)} */}
                                <div className="ass1-login__send">
                                    <a href="dang-ky.html">Đăng ký một tài khoản</a>
                                    <button onSubmit={handleSubmit} className="ass1-btn">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )

}