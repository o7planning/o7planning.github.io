# Lọc theo Khoảng với Field-Based JSON

Ví dụ này minh họa cách triển khai **Lọc theo khoảng** (Min-Max) bằng cách tận dụng nhiều
  tiêu chí Tilde được dẫn xuất từ một tiêu chí cơ sở duy nhất.

* **Định danh tiêu chí (Suffix):** Tiêu chí gốc `price` (giá) được chia thành hai thực thể
  Tilde độc lập: `price~min` và `price~max`. Điều này cho phép giao diện thu thập
  hai giá trị riêng biệt cho cùng một trường dữ liệu.

  * **Ánh xạ khoảng Logic:** Trong `FilterConditionStructure`, `price~min` được
  gán cho toán tử `greaterThan` (lớn hơn), còn `price~max` sử dụng `lessThan`
  (nhỏ hơn), tạo thành một bộ lọc khoảng giá hoàn chỉnh.

  * **Thiết lập mặc định:** Ví dụ cho thấy cách sử dụng `specifyDefaultValuesForSimpleTildeCriteria`
  để tự động điền khoảng giá (ví dụ: từ 1000 đến 20000) ngay khi khởi tạo, giúp người dùng có kết quả ngay lập tức.

*Trọng tâm kỹ thuật: Làm chủ quy ước đặt tên hậu tố Tilde để xử lý các truy vấn dạng khoảng (Range-based) trong Field-Based JSON.*

Vui lòng xem `conditionStructure` trong phần **Bài viết liên quan** để tìm hiểu cách ánh xạ toán tử Min-Max.
