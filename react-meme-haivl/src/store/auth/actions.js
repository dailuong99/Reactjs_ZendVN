
import { Storage } from '../../helpers';
import { authService } from '../../services/auth';
import { actHideLoading, actShowLoading } from '../app/action';
import { actSetUserInfor } from './../users/actions';

const nameSpace = 'auth';


export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const actLoginSuccess = ({ token }) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  }
}

export const actLogoutSuccess = () => {
  Storage.removeToken()
  return {
    type: LOGOUT_SUCCESS,
    payload: {}
  }
}


export const asyncHandleLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const res = await authService.login({ email, password });
      dispatch(actHideLoading())
      if (res.data.status !== 200) {
        return {
          ok: false,
          error: res.data.err
        }
      } else {
        const user = res.data.user;
        const token = res.data.token;
        Storage.setToken(token);
        dispatch(actSetUserInfor({ user }))
        dispatch(actLoginSuccess({ token }))
        return {
          ok: true
        }
      }
    } catch (err) {
      dispatch(actHideLoading())
      return {
        ok: false,
        error: err.message
      }
    }
  }
}