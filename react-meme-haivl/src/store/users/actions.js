import { userService } from "../../services/user";
import { actHideLoading, actShowLoading } from "../app/action";

const nameSpace = 'user';

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
/**
 * ACTION CREATORS
 */


export const actSetUserInfor = ({ user }) => {
    return {
        type: SET_USER_INFOR,
        payload: {
            user
        }
    }
}

/**
 * ACTION ASYNC
 */

export const asyncGetUserById = ({ userid }) => {
    return async (dispatch) => {
        try {
            dispatch(actShowLoading());
            const res = await userService.getUserById({ userid });
            dispatch(actHideLoading());

            if (res?.data?.status === 200) {
                const user = res.data.user;
                dispatch(actSetUserInfor({ user }))
                return {
                    ok: true,
                    user: user
                }
            }
            return {
                ok: false,
                error: res?.data?.error
            }
        } catch (err) {
            dispatch(actHideLoading());
            return {
                ok: false,
                error: err.message
            }
        }
    }
}

export const asyncUpdateProfile = ({
    avatar,
    description,
    gender,
    fullname
}) => {
    return async (dispatch) => {
        try {

            let formData = new FormData();
            formData.append('gender', gender);
            formData.append('description', description);
            formData.append('fullname', fullname);
            if (avatar) {
                formData.append('avatar', avatar);
            }

            dispatch(actShowLoading());
            const res = await userService.updateProfile(formData);
            dispatch(actHideLoading());

            if (res?.data?.status === 200) {
                const user = res.data.user;
                dispatch(actSetUserInfor({ user }))
                return {
                    ok: true,
                    user: user
                }
            }
            return {
                ok: false,
                error: res?.data?.error
            }

        } catch (err) {
            dispatch(actHideLoading());
            return {
                ok: false,
                error: err.message
            }
        }
    }
}