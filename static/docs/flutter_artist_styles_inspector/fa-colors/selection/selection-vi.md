## faColors.selection

Namespace `faColors.selection` cung cấp một bộ token chuyên biệt để xử lý việc chọn dữ liệu, tiêu điểm (focus) và các trạng thái làm nổi bật. Đây là hệ thống chính để xác định các mục đang hoạt động trong các thành phần phức tạp như DataGrids, TreeViews và danh sách Picker.

### Triết lý kiến trúc

Khác với namespace Action tập trung vào việc "thực thi", namespace Selection tập trung vào việc "định danh". Nó được xây dựng để đảm bảo dữ liệu được chọn vẫn dễ đọc và khác biệt rõ rệt với phần còn lại của UI mà không tranh chấp sự chú ý với các nút hành động chính.

* **Fill (Lớp lấp đầy):** Xác định nền cho các hàng hoặc mục được chọn, đảm bảo chúng nổi bật trong một danh sách.

  * **Ink (Mực):** Cung cấp nội dung (Văn bản/Biểu tượng) có độ tương phản cao cho nền được chọn để duy trì tiêu chuẩn truy cập WCAG.

  * **Stroke (Đường viền):** Xác định các vòng tiêu điểm (focus rings) và ranh giới lựa chọn để chỉ thị nơi sự chú ý của người dùng đang được khóa lại.

### Các nhóm Token chính


<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Nhóm</th>
      <th>Mục đích</th>
      <th>Kịch bản sử dụng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Selection Fill**</td>
      <td>Định danh khung chứa đang hoạt động.</td>
      <td>Hàng được chọn trong bảng, thẻ đang hoạt động hoặc các mục danh sách được chọn.</td>
    </tr>
    <tr>
      <td>**On-Selection Ink**</td>
      <td>Tương phản cho nội dung được chọn.</td>
      <td>Văn bản và biểu tượng bên trong một hàng hoặc chip được chọn.</td>
    </tr>
    <tr>
      <td>**Focus / Highlight**</td>
      <td>Chỉ báo sự chú ý tạm thời.</td>
      <td>Vòng tiêu điểm khi điều hướng bằng bàn phím hoặc làm nổi bật kết quả tìm kiếm.</td>
    </tr>
  </tbody>
</table>

> **Tính toàn vẹn về mặt ngữ nghĩa:**
> 
>   Namespace Selection được thiết kế để mang tính tinh tế. Trong khi `action.fill.primary` có thể là một màu thương hiệu đậm, thì `faColors.selection.fill` thường là một sắc thái nhẹ hơn để đảm bảo rằng nhiều mục được chọn cùng lúc không gây nhức mắt cho người dùng.

### Ý đồ thiết kế

Các token Selection là xương sống của các ứng dụng Enterprise nặng về dữ liệu. Bằng cách sử dụng namespace chuyên biệt này, ông giáo đảm bảo rằng trạng thái "Lựa chọn" được tách biệt về mặt kiến trúc với các trạng thái "Tương tác chủ động", cho phép kiểm soát chi tiết hơn đối với việc trực quan hóa dữ liệu phức tạp.