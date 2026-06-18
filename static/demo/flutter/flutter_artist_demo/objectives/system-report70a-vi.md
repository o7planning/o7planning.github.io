# Ví dụ cơ bản về Mô hình Scalar

Ví dụ này giới thiệu mô hình **Scalar**, được thiết kế để quản lý các cấu trúc dữ liệu
  nhất quán, chỉ đọc, thường dùng cho các báo cáo phức tạp hoặc thống kê tổng hợp.

* **Giá trị đơn lẻ bất biến:** Khác với Block, một **Scalar** nắm giữ một đối tượng
  dữ liệu duy nhất và nguyên khối. Dữ liệu này mang tính nhất quán và không thể thay đổi
  trực tiếp từ giao diện, đảm bảo tính toàn vẹn của báo cáo.

  * **Đóng gói dữ liệu phức tạp:** Scalar hoàn hảo để bao bọc các thông tin đa chiều—ví dụ
  như số lượng thống kê toàn hệ thống hoặc danh sách xếp hạng doanh số—thành một khối dữ liệu thống nhất.

  * **ScalarValueView:** Thành phần UI chuyên biệt lắng nghe Scalar và tự động vẽ lại
  giao diện bất cứ khi nào dữ liệu báo cáo được tải về hoặc làm mới.

*Trọng tâm kỹ thuật: Tận dụng Scalar để xây dựng các báo cáo tổng hợp mạnh mẽ mà không cần đến sự phức tạp của quản lý trạng thái theo từng mục.*

Xem cách triển khai `SystemReport70aValueView` trong phần **Bài viết liên quan**.
