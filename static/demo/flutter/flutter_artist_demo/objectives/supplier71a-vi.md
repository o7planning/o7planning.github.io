# Trì hoãn & Tối ưu hóa Sự kiện ExternalShelfEvent(s)

Ví dụ này minh họa một kỹ thuật tối ưu hóa hiệu năng cao: **Trì hoãn Sự kiện ExternalShelfEvent(s)**.
  Nó tập trung vào việc các sự kiện được tổng hợp và chỉ kích hoạt khi **EndDrawer** bị đóng lại.

* **Mô hình Trì hoãn Sự kiện:** Thay vì phát đi tín hiệu ngay lập tức cho mỗi thay đổi dữ liệu,
  các sự kiện được đưa vào hàng đợi trong khi **EndDrawer** vẫn đang mở. Điều này ngăn chặn
  việc UI bị giật và lãng phí tài nguyên xử lý trong quá trình chỉnh sửa.

  * **Tổng hợp khi Đóng:** Trọng tâm của ví dụ là **Logic Tổng hợp**. Khi EndDrawer được
  đóng lại, FlutterArtist thu thập tất cả các sự kiện đang chờ, loại bỏ các mục trùng lặp và
  thực thi chúng đồng thời theo lô (batch).

  * **Hiệu suất Mạng & CPU:** Bằng cách xử lý phản ứng theo lô (ví dụ: gộp nhiều cập nhật
  SupplierData thành một lần xử lý), hệ thống giảm thiểu đáng kể tải trọng lên API và số lượng
  truy vấn lại của các Block nhận tin.

  * **Triển khai thực tế:** Minh họa cách sử dụng
  `openEndDrawerAndDeferExternalShelfEventsUntilClosed()`, một phương thức chiến lược
  để quản lý vòng đời sự kiện trong các quy trình làm việc với bảng điều khiển cạnh (side-panel).

*Trọng tâm kỹ thuật: Làm chủ việc tổng hợp sự kiện khi đóng EndDrawer để xây dựng các hệ thống doanh nghiệp phản xạ và tối ưu hóa cực độ.*

Lưu ý: Ví dụ tiếp theo (**supplier71b**) sẽ minh họa cơ chế trì hoãn tương tự áp dụng cho **Dialog**.
