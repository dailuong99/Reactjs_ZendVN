
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { actLogin } from '../../store/users/actions';
import Footer from './../footer/index';
import Header from './../header/index';

export default function Login() {
    const token = useSelector(rootstate => rootstate.Users.token);
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (token) {
            //da dang nhap
            history.push('/');
        }
    }, [token, history])

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('data', email, password)
        dispatch(actLogin({
            email: email,
            password: password
        }));
    }
    console.log(token)

    return (
        <>
            <Header></Header>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__content">
                        <p>Đăng nhập</p>
                        <div className="ass1-login__form">
                            <form onSubmit={onFormSubmit}>

                                <input type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}
                                    required />
                                <div className="ass1-input-copy">
                                    <input type="password" className="form-control"
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Mật khẩu"
                                        required />
                                    <a href="#">Copy</a>
                                </div>
                                <div className="ass1-login__send">
                                    <a href="dang-ky.html">Đăng ký một tài khoản</a>
                                    <button type="submit" className="ass1-btn">Đăng nhập</button>
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