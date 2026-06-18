# Khởi tạo bộ lọc & Giá trị mặc định

Ví dụ này minh họa mô hình **Bộ lọc phân cấp** kết hợp với khả năng định nghĩa
  các **Giá trị mặc định ban đầu** cho các tiêu chí tìm kiếm.

* **Thiết lập trạng thái ban đầu:** Khi **FilterModel** được tải lần đầu tiên,
  hệ thống tự động điền các giá trị mặc định vào tiêu chí lọc. Ví dụ: tự động chọn
  **Công ty** đầu tiên và tất cả các **Phòng ban** liên quan để hiển thị kết quả ngay lập tức.

  * **Phân cấp động:** Hiển thị mối quan hệ Cha-Con nơi danh sách **Phòng ban**
  (Chọn nhiều) tự động điều chỉnh các tùy chọn có sẵn dựa trên **Công ty** (Chọn đơn) được chọn.

  * **Khởi đầu thuận tiện:** Bằng cách thiết lập giá trị mặc định trong lần tải đầu tiên,
  hệ thống giảm thiểu số lần nhấp chuột cần thiết để người dùng thấy được nhóm dữ liệu liên quan đầu tiên.

*Trọng tâm kỹ thuật: Làm chủ hàm `specifyDefaultValue` để cấu hình trạng thái bắt đầu của bộ lọc.*

Vui lòng xem **Bài viết liên quan** để biết chi tiết triển khai logic giá trị mặc định.
