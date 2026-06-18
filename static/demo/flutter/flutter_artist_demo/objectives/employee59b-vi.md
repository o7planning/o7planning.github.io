# Field-Based JSON Nâng cao: Kiểm soát Chính sách Mặc định

Ví dụ này mở rộng kiến trúc **Field-Based JSON** bằng cách minh họa cách kiểm soát
  chi tiết hành vi giá trị mặc định thông qua `DefaultSettingPolicy` trên
  các cặp lọc phân cấp độc lập.

* **Logic phân cấp độc lập:** Tương tự ví dụ 59a, hệ thống duy trì hai cặp Cha-Con
  biệt lập (`company~1/department~1` và `company~2/department~2`)
  trong cùng một mô hình.

  * **Tái khởi tạo động (~1):** Cặp đầu tiên được áp dụng `DefaultSettingPolicy.onEveryLoad`.
  Mỗi khi **company~1** thay đổi, **department~1** sẽ tự động được gán lại giá trị
  đầu tiên tìm thấy, đảm bảo trạng thái luôn hợp lệ.

  * **Khởi tạo một lần (~2):** Cặp thứ hai minh họa hành vi mặc định (`onInitialOnly`).
  Giá trị mặc định chỉ được thiết lập khi khởi động ví dụ. Nếu **company~2** thay đổi sau đó,
  **department~2** sẽ được để trống để người dùng tự chọn lại từ đầu.

*Trọng tâm kỹ thuật: Làm chủ `DefaultSettingPolicy` trong `TildeCriterionConfig` để tùy biến hành vi reset của các bộ lọc phụ thuộc.*

Vui lòng xem `defineFilterModelStructure` trong phần **Bài viết liên quan** để so sánh cấu hình của các Tilde-Criteria.
