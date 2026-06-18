# Lọc đa lựa chọn & Truy vấn bằng code với FilterInput

Ví dụ này minh họa các kỹ thuật lọc nâng cao, bao gồm khả năng **Chọn nhiều**
  (Multi-selection) và sử dụng **FilterInput** để thực hiện các truy vấn dữ liệu tự động bằng mã.

* **Lọc đa chọn thông minh:** Tiêu chí **Department** cho phép chọn nhiều phòng ban
  cùng lúc nhờ cấu hình `multiSelection`. Hệ thống sử dụng toán tử `inCollection`
  trong **FilterModel** để xử lý danh sách lựa chọn này.

  * **Điều khiển bằng mã (FilterInput):** Minh họa cách kích hoạt tìm kiếm phức tạp thông qua
  `Employee40aFilterInput`. Điều này giúp loại bỏ việc nhập liệu thủ công, lý tưởng cho
  các nút "lọc nhanh", deep link hoặc đồng bộ tìm kiếm giữa các màn hình.

  * **Ánh xạ trạng thái tự động:** Cho thấy cách **FilterModel** tự động dịch các mã
  (như "VINFAST-HR") từ **FilterInput** ngược lại thành các đối tượng UI, giúp **FilterPanel**
  luôn hiển thị chính xác trạng thái tìm kiếm hiện tại.

<i>Trọng tâm kỹ thuật: Làm chủ cầu nối giữa tương tác UI thủ công và lọc dữ liệu tự động
bằng lập trình thông qua FilterInput.</i>

Vui lòng xem phần **Bài viết liên quan** để tìm hiểu kỹ hơn về logic `FilterInput`
và hàm `extractUpdateValue`.
