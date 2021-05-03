
export default function MainPost({ listpost }) {
    

    return (
        <>
            <p>{listpost.post_content}</p>
            <div className="ass1-section__image">
                <a href={listpost.url_image}><img src={listpost.url_image} alt="" /></a>
            </div>
        </>
    )
}