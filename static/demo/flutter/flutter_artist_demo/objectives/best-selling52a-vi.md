# Sắp xếp Đa tầng Nâng cao với BreadCrumbSortPanel

Ví dụ này minh họa khả năng **Sắp xếp đa tầng** của FlutterArtist, cho phép người dùng tổ chức các tập dữ liệu phức tạp bằng cách sử dụng nhiều tiêu chí cùng một lúc.

* **Chế độ Đa sắp xếp:** Bằng cách thiết lập `SortMode.multi` trong **SortModelBuilder**, ứng dụng có thể xử lý một chuỗi các quy tắc sắp xếp (ví dụ: Danh mục > Doanh thu > Tên sản phẩm).
* **Điều hướng Breadcrumb:** **BreadCrumbSortPanel** cung cấp một lộ trình trực quan về các tầng sắp xếp đang hoạt động. Mỗi "mắt xích" đại diện cho một cấp độ sắp xếp mà người dùng có thể thay đổi hướng hoặc xóa bỏ để tinh chỉnh cách hiển thị dữ liệu.
* **Cấu hình Hướng bắt buộc:** Nhấn mạnh thuộc tính `directionalSelectionOnly`, buộc một tiêu chí luôn phải có hướng sắp xếp (Tăng/Giảm) khi đã được chọn, ngăn chặn trạng thái "không sắp xếp" đối với các logic nghiệp vụ quan trọng.
* **Logic so sánh phức tạp:** Hàm `getComparisonValue` được sử dụng triệt để để cung cấp các giá trị so sánh chính xác cho nhiều kiểu dữ liệu khác nhau như Chuỗi (Tên sản phẩm) và Số (Tổng số lượng/Doanh thu).

---

> **Trọng tâm kỹ thuật:** *Làm chủ logic sắp xếp đa tầng phân cấp và tận dụng BreadCrumbSortPanel cho các giao diện báo cáo dữ liệu chuyên nghiệp.*

Vui lòng xem `BestSelling52aSortModelBuilder` trong phần **Bài viết liên quan** để tìm hiểu cách cấu hình chế độ đa sắp xếp.
