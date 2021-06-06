import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { PATHS } from '../../constants/path';

export default function userNotAuth() {
    const history = useHistory();
    const location = useLocation();
    const token = useSelector(state => state.Auth.ACCESS_TOKEN)

    useEffect(() => {
        if (token) { history.push(PATHS.HOMEPAGE) }
    }, [location, history,token])
}