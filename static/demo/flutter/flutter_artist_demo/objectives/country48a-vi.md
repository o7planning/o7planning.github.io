# Phân trang cuộn vô hạn với NotificationListener

Ví dụ này minh họa mô hình **Cuộn vô hạn** (Infinite Scroll), mang lại trải nghiệm duyệt dữ liệu mượt mà và không gián đoạn, thường thấy trong các ứng dụng di động và mạng xã hội hiện đại.

* **Tải nội dung động:** Thay vì phải nhấn số trang, dữ liệu được tải tự động khi người dùng cuộn đến cuối danh sách. Điều này tạo ra một luồng trải nghiệm liền mạch, khuyến khích người dùng khám phá nội dung liên tục.
* **Phát hiện sự kiện cuộn:** Bằng cách sử dụng `NotificationListener<ScrollEndNotification>`, hệ thống phát hiện một cách thông minh khi người dùng chạm ngưỡng `maxScrollExtent` để kích hoạt lần tải dữ liệu tiếp theo.
* **Nối dữ liệu hiệu quả:** Tận dụng phương thức `block.queryMore()` để lấy nhóm bản ghi tiếp theo và nối trực tiếp vào danh sách hiện tại mà không làm vỡ luồng hiển thị, đảm bảo hiệu năng tối ưu cho ứng dụng.

---

> **Trọng tâm kỹ thuật:** *Tích hợp thông báo cuộn của Flutter với API phân trang của Block để đạt được danh sách vô hạn hiệu năng cao.*

Vui lòng xem logic `_onScrollEndNotification` trong phần **Bài viết liên quan** để tìm hiểu cách phát hiện chạm đáy danh sách.
