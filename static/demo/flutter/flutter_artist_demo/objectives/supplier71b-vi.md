# Trì hoãn & Tối ưu hóa Sự kiện ExternalShelfEvent(s) trên Dialog

Ví dụ này minh họa cơ chế **Trì hoãn Sự kiện** áp dụng cho các **Dialog** (Hộp thoại).
  Nó nhấn mạnh việc các tín hiệu được tổng hợp và chỉ phát đi khi Dialog bị đóng lại.

* **Trì hoãn dựa trên Dialog:** Khi người dùng thay đổi dữ liệu bên trong một popup,
  việc phát sự kiện ngay lập tức sẽ tạm dừng. Điều này đảm bảo UI phía sau luôn ổn định
  và không lãng phí tài nguyên để render lại trong khi người dùng vẫn đang thao tác.

  * **Tổng hợp khi Đóng:** Tính năng cốt lõi là **Tự động Tổng hợp**. Ngay khi Dialog
  đóng lại, FlutterArtist phân tích các sự kiện trong hàng đợi, gộp các mục trùng lặp và
  kích hoạt một đợt phản ứng duy nhất cho tất cả các Block và Scalar nhận tin.

  * **Tối ưu hóa Băng thông:** Bằng cách đợi Dialog đóng mới thực hiện truy vấn,
  ứng dụng giảm thiểu số lượng yêu cầu gửi tới server, tạo ra một trải nghiệm
  đẳng cấp Enterprise với hiệu năng tối ưu.

  * **Triển khai mượt mà:** Minh họa cách sử dụng `openDialogAndDeferExternalShelfEventsUntilClosed()`,
  cho phép nhà phát triển bao bọc bất kỳ hộp thoại nào trong một "container trì hoãn" chỉ với một lệnh gọi duy nhất.

*Trọng tâm kỹ thuật: Làm chủ việc tổng hợp sự kiện khi đóng Dialog để cân bằng giữa tính tương tác cao và hiệu năng hệ thống tối ưu.*

Vui lòng xem `openDialogAndDeferExternalShelfEventsUntilClosed` trong phần **Bài viết liên quan** để biết chi tiết triển khai.
