# Bộ lọc tùy chỉnh nâng cao & Tích hợp Widget Cây

Ví dụ này minh họa cách tích hợp các widget tùy chỉnh phức tạp vào
  **FilterPanel** bằng cách sử dụng `FormBuilderField`, trong khi vẫn
  duy trì được mối quan hệ lọc cha-con phản xạ.

* **Đầu vào Cây tùy chỉnh:** Thay vì sử dụng menu thả xuống tiêu chuẩn, tiêu chí **Company**
  được hiển thị dưới dạng **CompanyTreeView**. Bằng cách bao bọc nó trong `FormBuilderField`,
  nó hoạt động như một thành phần nhập liệu chuẩn, thay thế hoàn hảo cho `FormBuilderDropdown`.

  * **Khả năng tương tác chuẩn:** Ngay cả với một Widget cây tùy chỉnh, hệ thống vẫn duy trì
  khả năng tương thích hoàn toàn với các thành phần tiêu chuẩn như dropdown **Department**. Việc chọn
  một nút trên Cây sẽ tự động kích hoạt logic phân cấp cho dropdown phụ thuộc.

  * **Xử lý trạng thái phản xạ:** Việc sử dụng `field.didChange(item)` đảm bảo
  **FilterModel** được thông báo tức thì về các lựa chọn của người dùng trong Widget Cây,
  từ đó kích hoạt truy vấn dữ liệu theo thời gian thực.

*Trọng tâm kỹ thuật: Biến đổi bất kỳ widget UI tùy chỉnh nào thành một đầu vào bộ lọc tiêu chuẩn thông qua FormBuilder.*

Xem mã nguồn `Employee33aFilterPanel` trong phần **Bài viết liên quan** để biết chi tiết tích hợp.
