import { useMemo } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import { PATHS } from "../../../constants/path";


export default function MainPost({ post }) {
    const match = useRouteMatch(PATHS.SEARCH_RESULT);
    const location = useLocation();

    const query = useMemo(() => {
        const parsed = queryString.parse(location.search);

        if (parsed.query) {
            return parsed.query.toLowerCase()
        }

    }, [location]);


    const renderPostContent = useMemo(() => {
        if (match && query) {
            const textPostContentHtml = post.post_content
                .toLowerCase()
                .split(query)
                .join(`<mark>${query}</mark>`);

                return      <p  dangerouslySetInnerHTML= {{
                    __html: textPostContentHtml
                 }}/>
        }
        return    <p>{post.post_content}</p>
        
    }, [match,query]);

    return (
        <>
           {renderPostContent}
            <div className="ass1-section__image">
                <a href={post.url_image}><img src={post.url_image} alt="" /></a>
            </div>
        </>
    )
}