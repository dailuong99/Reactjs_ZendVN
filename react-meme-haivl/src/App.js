import MainContent from './components/MainContent/index';
import Login from './components/login/index';
import Register from './components/register/index';
import PostImages from './components/postImg/index';
import PostDetail from './components/postDetail/index';
import HistoryPost from './components/HistoryPost/index';
import Profile from './components/profile/index';
import ChangePassword from './components/changePassword/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>


      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/register">Đăng kí</Link>
              </li>
              <li>
                <Link to="/login">Đăng nhập</Link>
              </li>
              <li>
                <Link to="/postdetail/postid">Chi tiết bài đăng</Link>
              </li>
              <li>
                <Link to="/postimg">Dăng ảnh</Link>
              </li>
              <li>
                <Link to="/historypost">Lịch sử đăng ảnh</Link>
              </li>
              <li>
                <Link to="/profile/1">Thông tin cá nhân</Link>
              </li>
              <li>
                <Link to="/changepass/1">Đổi mật khẩu</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/postdetail/:slug">
              <PostDetail></PostDetail>
            </Route>
            <Route path="/changepass/:slug">
            <ChangePassword></ChangePassword>
            </Route>
            <Route path="/profile/:slug">
              <Profile></Profile>
            </Route>
            <Route path="/historypost">
              <HistoryPost></HistoryPost>
            </Route>
            <Route path="/postimg">
              <PostImages></PostImages>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/">
              <MainContent></MainContent>
            </Route>

          </Switch>
        </div>
      </Router>

    </>

  );
}



