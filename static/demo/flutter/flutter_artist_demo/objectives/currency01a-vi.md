# Ví dụ cơ bản về Data Block

Ví dụ này minh họa cách **Data Block** quản lý và đồng bộ hóa trạng thái
  **Current Item** (Bản ghi hiện thời) giữa các thành phần UI khác nhau.

* **Chọn Tiền tệ (Trái):** Khi người dùng chọn một bản ghi, hàm `block.refreshItemAndSetAsCurrent()` sẽ được kích hoạt. Hàm này làm mới dữ liệu đối tượng và đánh dấu nó là mục đang hoạt động trong Block.

  * **Hiển thị Chi tiết (Phải):** **BlockItemDetailView** lắng nghe Block một cách phản xạ. Nó tự động vẽ lại giao diện bất cứ khi nào **Current Item** được cập nhật hoặc làm mới.

  * **Điều hướng bản ghi:** Các hành động như **Next** hoặc **Previous** sẽ gọi các hàm để lấy bản ghi kế tiếp và thiết lập nó làm **Current Item** mới, đảm bảo UI luôn đồng bộ tuyệt đối.

*Trọng tâm kỹ thuật: Hiểu cơ chế đồng bộ dữ liệu thông qua quản lý bản ghi hiện thời (Current Item).*

Vui lòng xem phần **Bài viết liên quan** để tìm hiểu kỹ hơn về cách triển khai các hàm này.
