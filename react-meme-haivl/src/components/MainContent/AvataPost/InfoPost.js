
export default function InfoPost({post}) {
    return (
        <>
            <a href="bai-viet-chi-tiet.html" className="ass1-section__name">{post.fullname}</a>
            <span className="ass1-section__passed">{post.time_added}</span>
        </>
    )
}


