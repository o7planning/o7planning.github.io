# Phân trang bằng mã & Kiểm soát tùy chỉnh

Ví dụ này minh họa cách tương tác thủ công với **Pagination API** của một Block,
  cho phép nhà phát triển xây dựng các trải nghiệm điều hướng tùy chỉnh thay vì phụ thuộc
  vào các widget tiêu chuẩn.

* **API phân trang của Block:** Khám phá các phương thức cốt lõi để điều hướng dữ liệu,
  bao gồm `queryNextPage()`, `queryPreviousPage()`, và `queryMore()`.
  Các phương thức này cung cấp quyền kiểm soát hoàn toàn việc tải dữ liệu khi nào và như thế nào.

  * **Mô hình "Tải thêm":** Phương thức `queryMore()` làm nổi bật logic của
  "Cuộn vô tận" (Infinite Scroll) bằng cách tải trang tiếp theo và nối trực tiếp vào danh sách hiện tại
  thay vì thay thế toàn bộ danh sách.

  * **Theo dõi Metadata thời gian thực:** Cho thấy cách truy cập `Block.paginationInfo`
  để hiển thị các thông số quan trọng như Tổng số mục, Trang hiện tại và Tổng số trang, giúp
  người dùng luôn nắm bắt được ngữ cảnh dữ liệu.

*Trọng tâm kỹ thuật: Tương tác trực tiếp với các phương thức phân trang của Block và giám sát metadata phân trang để tích hợp UI tùy chỉnh.*

Vui lòng xem `Teacher15aPaginationCtrl` trong phần **Bài viết liên quan** để tìm hiểu cách triển khai các hành động phân trang thủ công.
