const nameSpace = 'user';

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;
export const LOGOUT = 'LOGOUT';
/**
 * ACTION CREATORS
 */


export function actLogout() {
    console.log("dispatch actlogout");
    return {
        type: LOGOUT
    }
}

export const actSetUserInfor = ({ User })=>{
    return {
        type: SET_USER_INFOR,
        payload: {
            User
        }
    }
}

/**
 * ACTION ASYNC
 */


