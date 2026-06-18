# Đồng bộ hóa xuyên Shelf với ExternalShelfEvents

Ví dụ này minh họa một mô hình kiến trúc phức tạp, nơi hai **Shelf** độc lập giao tiếp
  với nhau thông qua các sự kiện để duy trì tính nhất quán dữ liệu trên toàn ứng dụng.

* **Kiến trúc tách rời (Decoupled):** `Supplier27aShelf` (danh sách) và
  `SingleSupplierShelf` (form chỉnh sửa) hoàn toàn tách biệt. Sự tách rời này
  cho phép mỗi thành phần giữ được sự tinh gọn và khả năng tái sử dụng cao.

  * **Phát sự kiện (Emitter):** `SingleSupplierBlock` được cấu hình với
  `emitExternalShelfEvents: [Event(SupplierData)]`. Bất cứ khi nào một nhà cung cấp
  được lưu hoặc sửa đổi, nó sẽ phát đi một tín hiệu tới toàn bộ ứng dụng.

  * **Phản ứng cấp Block (Recipient):** `Supplier27aBlock` đóng vai trò là trình
  lắng nghe thông qua `blockLevelReactionOn: [Event(SupplierData)]`. Khi nhận được
  sự kiện, nó sẽ tự động truy vấn lại dữ liệu để phản ánh những thay đổi đã thực hiện từ shelf bên kia.

  * **Mô hình Coordinator:** Nhấn mạnh việc sử dụng `Coordinator` để kết nối
  hai bên. Nó xử lý việc chuẩn bị (truy vấn mục cụ thể) và điều hướng giữa shelf danh sách và shelf form.

<i>Trọng tâm kỹ thuật: Làm chủ việc giao tiếp xuyên shelf và tận dụng blockLevelReactionOn
để tự động làm mới dữ liệu trong các hệ thống phân tán phản xạ (reactive).</i>

Vui lòng xem `ExternalShelfEventBlockRecipient` trong phần **Bài viết liên quan**
để hiểu cách cấu hình trình lắng nghe bên trong BlockConfig.
