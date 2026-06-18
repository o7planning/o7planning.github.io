# Mối quan hệ phân cấp trong FormModel

Ví dụ này minh họa cách triển khai **Phụ thuộc phân cấp** (Cascading) bên trong
  **FormModel**, đảm bảo tính toàn vẹn của dữ liệu trong các tác vụ nhập liệu phức tạp
  như ghi lại lịch sử làm việc.

* **Lựa chọn phân cấp:** Tương tự như mô hình trong FilterModel, các thuộc tính
  **Company** và **Department** được liên kết theo thứ bậc cha-con. Việc chọn
  một công ty sẽ tự động lọc các tùy chọn có sẵn cho trường phòng ban.

  * **Tải dữ liệu theo ngữ cảnh:** Hàm `performLoadMultiOptPropXData`
  sử dụng giá trị `parentMultiOptPropValue` để lấy các phòng ban liên quan,
  loại bỏ việc quản lý trạng thái thủ công giữa các menu thả xuống phụ thuộc nhau.

  * **Trích xuất chi tiết mục:** Minh họa cách sử dụng `extractMultiOptPropValueFromItemDetail`
  để điền chính xác dữ liệu vào các trường phân cấp khi chỉnh sửa bản ghi, giữ cho UI luôn
  đồng bộ với thực thể phía backend.

*Trọng tâm kỹ thuật: Tái hiện logic phân cấp trong FormModel để tạo ra các đầu vào người dùng nhất quán và đã được kiểm chứng.*

Vui lòng xem cấu hình `multiOptPropDefs` trong phần **Bài viết liên quan** để tìm hiểu cách lồng ghép các thuộc tính.
