import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actLogout } from "../../store/users/actions"

export default function RightContent() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.Users.token)
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push('/login');
        }
    }, [token, history])

    function handleLogout() {
        dispatch(actLogout());
    }

    return (
        <>
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây của bạn.</div>
                </div>
                <div>Vui lòng đăng nhập để xem nội dung này
                  <Link to="/login">Đăng nhập</Link>
                </div>
                <button className="ass1-btn" onClick={handleLogout}>Logout</button>
            </aside>
        </>
    )
}