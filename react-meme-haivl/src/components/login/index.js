import Footer from './../footer/index';
import Header from './../header/index';
import { Link } from 'react-router-dom';


export default function Login() {
   

    return (
        <>
            <Header></Header>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__logo">
                        <Link to="/" className="ass1-logo">TCL Meme</Link>
                    </div>
                    <div className="ass1-login__content">
                        <p>Đăng nhập</p>
                        <div className="ass1-login__form">
                            <form action="#">
                                <input type="text" className="form-control" placeholder="Email" required />
                                <div className="ass1-input-copy">
                                    <input type="password" className="form-control" placeholder="Mật khẩu" required />
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