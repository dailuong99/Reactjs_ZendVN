import { Link } from "react-router-dom";


export default function RightContent() {
    return (
        <>
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây của bạn.</div>
                </div>
                <div>Vui lòng đăng nhập để xem nội dung này
                  <Link to="/login">Đăng nhập</Link>
                </div>
            </aside>
        </>
    )
}