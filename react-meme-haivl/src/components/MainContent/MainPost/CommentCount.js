export default function CommnetCount({post}) {
if (post.count === null){
    return null
}
    return (

        <a href="#" className="ass1-section__btn-comment ass1-btn-icon">
            <i className="icon-Comment_Full" /><span>{post.count}</span>
        </a>


    )
}