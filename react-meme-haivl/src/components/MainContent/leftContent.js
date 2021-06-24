import { useSelector } from "react-redux";
import SectionItem from "./SectionItem";

export default function LeftContent({posts}) {

    return (
        <div className="ass1-section__list">
            {
                posts && posts.map(post => {
                    return <SectionItem post={post} key={post.PID}></SectionItem>
                })
            }
        </div>
    )
}