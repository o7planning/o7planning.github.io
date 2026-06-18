# Tự Động Cấp Phát Bộ Nhớ & Cắt Tỉa Tuyến Đường

Ví dụ này minh họa cơ chế **Quản lý Vòng đời Bộ nhớ** và **Tự động Thu gom Rác (GC)** nâng cao trong hệ sinh thái `FlutterArtist`, thông qua việc áp dụng cấu hình `ShelfReleasePolicy.unmount`.

###  Mục Tiêu Cốt Lõi

* **Giải phóng Bộ nhớ Khai báo (Declarative Release):** Trực quan hóa cách thiết lập `releasePolicy: ShelfReleasePolicy.unmount` giúp hệ thống lõi `_StorageCore` tự động giám sát và đánh dấu một `Shelf` là "mồ côi" ngay khi thành phần UI cuối cùng của nó unmount khỏi màn hình.
* **Bộ Gom Rác Tự Vận Hành (Autonomous GC):** Tìm hiểu cơ chế quét dọn định kỳ mỗi 30 giây của bộ dọn rác nền. Thay vì xóa bỏ ngay lập tức gây phân mảnh, hệ thống đưa Shelf vào trạng thái chờ cảnh báo, giúp RAM luôn sạch sẽ mà không làm giảm hiệu năng.
* **Tự Động Cứu Sống Bộ Nhớ (Retention Rescue):** Trải nghiệm tính năng hủy cờ "mồ côi" cực kỳ thông minh nếu người dùng quay trở lại màn hình liên quan trước khi bộ GC quét qua, giúp loại bỏ hoàn toàn việc truy vấn lại database và độ trễ khởi động lạnh.
* **Cắt Tỉa Stack Linh Hoạt:** Thấy được cách sử dụng lệnh `router.off()` để phá vỡ quy tắc ngăn xếp LIFO cứng nhắc thông thường, giúp loại bỏ các màn hình trung gian (như `Product18aScreen`) và giải phóng hoàn toàn tài nguyên liên đới.

---

> **Trọng Tâm Kỹ Thuật:** *Tái lập các chính sách quản lý bộ nhớ doanh nghiệp cao cấp ngay trong Flutter nhằm ngăn chặn triệt để tình trạng rò rỉ RAM khi chuyển trang phức tạp.*

Hãy xem cấu hình `ShelfConfig` và bảng `DebugRouteStackStateView` trong **Tài liệu Liên quan** để quan sát cách bộ GC tương tác với cây điều hướng.
