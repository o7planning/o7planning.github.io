# Field-Based JSON: Một Cha, Nhiều Con phụ thuộc

Ví dụ này minh họa một cấu trúc ánh xạ **Cha-Con** tinh vi, nơi nhiều tiêu chí con
  độc lập cùng chia sẻ và phản ứng với một tiêu chí cha duy nhất.

* **Chia sẻ ngữ cảnh Cha:** Thông qua cấu hình `parentMatchSuffix: "~"`,
  cả `department~1` và `department~2` đều được liên kết với
  `company~`. Bất kỳ thay đổi nào ở Công ty cũng sẽ kích hoạt việc làm mới
  dữ liệu đồng thời cho cả hai ô nhập liệu Phòng ban.

  * **Chính sách mặc định khác biệt:** Ví dụ phô diễn sự kết hợp linh hoạt các hành vi:
    <ul>
      <li>**department~1 (onEveryLoad):** Tự động chọn lại phòng ban đầu tiên mỗi khi
      Công ty thay đổi, duy trì trạng thái chọn lựa hợp lệ liên tục.

      * **department~2 (onInitialOnly):** Chỉ thiết lập giá trị mặc định trong lần tải đầu tiên.
      Các thay đổi Công ty sau đó sẽ để trống ô nhập liệu này, yêu cầu người dùng tự chọn thủ công.


  </li>
  * **Luồng dữ liệu tối ưu:** Cả ba tiêu chí được đóng gói vào một
  **Field-Based JSON** duy nhất, cho phép máy chủ xử lý logic điều kiện "AND (OR)"
  phức tạp đã định nghĩa trong `FilterConditionStructure`.

</ul>


<i>Trọng tâm kỹ thuật: Làm chủ `parentMatchSuffix` cho các phụ thuộc chia sẻ
và kết hợp `DefaultSettingPolicy` cho các yêu cầu UX đa dạng.</i>

Vui lòng xem `TildeCriterionConfig` trong phần **Bài viết liên quan** để
tìm hiểu cách cấu hình ánh xạ chia sẻ này.
