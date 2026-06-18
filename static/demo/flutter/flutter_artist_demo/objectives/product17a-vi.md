# Tải xuống không gián đoạn với BackgroundWebDownloadAction

Ví dụ này minh họa **BackgroundWebDownloadAction**, một cơ chế chuyên biệt dành cho
  Flutter Web cho phép người dùng tải tệp xuống thông qua trình duyệt mà không làm gián đoạn
  các tương tác với ứng dụng.

* **Thực thi trong nền:** Khác với các hành động tiêu chuẩn có thể sử dụng lớp phủ (overlay),
  hành động này chạy "ngầm". Điều này có nghĩa là giao diện vẫn phản hồi hoàn toàn trong khi
  trình duyệt xử lý việc truyền tải tệp.

  * **Tích hợp trình duyệt:** Nó tận dụng khả năng tải xuống gốc của trình duyệt,
  đảm bảo quá trình tải xuống (tiến trình, hoàn tất và lưu tệp) quen thuộc với
  người dùng và được quản lý hiệu quả bởi môi trường web.

  * **Bộ thực thi ngầm của FlutterArtist:** Cho thấy cách sử dụng
  `backgroundExecutor` để kích hoạt hành động theo kiểu "fire-and-forget",
  để **Action** tự xử lý logic `performDownload()` và đặt tên tệp một cách độc lập.

*Trọng tâm kỹ thuật: Làm chủ việc tải tệp bất đồng bộ trong Flutter Web bằng cách sử dụng các hành động chạy ngầm để duy trì trải nghiệm người dùng mượt mà và hiệu năng cao.*

Vui lòng xem cách triển khai `_downloadImage` trong phần **Bài viết liên quan** để tìm hiểu cách kích hoạt hành động chạy ngầm.
