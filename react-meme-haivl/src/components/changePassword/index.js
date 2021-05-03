import Footer from "../footer";
import Input from "../shared/Input";
import Header from './../header/index';
import Button from './../shared/Button/index';

export default function ChangePassword() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__content">
                        <p>Đổi mật khẩu</p>
                        <div className="ass1-login__form">
                            <form action="#">
                                <div className="position-relative">
                                <Input type="password" className="form-control" placeholder="Mật khẩu cũ"></Input>

                                </div>
                                <Input type="password" className="form-control" placeholder="Mật khẩu mới"></Input>
                                <Input type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" />


                                <div className="ass1-login__send justify-content-center">
                                    <Button type='loadmore' variant='loadmore' className="ass1-btn"><span>Gửi</span></Button>

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