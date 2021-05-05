import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router"
import Loading from "../shared/Loading"
import queryString from 'query-string';
import PageNotFound from "../PageNotFound";
import { usePostsPaging } from "../hooks/usePostsPaging"
import { actFetchPostsAsync } from "../../store/posts/actions"
import AvataPost from "../MainContent/AvataPost"
import InfoPost from "../MainContent/AvataPost/InfoPost"
import MainPost from "../MainContent/MainPost"
import CommnetCount from "../MainContent/MainPost/CommentCount"

import Header from '../header/index';
import Footer  from '../footer/index';

function handleMap(post) {
    return (
        <div className="ass1-section__item" key={post.USERID}>
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
                    <CommnetCount post={post} > </CommnetCount>
                </div>
            </div>
        </div>
    )
}

export default function PostsSearch() {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchStr = queryString.parse(location.search).q;
    const [loadingFirst, setLoadingFirst] = useState(true);

    const {
        posts,
        totalElements,
        renderButtonLoadmore
    } = usePostsPaging({
        extraParams: {
            search: searchStr
        },
        actionAsync: actFetchPostsAsync
    })

    useEffect(() => {
        if (searchStr) {
            dispatch(actFetchPostsAsync({
                search: searchStr
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
                          <div className="text-center p-3"><h4>Có {totalElements} kết quả tìm kiếm với từ khoá "{searchStr}"</h4></div> 
                           {
                                posts.map(handleMap)
                            }
                            <div className="ass1-section__list" >
                                {renderButtonLoadmore()}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer></Footer>


        </>
    )
}