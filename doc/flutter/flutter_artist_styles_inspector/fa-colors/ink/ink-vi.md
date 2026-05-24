## faColors.ink

Namespace `faColors.ink` xác định bảng màu cho tất cả các nội dung tĩnh, bao gồm hệ thống chữ (typography) và biểu tượng (iconography), nằm trên các lớp **Surface** (bề mặt) rộng lớn. Đây là hệ thống cốt lõi chịu trách nhiệm về khả năng đọc và phân cấp thông tin.

### Triết lý kiến trúc

Trong hệ thống phân cấp **Surface - Ink - Stroke**, namespace Ink được dành riêng hoàn toàn cho việc hiển thị nội dung. Nó được tách biệt về mặt kiến trúc khỏi các loại "Mực hành động" (Action Inks) để đảm bảo rằng lớp thông tin chính luôn ổn định, dễ tiếp cận và khác biệt với các nút điều khiển chức năng.

* **Ưu tiên khả năng đọc:** Mỗi token được tinh chỉnh về mặt toán học để vượt qua các tiêu chuẩn tương phản WCAG so với Surface tương ứng.

  * **Chính xác về ngữ nghĩa:** Sử dụng màu sắc để truyền tải ý nghĩa (Success, Danger, Info, Warning) mà không cần người dùng phải tương tác.

  * **Phân cấp cấu trúc:** Tổ chức thông tin từ nhấn mạnh cao (Primary) đến nhấn mạnh thấp (Muted).

### Các nhóm Token chính


<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Nhóm</th>
      <th>Các Token</th>
      <th>Mục đích chính</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Nội dung trung tính**</td>
      <td>`primary`, `secondary`</td>
      <td>Văn bản chính, mô tả và dữ liệu phụ trợ.</td>
    </tr>
    <tr>
      <td>**Cấu trúc**</td>
      <td>`label`, `muted`</td>
      <td>Tiêu đề biểu mẫu, định danh bảng và gợi ý placeholder.</td>
    </tr>
    <tr>
      <td>**Ngữ nghĩa**</td>
      <td>`success`, `danger`, `warning`, `info`</td>
      <td>Chỉ báo trạng thái, thông báo xác thực và chỉ dẫn hệ thống.</td>
    </tr>
  </tbody>
</table>

> **Ranh giới chỉ dành cho nội dung:**
> 
>   Các token trong namespace này **không được** sử dụng làm màu nền (Fills). Hơn nữa, chúng được thiết kế đặc biệt cho các bề mặt bố cục lớn. Đối với văn bản/biểu tượng bên trong các thành phần tương tác nhỏ như Nút bấm hoặc Chip, hãy luôn tham chiếu đến `faColors.action.ink.xxx`.

### Ý đồ thiết kế

Namespace Ink nhằm mục đích giảm nhiễu thị giác bằng cách cung cấp một cách tiếp cận có kỷ luật đối với hệ thống chữ. Bằng cách tách biệt "Nhãn" (Label) khỏi "Giá trị" (Value) và "Thông tin hệ thống" khỏi "Dữ liệu người dùng", nó tạo ra một trải nghiệm đọc chuyên nghiệp, ngăn nắp, thiết yếu cho các ứng dụng Doanh nghiệp phức tạp.