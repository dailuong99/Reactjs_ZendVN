import MainContent from './components/MainContent/index';
import Register from './components/register/index';
import PostImages from './components/postImg/index';
import PostDetail from './components/postDetail/index';
import HistoryPost from './components/HistoryPost/index';
import Profile from './components/profile/index';
import ChangePassword from './components/changePassword/index';
import PostsSearch from '../src/components/pages/PostsSearch';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/index';


function App() {
  return (
    <div className="App">

      <Router>
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
          <Route path="/search" exact>
            <PostsSearch></PostsSearch>
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
      </Router>
    </div>

  );
}




export default App;