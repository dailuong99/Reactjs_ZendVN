import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import Loading from "../shared/Loading"
import queryString from 'query-string';
import PageNotFound from "../PageNotFound";
// import { usePostsPaging } from "../hooks/usePostsPaging"
import {  actSearchAsync } from "../../store/posts/actions"
import AvataPost from "../MainContent/AvataPost"
import InfoPost from "../MainContent/AvataPost/InfoPost"
import MainPost from "../MainContent/MainPost"
import CommnetCount from "../MainContent/MainPost/CommentCount"

import Header from '../header/index';
import Footer  from '../footer/index';

function returnHandleMap(isSearch){
    function handleMap(post) {
        return (
            <div className="ass1-section__item" key={post.PID}>
                <div className="ass1-section" >
                    <div className="ass1-section__head" >
                        <a href="bai-viet-chi-tiet.html"
                            className="ass1-section__avatar ass1-avatar" >
                            <AvataPost post={post} > </AvataPost> </a> <div>
                            <InfoPost post={post} > </InfoPost>
                        </div>
                    </div>
                    <div className="ass1-section__content" >
                        <MainPost post={post} > </MainPost>
                    </div> <div className="ass1-section__footer" >
                        <CommnetCount  post={post}> </CommnetCount>
                    </div>
                </div>
            </div>
        )
    }
    return handleMap;
}

export default function PostsSearch() {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchStr = queryString.parse(location.search).query;
    const [loadingFirst, setLoadingFirst] = useState(true);
    const posts = useSelector(state => state.Posts.searchList)

    // const {
    //     posts,
    //     renderButtonLoadmore
    // } = usePostsPaging({
    //     extraParams: {
    //         query: searchStr
    //     },
    //     actionAsync: actSearchAsync
    // })

    useEffect(() => {
        if (searchStr) {
            dispatch(actSearchAsync({
                query: searchStr
            })).finally(() => {
                setLoadingFirst(false)
            })
        }
    }, [dispatch, searchStr])

    if (!searchStr) {
        return (
            <div className="articles-list section">
                <div className="tcl-container">
                    <PageNotFound></PageNotFound>
                </div>
            </div>
        )
    }
    if (loadingFirst) {
        return (
            <div className="articles-list section">
                <div className="tcl-container">
                    <div className="tcl-jc-center">
                        <Loading width={100} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <Header></Header>
            <main>
                <div className="container">
                    {/*sections*/}
                    <div className="row justify-content-center">
                        <div className="col-10">
                          <div className="text-center p-3"><h4>kết quả tìm kiếm với từ khoá "{searchStr}"</h4></div> 
                           {
                                posts.map(returnHandleMap(true))
                            }
                            <div className="ass1-section__list" >
                                {/* {renderButtonLoadmore()} */}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer></Footer>


        </>
    )
}