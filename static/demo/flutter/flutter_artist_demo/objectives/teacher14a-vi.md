# Phân trang theo số với BlockNumberPagination

Ví dụ này minh họa mô hình điều hướng kiểu **Web-style** sử dụng thành phần
  **BlockNumberPagination**, cực kỳ phù hợp cho các ứng dụng máy tính hoặc bảng điều khiển dữ liệu lớn.

* **Kiểm soát trang rõ ràng:** Người dùng có thể duyệt qua các tập dữ liệu lớn bằng cách
  chọn trực tiếp số trang, giúp xác định vị trí chính xác trong tổng số bản ghi hiện có.

  * **Điều hướng theo trạng thái:** **BlockNumberPagination** đồng bộ hóa một cách phản xạ
  với trạng thái `Pageable` của Block. Nó tự động cập nhật mục đánh dấu trang đang hoạt động
  và xử lý các lệnh "Đầu/Cuối" cũng như "Tiếp/Trước".

  * **Tùy biến hiển thị:** Nhà phát triển có thể kiểm soát số lượng nút trang hiển thị
  (ví dụ: `visiblePagesCount: 10`), đảm bảo giao diện luôn gọn gàng ngay cả
  khi hệ thống có hàng trăm trang dữ liệu.

*Trọng tâm kỹ thuật: Triển khai logic phân trang có cấu trúc, không phụ thuộc thao tác cuộn, dành cho việc quản lý thông tin mật độ cao.*

Vui lòng xem cấu hình `BlockNumberPagination` trong phần **Bài viết liên quan** để biết chi tiết tùy chỉnh UI.
