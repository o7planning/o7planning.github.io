# Sắp xếp Thủ công với SortStrategy.manual

Ví dụ này minh họa cách trao quyền cho người dùng với khả năng **Sắp xếp thủ công**,
  cho phép họ trực tiếp định nghĩa thứ tự của các mục thông qua tương tác **Kéo & Thả** trực quan.

* **Cấu hình Chiến lược Thủ công:** Để cho phép sắp xếp theo ý muốn người dùng,
  **BlockConfig** phải được thiết lập rõ ràng thành `SortStrategy.manual`.
  Điều này vô hiệu hóa việc sắp xếp tự động và chuyển toàn bộ quyền kiểm soát thứ tự mục
  cho logic phía client.

  * **Tích hợp Kéo & Thả:** Cho thấy sự tích hợp mượt mà với `ReorderableListView`
  của Flutter. Giao diện ghi lại hành động di chuyển, và **Block** đồng bộ hóa trạng thái
  nội bộ thông qua phương thức `moveItemByIndexPosition()`.

  * **Tính nhất quán của trạng thái:** Ngay cả sau khi thay đổi vị trí, **Block**
  vẫn duy trì đúng ngữ cảnh "Mục hiện tại". Việc sử dụng `refreshItemAndSetAsCurrent()`
  đảm bảo rằng thao tác chọn một mục vẫn chính xác bất kể vị trí mới của nó trong danh sách.

*Trọng tâm kỹ thuật: Triển khai sắp xếp tương tác bằng cách kết nối các sự kiện của ReorderableListView với trình quản lý sắp xếp thủ công của Block.*

Vui lòng xem triển khai `_onReorder` trong phần **Bài viết liên quan** để tìm hiểu logic tính toán chỉ số và di chuyển mục.
