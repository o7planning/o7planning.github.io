# Cốt lõi về FormModel & Đồng bộ Dữ liệu

Ví dụ này minh họa cách sử dụng cơ bản của **FormModel** để quản lý trạng thái,
  kiểm tra tính hợp lệ và gửi dữ liệu trong một luồng CRUD chuyên nghiệp.

* **Khai báo thuộc tính:** Sử dụng `defineFormModelStructure` để định nghĩa
  các trường dữ liệu và kiểu dữ liệu tương ứng (String, bool, dynamic). Mỗi thuộc tính trong
  model sẽ ánh xạ trực tiếp với một **InputField** trên giao diện.

  * **Quản lý trạng thái:** **FormView** lắng nghe model một cách phản xạ. Khi người dùng
  nhập liệu hoặc chọn tùy chọn, **FormModel** tự động thu thập và tập trung hóa thông tin
  này vào một đối tượng `Map&lt;String, dynamic&gt;` duy nhất.

  * **Thực thi CRUD:** Minh họa cách dữ liệu tổng hợp được truyền vào hàm `performCreateItem()`
  hoặc `performUpdateItem()`, giúp tách biệt hoàn toàn giữa thành phần giao diện
  và logic gọi API.

*Trọng tâm kỹ thuật: Làm chủ vòng đời của dữ liệu Form từ lúc nhập liệu đến khi đóng gói thành đối tượng Map để tích hợp API.*

Xem chi tiết `Supplier11aFormModel` trong phần **Bài viết liên quan** để tìm hiểu cách ánh xạ thuộc tính.
