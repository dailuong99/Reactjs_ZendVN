import { Link } from "react-router-dom";
import Button from "../shared/Button";



export default function PageNotFound() {
  return (
    <>
      <div className="spacing"></div>
      <div className="tcl-jc-center">
            <div className="col-5">
              <img src="https://cdn.24h.com.vn/images/404img_092018.png" alt="Hinh ảnh anh Lực chôm từ 24h" />
            </div>
            <div className="col-7">
              <h1>Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung</h1>
              <Button>
                <Link to="/">Quay lại trang chủ</Link>
                </Button>
            </div>
      </div>
    </>
  )
}