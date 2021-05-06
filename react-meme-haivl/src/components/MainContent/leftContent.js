import AvataPost from './AvataPost/index';
import InfoPost from './AvataPost/InfoPost';

import MainPost from './MainPost/index';
import CommnetCount from './MainPost/CommentCount';
import { usePostsPaging } from '../hooks/usePostsPaging';

function returnHandleMap(isSearch){
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
                        <CommnetCount  post={post}> </CommnetCount>
                    </div>
                </div>
            </div>
        )
    }
    return handleMap;
}



export default function LeftContent() {

    const {
        posts,
        renderButtonLoadmore
    } = usePostsPaging({
    })
    return (
        <>
            {
                posts.map(returnHandleMap(false))
            }
            <div className="ass1-section__list" >
                {renderButtonLoadmore()}
            </div>
        </>
    )
}