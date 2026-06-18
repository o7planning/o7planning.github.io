# Bộ lọc phân cấp trong FilterModel

Ví dụ này minh họa mối quan hệ **Cha-Con** giữa các tiêu chí lọc,
  đảm bảo tính nhất quán của dữ liệu qua nhiều cấp độ lựa chọn.

* **Hành vi phân cấp:** Khi người dùng lựa chọn giá trị cho tiêu chí **Company** (Công ty), tiêu chí **Department** (Phòng ban) sẽ tự động nhận được thông báo. Sau đó, nó tự động tải lại nguồn dữ liệu để chỉ hiển thị các phòng ban thuộc về công ty đã chọn.

  * **Tự động truyền ngữ cảnh:** **FilterModel** đảm bảo rằng giá trị `parentMultiOptTildeCriterionValue` được truyền vào hàm `performLoadMultiOptTildeCriterionXData()` của tiêu chí con, loại bỏ hoàn toàn việc quản lý trạng thái thủ công.

  * **Cập nhật UI động:** **FilterPanel** phản ứng ngay lập tức để cập nhật danh sách tùy chọn trong menu thả xuống của Phòng ban ngay khi lựa chọn Công ty thay đổi.

*Trọng tâm kỹ thuật: Làm chủ các phụ thuộc tiêu chí lọc phân cấp bên trong một cấu trúc FilterModelStructure thống nhất.*

Vui lòng xem logic `performLoadMultiOptTildeCriterionXData` trong phần **Bài viết liên quan** để biết chi tiết.
