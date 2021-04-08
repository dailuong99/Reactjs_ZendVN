import { React } from "react"
import Header from './components/Header/';
import Footer from './components/Footer/';
import LoginForm from './components/FormLogin'

export default function Register() {
  return (
    <>
      <div className="wrapper-content">
        <Header></Header>
        <main className="login">
          <div className="spacing" />
          <div className="tcl-container">
            <div className="tcl-row">
              <div className="tcl-col-12 tcl-col-sm-6 block-center">
                <h1 className="form-title text-center">Register</h1>
                <div className="form-login-register">
                 <LoginForm></LoginForm>
                </div>
              </div>
            </div>
          </div>
          <div className="spacing" />
        </main>
        <div className="spacing" />
      <Footer></Footer>
      </div>
    </>
  )
}