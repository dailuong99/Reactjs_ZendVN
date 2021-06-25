import { userService } from "../../services/user";
import { actHideLoading, actShowLoading } from "../app/action";

const nameSpace = 'user';

export const SET_USER_INFOR = `${nameSpace}SET_USER_INFOR`;
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const SET_USER_DETAIL = `${nameSpace}SET_USER_DETAIL`;

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

export const actSetUserDetail = ({ user, userPosts }) => {
    return {
        type: SET_USER_DETAIL,
        payload: {
            user,
            userPosts
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
                dispatch(actSetUserDetail({user}))
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

export const asyncGetUserDetail = ({ userid }) => {
    return async (dispatch, getGolbalState) => {
        try {
            const state = getGolbalState();
            const hashUserData = state.Users.hashUserData;
            const hashUserPostsData = state.Users.hashUserPostsData;

            if (hashUserData[userid] && hashUserPostsData[userid]) {
                const user = hashUserData[userid];
                const userPosts= hashUserPostsData[userid];
                return { ok: true, user, userPosts }
            } else {

                const p1 = userService.getUserById({ userid });
                const p2 = userService.getListPostByUserId({ userid });

                dispatch(actShowLoading());
                const [userRes, UserPostRes] = await Promise.all([p1, p2]);
                dispatch(actHideLoading());

                if (userRes.data.status === 200 && UserPostRes.data.status === 200) {
                    const user = userRes.data.user
                    const userPosts = UserPostRes.data.posts
                    dispatch(actSetUserDetail({ user, userPosts }))
                    return {
                        ok: true,
                        user,
                        userPosts
                    }
                }
            }

            return {
                ok: false,
                error: "lỗi rồi kìa ba ơi"
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