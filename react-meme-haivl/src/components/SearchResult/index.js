import { useHistory, useLocation } from "react-router-dom"
import queryString from "query-string";
import React, { useEffect, useMemo } from "react";
import { PATHS } from "../../constants/path";
import { actSearchAsync } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import LeftContent from "../MainContent/leftContent";
import SectionItem from "../MainContent/SectionItem";


export default function SearchResult() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const searchLists = useSelector(state => state.Posts.searchList);

    const query = useMemo(() => {
        const parsed = queryString.parse(location.search);

        if (parsed.query) {
            return parsed.query;
        } else {
            history.push(PATHS.HOMEPAGE)
        }

    }, [history, location]);

    useEffect(() => {
        dispatch(actSearchAsync({ query }))
    }, [query]);

  

    return (
        <div className="container">
           
        <div className="row">
            <div className="col-lg-8">
            <p>Có <strong> {searchLists.length} </strong> kết quả được tìm thấy cho : <strong> "{query}" </strong></p>
                <LeftContent posts={searchLists}></LeftContent>
            </div>

        </div>
    </div>

    )
}