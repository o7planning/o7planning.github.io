# Chọn nhiều với CheckboxGroup & Giá trị mặc định

Ví dụ này minh họa cách sử dụng **CheckboxGroup** để chọn nhiều trong mối quan hệ
  lọc phân cấp, kết hợp với việc thiết lập các **Giá trị mặc định ban đầu**.

* **Chọn nhiều trực quan:** Thay vì menu thả xuống, tiêu chí **Phòng ban**
  sử dụng `FaFormBuilderCheckboxGroup`. Bố cục này cho phép người dùng xem
  tất cả các phòng ban cùng lúc và chọn nhiều mục với độ hiển thị cao.

  * **Giá trị mặc định ban đầu:** Tương tự như Ví dụ 20a, **FilterModel**
  tự động thiết lập trạng thái bắt đầu khi bộ lọc được tải lần đầu—mặc định chọn
  **Công ty** đầu tiên và tất cả các **Phòng ban** của nó.

  * **Linh hoạt thành phần UI:** Ví dụ này khẳng định logic của **FilterModel**
  tách biệt với widget UI. Bạn có thể hoán đổi giữa `MultiDropdown` và
  `CheckboxGroup` mà không cần thay đổi logic lọc cốt lõi.

<i>Trọng tâm kỹ thuật: Tích hợp các widget chọn nhiều trực quan và làm chủ thiết lập
giá trị mặc định ban đầu để người dùng bắt đầu thuận tiện nhất.</i>

Vui lòng xem mã nguồn `Employee44aFilterPanel` trong phần **Bài viết liên quan**
để biết chi tiết triển khai UI.
