# Nhập liệu hiệu quả với BlockQuickItemCreationAction

Ví dụ này minh họa cách triển khai các hành động **Tạo nhanh**, cho phép thêm mới
  các mục vào Block ngay lập tức mà không cần sử dụng **FormView** tiêu chuẩn.

* **Quy trình tinh gọn:** **QuickItemCreationAction** loại bỏ quy trình điền form
  truyền thống. Đây là giải pháp hoàn hảo cho các tác vụ tạo mới đơn giản (như ghi chú nhanh)
  nơi dữ liệu được thu thập qua các hộp thoại nhẹ hoặc trường văn bản đơn giản.

  * **Phản hồi UI tức thì:** Sau khi `performQuickCreateItem()` thực thi thành công,
  đối tượng **ITEM_DETAIL** mới tạo sẽ được tự động tích hợp vào danh sách hiện tại của Block,
  giúp dữ liệu mới hiển thị ngay lập tức mà không cần tải lại trang.

  * **Tối ưu hóa lập trình:** Bằng cách lược bỏ việc định nghĩa một **FormModel**
  đầy đủ cho các tác vụ đơn giản, nhà phát triển có thể triển khai logic tạo mới nhanh hơn
  trong khi vẫn duy trì tính nhất quán với trạng thái dữ liệu của Block.

*Trọng tâm kỹ thuật: Làm chủ việc chèn dữ liệu nhẹ nhàng bằng BlockQuickItemCreationAction để tạo ra trải nghiệm người dùng tốc độ cao và mang tính tương tác.*

Vui lòng xem cách triển khai `executeQuickItemCreationAction` trong phần **Bài viết liên quan** để biết chi tiết luồng tạo mới.
