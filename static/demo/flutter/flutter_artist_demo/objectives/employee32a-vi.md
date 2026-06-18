# Lọc với RadioGroup & Logic Phân cấp

Ví dụ này minh họa cách triển khai mối quan hệ lọc **Cha-Con** bằng cách sử dụng
  các thành phần UI khác nhau để tăng cường trải nghiệm tương tác.

* **Tích hợp RadioGroup:** Thay vì menu thả xuống tiêu chuẩn, tiêu chí **Company**
  sử dụng `FormBuilderRadioGroup`. Điều này cho phép người dùng xem tất cả các công ty
  sẵn có và lựa chọn chỉ với một lần bấm.

  * **Sự đa dạng về Giao diện:** Ví dụ chứng minh rằng **FilterModel** hoàn toàn tách biệt
  với giao diện. Cho dù bạn dùng RadioGroup, Dropdown hay Tree, logic phân cấp bên dưới vẫn
  giữ nguyên và nhất quán.

  * **Phụ thuộc Phản xạ:** Việc chọn một nút radio cho Công ty sẽ lập tức kích hoạt
  dropdown **Department** làm mới danh sách, chỉ hiển thị các phòng ban liên quan đến
  công ty đã chọn.

*Trọng tâm kỹ thuật: Thay đổi linh hoạt các thành phần UI (RadioGroup và Dropdown) trong khi vẫn duy trì logic Bộ lọc Phân cấp mạnh mẽ.*

Vui lòng xem mã nguồn `Employee32aFilterPanel` trong phần **Bài viết liên quan** để biết chi tiết triển khai UI.
