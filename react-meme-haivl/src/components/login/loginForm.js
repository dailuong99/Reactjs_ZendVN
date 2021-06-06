
import React, { useState } from 'react';


export default function LoginForm({ handleLogin }) {
    const [formData, setForm] = useState({ email: "", password: "" });

    const onChangeFormData = (keyfiled) => (evt) => {
        setForm({
            ...formData,
            [keyfiled]: evt.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (handleLogin) {
            handleLogin(formData)
        }
    }

    return (
        <div className="ass1-login">
            {/* <div className="ass1-login__logo">
            <Link to="/" className="ass1-logo">Home</Link>
        </div> */}
            <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form  >
                        <input
                            type="text"
                            className="form-control"
                            value={formData.email}
                            onChange={onChangeFormData('email')}
                            placeholder="Email"
                            autoComplete="off" />

                        <div className="ass1-input-copy">
                            <input type="password"
                                value={formData.password}
                                className="form-control"
                                placeholder="Mật khẩu"
                                onChange={onChangeFormData('password')}
                                autoComplete="off" />
                        </div>

                        <div className="ass1-login__send">
                            <a href="dang-ky.html">Đăng ký một tài khoản</a>
                            <button
                                type="submit"
                                onClick={handleSubmitForm}
                                className="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}