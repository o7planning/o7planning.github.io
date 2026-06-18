# Mối quan hệ Master-Detail đơn giản

Ví dụ này minh họa cách thiết lập liên kết **Master-Detail** giữa hai block, trong đó dữ liệu con sẽ tự động được lọc dựa trên lựa chọn ở block cha.

* **Đồng bộ tự động:** Khi người dùng chọn một **Danh mục** (Block Cha), **Block Sản phẩm** (Block Con) sẽ nhận thông báo để tự động làm mới dữ liệu của mình.
* **Truy vấn dữ liệu:** Block Con sử dụng tham số `parentBlockCurrentItem` trong hàm `performQuery()` để chỉ lấy các sản phẩm thuộc về Danh mục đang hoạt động.
* **Hiển thị chi tiết:** Thông tin chi tiết sản phẩm được trình bày qua **BlockItemDetailView** đặt trong một Dialog, giúp không gian làm việc chính gọn gàng và tập trung.

---

> **Trọng tâm kỹ thuật:** *Làm chủ luồng dữ liệu Cha-Con thông qua ngữ cảnh `parentBlockCurrentItem`.*

Vui lòng xem **Bài viết liên quan** để tìm hiểu kỹ hơn về cách triển khai hàm `performQuery`.
