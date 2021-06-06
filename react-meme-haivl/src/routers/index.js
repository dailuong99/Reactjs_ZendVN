import HomePage from "../components/HomePage/Homepage";
import Login from "../components/login";
import Register from "../components/register";
import UserDetail from "../components/UserDetail";

import {PATHS} from './../constants/path';

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
    },  {
        path: PATHS.HOMEPAGE,
        exact: true,
        component: HomePage
    },  {
        path: PATHS.USER_DETAIL,
        exact: true,
        component: UserDetail
    }

]