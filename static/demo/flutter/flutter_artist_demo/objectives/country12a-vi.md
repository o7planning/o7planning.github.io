# Sắp xếp Thống nhất & Tích hợp API

Ví dụ này minh họa cơ chế **Sắp xếp kép** sử dụng **SortModelBuilder**, tập trung vào cách các tiêu chí sắp xếp được chuyển đổi mượt mà thành các tham số gọi API.

* **Định nghĩa thống nhất:** Khai báo các tiêu chí (Tên, Dân số, Diện tích) một lần duy nhất trong `defineSortModelStructure` để sinh ra các model độc lập cho cả việc tổ chức UI tại chỗ và truy vấn cơ sở dữ liệu từ xa.
* **Số hóa phía Server:** Trong hàm `performQuery`, framework cung cấp đối tượng `SortableCriteria`. Đối tượng này được chuyển đổi qua `toJsonString()` để gửi đi như một tham số truy vấn, cho phép backend thực hiện sắp xếp chính xác ở cấp độ cơ sở dữ liệu cho các kết quả phân trang.
* **Sự linh hoạt phía Client:** Sắp xếp tại chỗ sử dụng `getComparisonValue` để thay đổi thứ tự các mục đã tải trong bộ nhớ ngay lập tức, mang lại phản hồi không có độ trễ cho các tập dữ liệu nhỏ.
* **Quản lý trạng thái:** Nhấn mạnh việc sử dụng `SortStrategy.modelBased` trong **BlockConfig**, đảm bảo trạng thái sắp xếp luôn nhất quán và phản xạ xuyên suốt vòng đời của Block.

---

> **Trọng tâm kỹ thuật:** *Kết nối các điều khiển sắp xếp trên UI với truy vấn cơ sở dữ liệu backend thông qua SortableCriteria đã được số hóa.*

Vui lòng xem `CountryRestProvider.query` trong phần **Bài viết liên quan** để tìm hiểu cách triển khai tham số sắp xếp JSON.
