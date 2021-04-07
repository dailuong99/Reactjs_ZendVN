import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from "./HomePage";
import Register from './Register';
import Login from './Login';
import PostDetail from './PostDetail';
// import Postid from './PostId';
import {useHistory} from "react-router-dom";

export default function App() {
 
    return (
       <>
      
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">dang ki</Link>
            </li>
            <li>
              <Link to="/login">dang nhap</Link>
            </li>
            <li>
              <Link to="/post/:slug">dang ki</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
    
        <Route path="/post/:slug">
          <Postdetail></Postdetail>
        </Route>
   
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Regist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
         </>
    );
}

function Home() {
    return <HomePage></HomePage>;
  }
  
  function Regist() {
    return <Register></Register>;
  }
  
  function LogIn() {
    return <Login></Login>;
  }

  function Postdetail(){
    return <PostDetail></PostDetail>
  }