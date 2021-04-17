- Sau khi có data trong Store của bài viết Render dữ liệu

```javascript
// short description
// Bỏ thẻ <p> thừa
// Cắt bớt một phần nếu quá dài
// Chỉ hiển thị 26 từ đầu tiên
// Nếu dài hơn 26 từ thêm dấu "..."
{
  "excerpt": {
    "rendered": "<p>React is an open source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile apps.</p>\n",
    "protected": false
  }
}
```


```javascript
// Xử lý định dạng ngày tháng
// 02/03/2021 (Tự làm or Dùng thư viện)
// So sánh với thời gian hiện tại (Tự làm or Dùng thư viện)
//    ? phút trước
//    ? giờ trước
//    vài giây trước
//    https://www.npmjs.com/package/dayjs
{
  "date": "2020-08-08T07:31:59",
}
```


```javascript
// Danh sách danh mục bài viết 
// BackEnd chỉ trả về một list chứa các ID của categories
// FrontEnd phải lấy data về và tìm kiếm thông tin chi tiết bằng ID
{
  "categories": [
    82,
    84
  ],
}
```

- Tạo một Service mới để tương tác với dữ liệu category
- services/categories.js

- Tạo một Reducer mới cho Category. Khai báo trong rootReducer
- store/categories/actions.js
- store/categories/reducer.js

```
{{base_url}}/wp/v2/categories?per_page=100&page=1&lang=vi
```

- Lấy toàn bộ data về danh mục bài viết lưu trong Front End

```javascript
const categories = [
  {
    id: 50,
    name: 'Front End',
    slug: 'fe',
    ...
  },
  {
    id: 50,
    name: 'Front End',
    slug: 'fe',
    ...
  }
]
```

```javascript
// Dựa vào danh sách ID từ bài viết 
// Quy về bài toán tìm kiếm tìm thông tin chi tiết bao gồm name, slug từ dữ liệu Categories
{
  "categories": [
    82,
    84
  ],
}

//  slug: 'fe' dùng để xây dựng link 
// Trỏ sang trang hiển thị bài viết thuộc category đó
// react-router: path = /category/:slug
```


```javascript
// Chức năng phân trang cho bài viết tổng hợp
// Bài viết mới nhất: Chỉ lấy 3 bài đầu tiên
// Bài viết phổ biến: Chỉ lấy 3 bài đầu tiên
// Bài viết tổng hợp: Lấy 4 bài, sau đó có thể tải thêm nhiều bài mới
// Khi User nhấn vào button Tải thêm gọi API mới tăng biến page lên một đơn vị
//   - Khi F5 lại trang lần 1: Gọi API với page = 1
//   - Khi User click button "Tải thêm": dispatch mới một action và truyền page tăng lên một đơn vị
//   - Sau khi gọi API xong thì nối hai mảng lại mới nhau
```