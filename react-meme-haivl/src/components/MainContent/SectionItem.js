import AvataPost from "./AvataPost";
import InfoPost from "./AvataPost/InfoPost";
import MainPost from "./MainPost";
import CommnetCount from "./MainPost/CommentCount";



export default function SectionItem({post}) {
 

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