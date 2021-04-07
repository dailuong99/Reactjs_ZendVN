import { React } from "react"
// import logo from '../../src/assets/images/logo.png';

export default function Login() {
    return (
        <>
        <div className="wrapper-content">
  {/* Component Header */}
  <header id="header">
    <div className="tcl-container">
      <div className="tcl-row tcl-no-gutters header">
        <div className="tcl-col-2">
          {/* Logo */}
          <div className="header-logo">
            <a href="/">
              {/* <img src={logo} alt="Go to homepage" /> */}
            </a>
          </div>
        </div>
        <div className="tcl-col-4">
          {/* Header Search */}
          <form action="/search.html" method="get">
            <div className="header-search">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                </path>
              </svg>
              <input className="header-search__input" type="text" placeholder="Search articles here ..." aria-label="Search" name="query" />
            </div>
          </form>
        </div>
        <div className="tcl-col-6">
          {/* Nav */}
          <div className="header-nav">
            <ul className="header-nav__lists">
              <li><a href="#">Home</a></li>
              <li>
                <a href="#">Our Team</a>
                <ul>
                  <li><a href="#">Our Team 1</a></li>
                  <li><a href="#">Our Team 2</a></li>
                  <li><a href="#">Our Team 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
                <ul>
                  <li><a href="#">Contact 1</a></li>
                  <li><a href="#">Contact 2</a></li>
                  <li>
                    <a href="#">Contact 3</a>
                    <ul>
                      <li><a href="#">Contact 11</a></li>
                      <li><a href="#">Contact 12</a></li>
                      <li><a href="#">Contact 13</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="header-nav__lists">
              <li className="user"><a href="login.html"><i className="icons ion-person" /> Tài khoản</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main className="login">
    <div className="spacing" />
    <div className="tcl-container">
      <div className="tcl-row">
        <div className="tcl-col-12 tcl-col-sm-6 block-center">
          <h1 className="form-title text-center">Login</h1>
          <div className="form-login-register">
            <form action>
              <div className="form-control">
                <label htmlFor>Username</label>
                <input type="text" placeholder="Enter Username ..." />
              </div>
              <div className="form-control">
                <label htmlFor>Password</label>
                <i className="toggle-password ion-eye" />
                <input type="password" placeholder="Enter Password ..." />
              </div>
              <div className="d-flex tcl-jc-between tcl-ais-center">
                <button className="btn btn-primary btn-size-large">Submit</button>
                <a href="register.html">Regiter</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="spacing" />
  </main>
  <div className="spacing" />
  <footer id="footer" className="bg-white">
    <div className="tcl-container">
      <div className="footer">
        <div className="tcl-row">
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
            <div className="footer-logo">
              <img src="assets/images/logo.png" alt="NuxtBlog Logo" />
            </div>
            <p>© 2020, All Rights Reserved.</p>
            <p>Created by <a href="https://www.facebook.com/congluc1902" target="_blank">Luctc</a></p>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
            <div className="footer-title">
              <p>Categories</p>
            </div>
            <ul className="footer-content__list">
              <li><a href="#">ReactJs</a></li>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Angular</a></li>
              <li><a href="#">HTML, HTML5</a></li>
            </ul>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
            <div className="footer-title">
              <p>Liên hệ</p>
            </div>
            <ul className="footer-content__list">
              <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
              <li>0343 261 825</li>
            </ul>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
            <div className="footer-title">
              <p>Fanpage</p>
            </div>
            <div className="footer-facebook">
              <div className="fb-page" data-href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/">Học Lập Trình Web Thông Qua
                    Projects Thực Tế</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

        </>
            )
}