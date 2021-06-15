import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { PATHS } from '../../constants/path';

export default function userAuth() {
    const history = useHistory();
    const location = useLocation();
    const token = useSelector(state => state.Auth.ACCESS_TOKEN)

    useEffect(() => {
        //nếu chưa đăng nhập đẩy về view login 
        if (!token) { history.push(PATHS.LOGIN) }
    }, [location, history,token])
}