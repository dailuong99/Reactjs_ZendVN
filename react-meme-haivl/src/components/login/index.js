
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from './loginForm';

import { asyncHandleLogin } from './../../store/auth/actions';
import {PATHS} from '../../constants/path';
import { userNotAuth } from '../../helpers';


export default function Login() {
    userNotAuth();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogin = async (formData) => {
        const { email, password } = formData;
        dispatch(asyncHandleLogin({ email, password }))
       

        .then(res => {
            if(res.ok){
                history.push(PATHS.HOMEPAGE)
            }else{
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