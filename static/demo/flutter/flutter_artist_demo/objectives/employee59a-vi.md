# Field-Based JSON & Bộ lọc phân cấp độc lập

Ví dụ này minh họa kiến trúc lọc nâng cao sử dụng **Field-Based JSON**, cho phép duy trì
  nhiều thực thể độc lập của mối quan hệ cha-con trong cùng một mô hình bộ lọc.

* **Tính độc lập dựa trên Template:** Mặc dù mối quan hệ **Company** và **Department**
  được định nghĩa một lần trong template, chúng được triển khai thành các cặp độc lập
  (ví dụ: `company~1/department~1` và `company~2/department~2`) trên giao diện.

  * **Phản xạ biệt lập:** Việc thay đổi lựa chọn trên `company~1` chỉ khiến
  `department~1` tải lại dữ liệu. Sự biệt lập này đảm bảo tương tác trên cặp phân cấp
  này không gây ảnh hưởng đến trạng thái hoặc dữ liệu của cặp khác, dù chúng dùng chung logic cơ sở.

  * **Truy vấn máy chủ thống nhất:** Tất cả các tiêu chí độc lập được đóng gói vào cấu trúc
  **Field-Based JSON**. Điều này cho phép phía máy chủ xử lý các logic lọc đa tầng phức tạp
  trong một yêu cầu duy nhất thông qua hàm `performQuery()`.

<i>Trọng tâm kỹ thuật: Làm chủ logic phân cấp biệt lập và Field-Based JSON cho các giao diện
lọc mật độ cao và phức tạp.</i>

Vui lòng xem `defineFilterModelStructure` trong phần **Bài viết liên quan** để
tìm hiểu cách các tiêu chí tilde độc lập này được ánh xạ.
