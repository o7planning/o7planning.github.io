# Thao tác Hàng loạt: Làm chủ Multi-Selection và Multi-Check

Ví dụ này minh họa khả năng **Quản lý hàng loạt** tinh tế của FlutterArtist, được thiết kế
  để quản trị dữ liệu hiệu suất cao và phục vụ các quy trình công việc chuyên nghiệp.

* **Đánh dấu hai lớp:** Tìm hiểu cách phân biệt giữa **Selection** (chọn để làm nổi bật)
  và **Checking** (đánh dấu để xử lý hàng loạt). Cách tiếp cận hai lớp này mang lại sự linh hoạt
  tối đa cho các tương tác người dùng phức tạp.

  * **API Điều khiển Toàn diện:** Khám phá các phương thức có sẵn của Block để thao tác tập hợp,
  bao gồm `selectAllItems()`, `checkAllItems()` và các phương thức tương ứng
  để đặt lại trạng thái nhanh chóng.

  * **Logic Xóa Chính xác:** Nhấn mạnh cơ chế `CurrentItemInclusion`, cho phép nhà
  phát triển xác định chính xác cách "Mục hiện thời" (Current Item) được xử lý trong quá trình xóa
  hàng loạt (Bao gồm, Loại trừ, hoặc Nếu khớp), ngăn chặn việc mất dữ liệu ngoài ý muốn của bản ghi đang hoạt động.

  * **Quản lý Trạng thái Sạch:** Phô diễn tính năng `clearCurrentItem()`, yếu tố cần
  thiết cho các kịch bản mà giao diện cần quay trở lại trạng thái trung lập không có bản ghi nào được chọn.

<i>Trọng tâm kỹ thuật: Tận dụng quản lý trạng thái tập hợp của Block để thao tác lưới dữ liệu
chuyên nghiệp và thực hiện các quy trình xóa lô an toàn.</i>

Vui lòng xem triển khai các **Phương thức Xóa** trong `SystemLog51aButtons` để
biết cách áp dụng các chính sách bao hàm (inclusion policies).
