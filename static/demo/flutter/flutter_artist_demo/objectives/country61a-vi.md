# Tích hợp Cuộn vô hạn với Bảng Davi

Ví dụ này minh họa tính linh hoạt của FlutterArtist thông qua việc tích hợp **Cuộn vô hạn**
  vào **DAVI**, một thư viện bảng (table) mạnh mẽ và có khả năng tùy biến cao.

* **Tích hợp Bảng bên thứ ba:** Cho thấy cách liên kết `block.items` trực tiếp
  vào **FaDaviTable**, duy trì sự đồng bộ hoàn toàn giữa trạng thái dữ liệu của Block
  và việc hiển thị các hàng trong bảng.

  * **Kích hoạt qua Trailing Widget:** Tận dụng `trailingWidget` và callback
  `onTrailingWidget` chuyên biệt của Davi để phát hiện khi người dùng cuộn đến
  cuối bảng, từ đó tự động kích hoạt lệnh `block.queryMore()`.

  * **Hiển thị dữ liệu mật độ cao:** Nhấn mạnh khả năng xử lý các tập dữ liệu lớn,
  được phân trang bên trong một định dạng lưới có cấu trúc, đi kèm với các cột dữ liệu
  đã được định dạng (Dân số, Diện tích) và hiển thị hình ảnh.

*Trọng tâm kỹ thuật: Kết nối vòng đời phân trang của Block với các bộ điều khiển bảng bên thứ ba để xây dựng các bảng quản trị chuyên nghiệp và giàu dữ liệu.*

Vui lòng xem `_onTrailingWidget` trong phần **Bài viết liên quan** để tìm hiểu
cách kích hoạt phân trang thủ công cho mô hình Davi.
