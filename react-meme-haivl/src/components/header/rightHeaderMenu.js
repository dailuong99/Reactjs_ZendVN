import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/path";
import { actLogoutSuccess } from "../../store/auth/actions";
import { asyncGetUserById } from "../../store/users/actions";
import userUserId from './../../helpers/hooks/useUserId';
import defaultAvata from "./../assets/images/defaultavata.png";


export default function RightHeaderMenu() {
    const dispatch = useDispatch();
    const userid = userUserId();
    const currUser = useSelector(state => state.Users.currrentUser);

    useEffect(() => {
        dispatch(asyncGetUserById({ userid }))
    }, [userid, dispatch])

    function handleLogout(){
    dispatch(actLogoutSuccess())
    }

    return (
        <>
            <Link to={PATHS.POST_CREATE} className="ass1-header__btn-upload ass1-btn">
                <i className="icon-Upvote" /> Upload
            </Link>
            {
                currUser ? <div className="wrapper-user">
                    <Link to={PATHS.USER_DETAIL.replace(":user_id",currUser.USERID)} className="user-header">
                        <span className="avatar">
                            <img src={currUser.profilepicture || defaultAvata} />
                        </span>
                        <span className="email">{currUser.fullname}</span>
                    </Link>
                    <div className="logout" onClick={handleLogout}> Logout </div>
                </div>
                    :
                    <Link to={PATHS.LOGIN} className="ass1-header__btn-upload ass1-btn">
                        Login
                    </Link>
            }
        </>
    )
}

