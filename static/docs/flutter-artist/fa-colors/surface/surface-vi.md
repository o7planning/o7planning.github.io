## faColors.surface

Namespace `faColors.surface` là nền tảng kiến trúc của hệ thống thiết kế FlutterArtist. Nó xác định các lớp nền, khung chứa và các mặt phẳng cấu trúc nơi tất cả các thành phần tương tác khác trú ngụ.

### Triết lý kiến trúc

Trong bộ ba **Surface - Ink - Stroke**, Surface đóng vai trò là lớp "Fill" cuối cùng cho toàn bộ môi trường ứng dụng. Nó được thiết kế để quản lý **Độ cao thị giác (Visual Elevation)** và **Nhóm nội dung** mà không phụ thuộc vào đổ bóng làm chỉ báo chính, thay vào đó dựa trên các thay đổi sắc thái tinh tế để biểu thị chiều sâu.

<ul>
  <li>**Phân lớp:** Các bề mặt được tổ chức từ "Primary" (mức thấp nhất) đến "Emphasized" (mức độ chú ý cao nhất).</li>
  <li>**Tính trung tính:** Các token này sử dụng bảng màu trung tính hoặc có sắc thái nhẹ để đảm bảo không tranh chấp với các màu Action chức năng.</li>
  <li>**Tính nhất quán:** Mỗi token Surface đều có một đối trọng `faColors.ink` tương ứng để đảm bảo khả năng đọc hoàn hảo cho các nội dung tĩnh.</li>
</ul>

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
      <td>**Primary / Secondary**</td>
      <td>Các lớp nền tảng ứng dụng.</td>
      <td>Nền cửa sổ chính và các bảng điều hướng bên (sidebars).</td>
    </tr>
    <tr>
      <td>**Tertiary / Quaternary**</td>
      <td>Lồng ghép cấu trúc.</td>
      <td>Thẻ (cards), khung chứa danh sách nhóm và các phần nội dung bên trong.</td>
    </tr>
    <tr>
      <td>**Emphasized / Dimmed**</td>
      <td>Quản lý tương phản.</td>
      <td>Các vùng nội dung cần làm nổi bật hoặc lớp phủ làm mờ nền (modal backdrops).</td>
    </tr>
    <tr>
      <td>**Inverted**</td>
      <td>Ngoại lệ tương phản cao.</td>
      <td>Tooltips tối trên nền sáng hoặc các thanh thông báo (snackbars).</td>
    </tr>
  </tbody>
</table>

> **Kỷ luật về chiều sâu:**
> 
>   Tránh việc nhảy cấp độ một cách tùy tiện. Hãy luôn di chuyển từ `primary` sang `secondary` cho các nội dung lồng nhau. Sự tiến triển logic này tạo ra cảm giác về một cấu trúc "vật lý" giúp dẫn dắt mắt người dùng qua hệ thống phân cấp dữ liệu một cách tự nhiên.

### Ý đồ thiết kế

Các token Surface được tối ưu hóa cho việc sử dụng lâu dài trong môi trường Enterprise. Bằng cách ưu tiên các màu trung tính ít gây mỏi mắt và sự tách biệt sắc thái rõ ràng, chúng đảm bảo người dùng có thể tập trung vào dữ liệu phức tạp trong thời gian dài mà không bị kiệt sức về thị giác.