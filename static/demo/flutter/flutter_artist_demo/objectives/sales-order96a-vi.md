# Đồng bộ Cha-Con mượt mà với InternalShelfEvent

Ví dụ này minh họa cơ chế **InternalShelfEvent**, nơi các thành phần trong cùng một
  **Shelf** hoạt động như một thực thể thống nhất để duy trì tính nhất quán dữ liệu thời gian thực.

* **Phản xạ Nội bộ:** Khi một dòng chi tiết (`SalesOrderLine`) được tạo mới,
  sửa đổi hoặc xóa, nó sẽ tự động phát ra tín hiệu nội bộ. Block cha (`SalesOrderBlock`)
  nhận tín hiệu này và tự làm mới để hiển thị các số liệu tổng đã cập nhật (Tổng tiền, Thuế...).

  * **Phản ứng cấp Item:** Nhấn mạnh cấu hình `itemLevelReactionOn`. Thay vì
  truy vấn lại toàn bộ danh sách, **Block** thực hiện tải lại một cách thông minh chỉ
  **mục dữ liệu hiện tại**, đảm bảo hiệu suất cao và trải nghiệm mượt mà.

  * **Logic thực thể thống nhất:** Cho thấy cách các Block, Scalar và Shelf phối hợp
  không tì vết. Mọi hành động—từ lưu Form đến QuickAction hay BackendAction—phát sinh trong
  nội bộ Shelf đều tự động kích hoạt các phản ứng này.

  * **Toàn vẹn dữ liệu tự động:** Loại bỏ việc phải viết mã làm mới dữ liệu thủ công,
  đảm bảo rằng phần thông tin Tổng quát (Header) và Chi tiết (Detail) luôn đồng bộ hoàn hảo.

*Trọng tâm kỹ thuật: Tận dụng InternalShelfEventBlockRecipient để tự động hóa việc làm mới dữ liệu giữa các Block có cấu trúc phân cấp trong cùng một Shelf.*

Vui lòng xem `Evt.ofBlock` trong cấu hình **SalesOrder96aShelf** để tìm hiểu cách định nghĩa các phụ thuộc nội bộ.
