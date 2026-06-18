# Lọc dữ liệu động với FilterModel

Ví dụ này minh họa cách xây dựng hệ thống tìm kiếm linh hoạt bằng cách kết hợp
  **FilterModel** và **Block** để truy vấn bài hát theo tiêu đề và album.

* **Cấu trúc bộ lọc khai báo:** Sử dụng `FilterModelStructure` để định nghĩa các tiêu chí tìm kiếm (văn bản đơn giản, đa lựa chọn) và các điều kiện logic (Chứa, Bằng) mà không cần viết logic UI phức tạp.

  * **Tự động tải dữ liệu:** **FilterModel** tự động lấy dữ liệu danh mục (như danh sách Album) để hiển thị trong các thành phần chọn lựa của **FilterPanel**.

  * **Chuyển đổi tiêu chí:** Dữ liệu người dùng nhập được đóng gói thành đối tượng `FilterCriteria`, sau đó truyền trực tiếp vào hàm `performQuery()` của Block để thực hiện truy vấn phía máy chủ.

*Trọng tâm kỹ thuật: Tập trung hóa logic bộ lọc trong FilterModel giúp đồng bộ UI mượt mà và truy vấn dữ liệu mạnh mẽ.*

Xem chi tiết cách triển khai `Song02aFilterModel` trong phần **Bài viết liên quan**.
