# Cuộn vô hạn với Chiến lược Sentinel Trigger

Ví dụ này minh họa kỹ thuật **Sentinel Trigger** (Vật canh gác) để phân trang vô hạn—một chiến lược mạnh mẽ tận dụng cơ chế render lười (lazy-rendering) của Flutter để tự động hóa việc tải dữ liệu.

* **Nguyên lý Sentinel:** Một widget "canh gác" đặc biệt được thêm vào cuối danh sách. Vì `ListView.builder` chỉ vẽ các mục đang hiển thị, hành động cuộn để đưa "vật canh gác" vào tầm nhìn sẽ tự động kích hoạt logic tải ngầm.
* **Tải dữ liệu mượt mà:** Bằng cách sử dụng `Future.microtask()` trong chu kỳ build của Sentinel, **Block** thực hiện lệnh `queryMore()` một cách an toàn, đảm bảo không bị giật khung hình hoặc xung đột trong pha xây dựng giao diện.
* **Phản hồi UI động:** Sentinel không chỉ là bộ kích hoạt; nó còn đóng vai trò là widget **CustomPaginationLoading**, cung cấp phản hồi trực quan ngay lập tức cho người dùng rằng nội dung mới đang được tải.

---

> **Trọng tâm kỹ thuật:** *Triển khai phân trang tự kích hoạt bằng mô hình Sentinel để có logic cuộn rõ ràng và mang tính khai báo hơn.*

Vui lòng xem logic `itemBuilder` trong phần **Bài viết liên quan** để tìm hiểu cách tích hợp Sentinel.
