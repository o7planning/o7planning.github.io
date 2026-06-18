# Tùy biến Giao diện với WaterfallFlow

Ví dụ này làm nổi bật tính linh hoạt cực cao của **BlockItemsView**, cho thấy
  FlutterArtist không gò bó người dùng vào các widget hiển thị dữ liệu cố định.

* **Tùy biến WaterfallFlow:** Thay vì danh sách thông thường, view này sử dụng
  bố cục **WaterfallFlow** để hiển thị các mục tiền tệ dưới dạng lưới nhiều cột động.

  * **Không phụ thuộc Widget:** FlutterArtist được thiết kế để hoạt động mượt mà
  với mọi loại widget cuộn, bao gồm `ListView`, `GridView`, hoặc
  các thư viện bên thứ ba chuyên dụng.

  * **Duy trì Trạng thái:** Mặc dù sử dụng bố cục tùy chỉnh, **Block** vẫn quản lý
  chính xác trạng thái **Current Item**, đảm bảo mục được chọn luôn được đánh dấu đúng cách.

*Trọng tâm kỹ thuật: Tích hợp các công cụ bố cục bên thứ ba với BlockItemsView để tạo ra trải nghiệm UI độc đáo.*

Vui lòng xem cách triển khai `buildContent` trong phần **Bài viết liên quan**.
