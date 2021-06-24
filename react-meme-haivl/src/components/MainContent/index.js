
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userScrollEndPage } from '../../helpers';
import { actFetchPostsAsync } from '../../store/posts/actions';
import LeftContent from './leftContent';
import RightContent from './rightContent';



export default function MainContent() {
    const dispatch = useDispatch();
    const [currPage, setcurrPage] = useState(1);
    const [pagesize, setpagesize] = useState(10);
    const [isEmpty,setIsEmpty] = useState(false);
    const [callLingApi, setCallLingApi] = useState(false);
    const posts = useSelector(state => state.Posts.listNewItem);

    useEffect(() => {
        setCallLingApi(true)
        dispatch(actFetchPostsAsync({ currPage, pagesize }))
            .then((res) => {
                if(res.ok && res.data.length === 0){
                    setIsEmpty(true)
                }
                setCallLingApi(false)
              
            })
    }, [dispatch, pagesize, currPage]);

    const handleScrollEndPage = useCallback(() => {
        if (!callLingApi && isEmpty === false) {
            setcurrPage(currPage + 1)
        }
    }, [currPage, callLingApi]);

    userScrollEndPage(handleScrollEndPage);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <LeftContent posts={posts}></LeftContent>
                </div>
                <div className="col-lg-4">
                    <RightContent></RightContent>
                </div>
            </div>
        </div>

    )
}