# Sắp xếp Lưới tương tác với ReorderableGridView

Ví dụ này minh họa khả năng **Sắp xếp thủ công** nâng cao trong bố cục lưới,
  tận dụng sức mạnh của thư viện `reorderable_grid_view` được tích hợp
  mượt mà với **Block** của FlutterArtist.

* **Kéo & Thả trên lưới:** Mở rộng khả năng sắp xếp thủ công sang bố cục 2 chiều.
  Người dùng có thể tự do di chuyển các mục xuyên qua các hàng và cột, mang lại cách
  tổ chức linh hoạt cho các nội dung trực quan như thẻ tiền tệ.

  * **Chiến lược Sắp xếp thủ công:** Củng cố yêu cầu thiết lập `SortStrategy.manual`
  trong **BlockConfig**, đảm bảo logic danh sách nội bộ của **Block** được dành riêng
  cho các vị trí do người dùng xác định thay vì các quy tắc tự động.

  * **Đồng bộ hóa trạng thái:** Mỗi hành động sắp xếp lại sẽ kích hoạt `block.moveItemByIndexPosition()`,
  cập nhật trạng thái dữ liệu ngay lập tức. Việc sử dụng các kỹ thuật xử lý chỉ số chính xác
  đảm bảo hiệu ứng chuyển động mượt mà và tính nhất quán của dữ liệu.

  * **Kiểm soát cuộn tùy chỉnh:** Phô diễn việc tích hợp nâng cao thông qua
  `scrollSpeedController` để khắc phục các lỗi timestamp phổ biến trong
  các widget sắp xếp lại, đảm bảo trải nghiệm người dùng chuyên nghiệp và không có lỗi.

*Trọng tâm kỹ thuật: Kết nối các thành phần lưới sắp xếp lại của bên thứ ba với API sắp xếp thủ công của Block để xây dựng các bảng điều khiển tương tác cao và nhạy bén.*

Vui lòng xem triển khai `onReorder` và `scrollSpeedController` trong phần **Bài viết liên quan** để biết các mẹo cấu hình nâng cao.
