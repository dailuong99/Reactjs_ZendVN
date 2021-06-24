import { Link } from "react-router-dom";
import { PATHS } from "../../constants/path";

export default function RightHeaderMenu() {
    return (
        <>
            <Link to={PATHS.POST_CREATE} className="ass1-header__btn-upload ass1-btn">
                <i className="icon-Upvote" /> Upload
            </Link>
            <Link to={PATHS.LOGIN} className="ass1-header__btn-upload ass1-btn">
                Login
            </Link>
        </>
    )
}

