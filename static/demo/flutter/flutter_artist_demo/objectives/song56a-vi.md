# Field-Based JSON: Chuyển đổi giá trị với toFieldValue

Ví dụ này minh họa cách trích xuất dữ liệu cụ thể từ các đối tượng phức tạp để thực hiện
  truy vấn phía máy chủ, sử dụng hàm `toFieldValue()` trong **FilterModel**.

* **Ánh xạ Đối tượng thành Giá trị:** Trong khi giao diện người dùng tương tác với toàn bộ
  đối tượng `AlbumInfo` (để hiển thị tên, ảnh bìa...), hàm `toFieldValue()`
  đảm bảo rằng chỉ có `albumId` cần thiết được trích xuất và gửi tới máy chủ.

  * **Lọc đa thực thể:** Ví dụ củng cố khái niệm "Tilde" bằng cách tạo ra hai tiêu chí
  chọn album độc lập (`album~1` và `album~2`), được liên kết qua
  toán tử **OR** trong `FilterConditionStructure`.

  * **Logic trạng thái ban đầu:** Minh họa cách thiết lập các giá trị mặc định khác nhau
  cho nhiều thực thể—chọn album đầu tiên cho ô nhập liệu thứ nhất và album cuối cùng cho
  ô thứ hai—mang lại bộ dữ liệu ban đầu phong phú.

*Trọng tâm kỹ thuật: Làm chủ logic chuyển đổi dữ liệu để đảm bảo tương thích với Backend trong khi vẫn duy trì mô hình đối tượng đầy đủ ở Frontend.*

Vui lòng xem `multiOptCriterionDefs` trong phần **Bài viết liên quan** để tìm hiểu cách triển khai `toFieldValue`.
