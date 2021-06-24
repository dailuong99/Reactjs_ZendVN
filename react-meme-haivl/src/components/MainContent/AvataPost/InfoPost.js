import { Link } from "react-router-dom";
import { PATHS } from "../../../constants/path";

export default function InfoPost({post}) {
    return (
        <>
            <Link to={PATHS.USER_DETAIL} className="ass1-section__name">{post.fullname}</Link>
            <span className="ass1-section__passed">{post.time_added}</span>
        </>
    )
}


