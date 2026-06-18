# Cập nhật dữ liệu tức thì với BlockQuickItemUpdateAction

Ví dụ này minh họa cách thực hiện các **Hành động nhanh** (Quick Action) để sửa đổi
  các mục của Block ngay lập tức mà không cần thông qua một **FormView** truyền thống phức tạp.

* **Lược bỏ sự phức tạp của Form:** **QuickAction** cho phép sửa đổi dữ liệu tức thì
  (ví dụ: cập nhật trạng thái VIP hoặc Mã khách hàng) bằng cách thực thi logic trực tiếp qua Block,
  bỏ qua bước thu thập dữ liệu thủ công trên Form.

  * **Đồng bộ Block trực tiếp:** Ngay khi `performQuickUpdateItem()` nhận kết quả
  thành công từ API, **Block** sẽ tự động cập nhật mục tương ứng trong danh sách nội bộ,
  đảm bảo giao diện phản ánh thay đổi ngay lập tức.

  * **Tích hợp xác nhận:** Hỗ trợ quy trình xác nhận tích hợp (`needToConfirm`),
  tạo ra một lớp bảo vệ cho các hành động quan trọng như thay đổi trạng thái mà không cần
  viết thêm nhiều mã bổ trợ (boilerplate).

<i>Trọng tâm kỹ thuật: Tận dụng BlockQuickItemUpdateAction để thao tác dữ liệu nhẹ nhàng,
tốc độ cao và tự động đồng bộ trạng thái.</i>

Vui lòng xem lệnh gọi `executeQuickItemUpdateAction` trong phần **Bài viết liên quan**
để tìm hiểu luồng thực thi.
