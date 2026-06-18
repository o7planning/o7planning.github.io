# Đa sắp xếp với Segmented và Dialog Panel

Ví dụ này minh họa khả năng **Sắp xếp đa tầng** nâng cao sử dụng **SegmentedSortPanel** và **DialogSortPanel**, tập trung vào việc tối ưu hóa quy trình làm việc và kiểm soát truy vấn dữ liệu.

* **Lựa chọn phân đoạn:** **SegmentedSortPanel** cung cấp giao diện lựa chọn ngang gọn gàng, hoàn hảo để chuyển đổi nhanh giữa các tiêu chí sắp xếp chính với thiết kế hiện đại và tinh tế.
* **Cấu hình theo lô (DialogSortPanel):** Giới thiệu quy trình "Chuẩn bị rồi mới Áp dụng". Người dùng có thể tỉ mỉ cấu hình nhiều tầng sắp xếp—điều chỉnh thứ tự ưu tiên và hướng ngay trong một hộp thoại riêng biệt—và chỉ kích hoạt làm mới dữ liệu khi nhấn **Apply**.
* **Hiệu quả & Hiệu năng:** Bằng cách sử dụng mô hình Dialog, ứng dụng giảm thiểu các lệnh gọi API không cần thiết, vì **Block** chỉ thực thi `performQuery` sau khi cấu hình đa sắp xếp cuối cùng được xác nhận.
* **Toàn vẹn Đa sắp xếp:** Duy trì sự tương thích hoàn toàn với `SortMode.multi`, đảm bảo các logic nghiệp vụ phức tạp như *Danh mục > Doanh thu > Sản phẩm* được xử lý chính xác trên các hình thức hiển thị UI khác nhau.

---

> **Trọng tâm kỹ thuật:** *Tận dụng sắp xếp dựa trên Dialog để giảm thiểu các yêu cầu mạng dư thừa và cung cấp trải nghiệm cập nhật hàng loạt chuyên nghiệp.*

Vui lòng xem cách triển khai `DialogSortPanel` trong phần **Bài viết liên quan** để thấy logic "Apply" hoạt động thực tế.
