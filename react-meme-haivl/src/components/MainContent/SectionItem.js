import { useMemo } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { PATHS } from "../../constants/path";
import AvataPost from "./AvataPost";
import InfoPost from "./AvataPost/InfoPost";
import MainPost from "./MainPost";
import CommnetCount from "./MainPost/CommentCount";
import queryString from "query-string";


export default function SectionItem({post}) {
    const match = useRouteMatch(PATHS.SEARCH_RESULT);
    const location = useLocation();

    const query = useMemo(() => {
        const parsed = queryString.parse(location.search);

        if (parsed.query) {
            return parsed.query.toLowerCase()
        }

    }, [location]);


    // const formatFullName = useMemo(() => {
    //     if (match && query) {
    //         return post.fullname
    //             .toLowerCase()
    //             .split(query)
    //             .join(`<mark>${query}</mark>`);
    //     }
    //     return post.fullname;
    // }, [match,query]);
    // console.log("formatFullName",formatFullName)

if(!post) return null;

    return (

        <div className="ass1-section__item" >
            <div className="ass1-section" >
                <div className="ass1-section__head" >
                    <a href="bai-viet-chi-tiet.html"
                        className="ass1-section__avatar ass1-avatar" >
                        <AvataPost post={post} > </AvataPost>
                    </a>
                    <div>
                        <InfoPost post={post} > </InfoPost>
                    </div>
                </div>
                <div className="ass1-section__content" >
                    <MainPost post={post} > </MainPost>
                </div> 
                <div className="ass1-section__footer" >
                    <CommnetCount post={post}> </CommnetCount>
                </div>
            </div>
        </div>
    )
}