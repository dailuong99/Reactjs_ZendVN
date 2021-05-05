
export default function MainPost({ post }) {
    

    return (
        <>
            <p>{post.post_content}</p>
            <div className="ass1-section__image">
                <a href={post.url_image}><img src={post.url_image} alt="" /></a>
            </div>
        </>
    )
}