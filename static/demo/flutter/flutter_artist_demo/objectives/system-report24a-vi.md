# Thống kê Phản xạ với Trình lắng nghe Sự kiện cấp Scalar

Ví dụ này minh họa cách một **Scalar** (đại diện cho dữ liệu tổng hợp hoặc thống kê)
  tự động cập nhật phản xạ trước các sự kiện được kích hoạt bởi các **Block** bên ngoài.

* **Đồng bộ Thống kê xuyên Shelf:** `SystemReport24aScalar` quản lý các con số
  tổng quát (Nhân viên, Nhà cung cấp, Sản phẩm). Nó cần duy trì tính chính xác ngay cả khi
  dữ liệu bị thay đổi ở một phần hoàn toàn khác của hệ thống như `SingleSupplierShelf`.

  * **Phản ứng cấp Scalar:** Sử dụng `scalarLevelReactionOn: [Event(SupplierData)]`,
  Scalar trở thành một quan sát viên. Ngay khi một nhà cung cấp mới được tạo, Scalar sẽ
  bắt lấy sự kiện và tự kích hoạt `performQuery()` của chính nó để lấy các con số cập nhật.

  * **Bộ phát Sự kiện:** Củng cố vai trò của `SingleSupplierBlock` như một bộ phát.
  Bằng cách phát đi các sự kiện `SupplierData`, nó đảm bảo rằng tất cả các thành phần
  quan tâm—dù là Danh sách (Block) hay Thống kê (Scalar)—đều có thể phản ứng phù hợp.

  * **Mô hình Tích hợp Dashboard:** Nhấn mạnh một mô hình chuyên nghiệp để xây dựng các
  Dashboard thời gian thực, nơi các widget tổng hợp tự động phản ánh các thay đổi dữ liệu chi tiết
  mà không cần tải lại trang thủ công.

*Trọng tâm kỹ thuật: Triển khai các dashboard phản xạ hiệu năng cao bằng cách kết nối các hành động cấp Block với các trình nhận sự kiện cấp Scalar.*

Vui lòng xem `ExternalShelfEventScalarRecipient` trong phần **Bài viết liên quan** để tìm hiểu cấu hình trình lắng nghe cho Scalar.
