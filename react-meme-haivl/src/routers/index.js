// import HomePage from "../components/HomePage/Homepage";
import Login from "../components/login";
import MainContent from "../components/MainContent";
import Register from "../components/register";
import UserDetail from "../components/UserDetail";
import Profile from "../components/profile/index";

import {PATHS} from './../constants/path';
import SearchResult from "../components/SearchResult";
import ChangePassword from "../components/changePassword";

export const Routers = [
    {
        path: PATHS.LOGIN,
        exact: true,
        component: Login
    },
    {
        path: PATHS.REGISTER,
        exact: true,
        component: Register
    }, {
        path: PATHS.CHANGE_PASSWORD,
        exact: true,
        component: ChangePassword
    }, {
        path: PATHS.HOMEPAGE,
        exact: true,
        component: MainContent
    }, {
        path: PATHS.SEARCH_RESULT,
        exact: true,
        component: SearchResult
    }, {
        path: PATHS.USER_DETAIL,
        exact: true,
        component: UserDetail
    },  {
        path: PATHS.USER_PROFILE,
        exact: true,
        component: Profile
    }

]