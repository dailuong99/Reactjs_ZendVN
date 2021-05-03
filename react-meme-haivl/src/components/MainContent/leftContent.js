import Button from './../shared/Button/index';


import { useSelector } from 'react-redux';
import AvataPost from './AvataPost/index';
import InfoPost from './AvataPost/InfoPost';

import MainPost from './MainPost/index';
import CommnetCount from './MainPost/CommentCount';

import { usePostsPaging } from '../hooks/usePostsPaging';

export default function LeftContent() {
    const listposts = useSelector(state => state.Posts.postList)
    console.log('listposts', listposts)

    return (

        <>
            {
                listposts.map(listpost => {
                    return (
                        <div className="ass1-section__item" key={listpost.USERID}>
                            <div className="ass1-section" >
                                <div className="ass1-section__head" >
                                    <a href="bai-viet-chi-tiet.html"
                                        className="ass1-section__avatar ass1-avatar" >
                                        <AvataPost listpost={listpost} > </AvataPost> </a> < div >
                                        <InfoPost listpost={listpost} > </InfoPost>
                                    </div>
                                </div>
                                <div className="ass1-section__content" >
                                    <MainPost listpost={listpost} > </MainPost>
                                </div> <div className="ass1-section__footer" >
                                    <CommnetCount listpost={listpost} > </CommnetCount>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
            <div className="ass1-section__list" >
                <Button type='loadmore'
                    variant='loadmore' > <span> Xem thêm </span></Button > { /* {renderButtonLoadmore()} */}
                     </div>

        </>
    )
}