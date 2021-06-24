import { useMemo } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { PATHS } from "../../../constants/path";
import queryString from "query-string";

export default function InfoPost({post}) {
    const match = useRouteMatch(PATHS.SEARCH_RESULT);
    const location = useLocation();

    const query = useMemo(() => {
        const parsed = queryString.parse(location.search);

        if (parsed.query) {
            return parsed.query.toLowerCase()
        }

    }, [location]);


    const renderFullName = useMemo(() => {
        if (match && query) {
            const textFullNameHtml = post.fullname
                .toLowerCase()
                .split(query)
                .join(`<mark>${query}</mark>`);

                return     <Link
                to={PATHS.USER_DETAIL} 
                className="ass1-section__name"
                dangerouslySetInnerHTML= {{
                   __html: textFullNameHtml
                }}
                />
        }
        return     <Link
         to={PATHS.USER_DETAIL} 
         className="ass1-section__name"
       >
        {post.fullname}
       </Link>
        
    }, [match,query]);


    return (
        <>
        {renderFullName}
            <span className="ass1-section__passed">{post.time_added}</span>
        </>
    )
}


