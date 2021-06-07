
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from './../footer/index';
import Header from './../header/index';
import LoginForm from './loginForm';

import { asyncHandleLogin } from './../../store/auth/actions';
import {PATHS} from '../../constants/path';
import { userNotAuth } from '../../helpers';
import { actHideLoading, actShowLoading } from '../../store/app/action';


export default function Login() {
    userNotAuth();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogin = async (formData) => {
        const { email, password } = formData;
        dispatch(actShowLoading());
        dispatch(asyncHandleLogin({ email, password }))
       

        .then(res => {
            console.log(res)
            if(res.ok){
                dispatch(actHideLoading());
                history.push(PATHS.HOMEPAGE)
            }else{
                dispatch(actHideLoading());
                console.log(res.error)
            }
        });
    }

    return (
        <>
            <LoginForm handleLogin={handleLogin}></LoginForm>
        </>
    )

}