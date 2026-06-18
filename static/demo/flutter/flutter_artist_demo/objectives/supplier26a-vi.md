# Vá dữ liệu Form bằng mã thông qua FormInput

Ví dụ này minh họa cách sử dụng **FormInput** để cập nhật hoặc "vá" (patch)
  nhiều trường dữ liệu trong **FormModel** bằng lập trình, thay thế cho việc nhập liệu thủ công.

* **Tự động nhập liệu:** Cho thấy cách hàm `formModel.patchFormFields()`
  nhận một đối tượng `Supplier26aFormInput` và tự động điền các giá trị vào
  thành phần UI tương ứng (TextField, Dropdown...) ngay lập tức.

  * **Ánh xạ dữ liệu thông minh:** Hàm `extractUpdateValuesForSimpleProps`
  minh họa cách dữ liệu đầu vào được ánh xạ vào các thuộc tính cụ thể của Form,
  đảm bảo trạng thái nội bộ và giao diện luôn đồng bộ.

  * **Xử lý đối tượng phức tạp:** Minh họa cách sử dụng một mã đơn giản (ví dụ: "DI")
  từ đầu vào để tự động tìm và chọn đúng đối tượng phức tạp (`SupplierTypeInfo`)
  trong menu thả xuống thông qua `extractUpdateValueForMultiOptProp`.

*Trọng tâm kỹ thuật: Làm chủ việc điều khiển Form bằng mã lập trình cho các kịch bản UX nâng cao như tự động điền hoặc tích hợp dữ liệu bên ngoài.*

Vui lòng xem logic `_patchFormFields26a` trong phần **Bài viết liên quan** để thấy sự tiện lợi này.
