
export default function InfoPost({listpost}) {
    return (
        <>
            <a href="bai-viet-chi-tiet.html" className="ass1-section__name">{listpost.fullname}</a>
            <span className="ass1-section__passed">{listpost.time_added}</span>
        </>
    )
}


