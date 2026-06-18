# Cuộn vô hạn trong Bố cục Lưới (Grid)

Ví dụ này minh họa việc áp dụng **Cuộn vô hạn** bên trong một **GridView**, cho thấy FlutterArtist duy trì logic phân trang nhất quán trên các cấu trúc bố cục khác nhau.

* **Khám phá dạng Lưới:** Người dùng có thể duyệt qua danh sách quốc gia dưới dạng lưới trực quan sinh động. Dữ liệu mới được tải động khi họ cuộn, mang lại trải nghiệm khám phá mở rộng đặc trưng của các ứng dụng dạng thư viện.
* **Phát hiện sự kiện nhất quán:** Ví dụ sử dụng cùng một mô hình `NotificationListener` như các ví dụ dạng danh sách, chứng minh rằng logic phát hiện chạm đáy là phổ quát và độc lập với loại widget cuộn được sử dụng.
* **Cấu trúc lưới linh hoạt:** Kết hợp với `SliverGridDelegate` tùy chỉnh, nó đảm bảo các mục trong lưới luôn hiển thị đồng nhất trong khi **Block** xử lý hiệu quả các yêu cầu `queryMore()` ở chế độ chạy ngầm.

---

> **Trọng tâm kỹ thuật:** *Triển khai cuộn vô hạn hiệu năng cao cho GridView bằng cách tái sử dụng API phân trang của Block và trình lắng nghe thông báo cuộn.*

Vui lòng xem cách triển khai `buildContent` trong phần **Bài viết liên quan** để biết chi tiết về việc tích hợp GridView.
