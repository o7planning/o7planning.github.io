## faColors.bar

Namespace `faColors.bar` xác định các lớp nền cho các thành phần điều hướng chức năng và cấu trúc. Đây là "trung tâm điều khiển" của bố cục, cung cấp các vùng riêng biệt cho tiêu đề (headers), thanh công cụ (toolbars) và thanh điều hướng (navigation rails).

### Triết lý kiến trúc

Trong kiến trúc **Surface - Ink - Stroke**, namespace Bar đóng vai trò là cầu nối giữa các thành phần `surface` tĩnh và `action` động. Mục tiêu chính của nó là cung cấp **Ngữ cảnh môi trường (Environmental Context)** — giúp người dùng biết chính xác nơi công cụ kết thúc và dữ liệu bắt đầu.

<ul>
  <li>**Tính nhất quán:** Các thanh bar cung cấp điểm neo ngang hoặc dọc ổn định, tồn tại cố định khi nội dung cuộn bên dưới.</li>
  <li>**Phân cấp chức năng:** Sử dụng các mức độ tương phản khác nhau (Subtle → Standard → Strong) để phân loại tầm quan trọng của các công cụ được chứa bên trong.</li>
  <li>**Tích hợp lớp phủ:** Được thiết kế để hoạt động mượt mà với `faColors.action.state.xxx` cho các yếu tố tương tác như biểu tượng điều hướng hoặc các mục tab.</li>
</ul>

### Các nhóm Token chính

<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Token</th>
      <th>Trọng lượng thị giác</th>
      <th>Trường hợp sử dụng chính</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**bar.subtle**</td>
      <td>Thấp</td>
      <td>Thanh lọc ngữ cảnh, chỉ báo trạng thái và các thanh dưới cùng phụ trợ.</td>
    </tr>
    <tr>
      <td>**bar.standard**</td>
      <td>Trung bình</td>
      <td>Thanh ứng dụng chính (AppBars) và điều hướng tiêu đề chính.</td>
    </tr>
    <tr>
      <td>**bar.strong**</td>
      <td>Cao</td>
      <td>Thanh điều hướng bên (Side rails) và thanh chân trang giúp định vị bố cục.</td>
    </tr>
  </tbody>
</table>

> **Điểm neo tương phản:**
> 
>   Các thanh Bar thường đóng vai trò là ranh giới giữa các bề mặt khác nhau. Khi sử dụng `faColors.bar`, hãy đảm bảo màu **Ink** được chọn cho nhãn và biểu tượng dựa trên độ sáng cụ thể của thanh đó để đáp ứng các tiêu chuẩn truy cập cao.

### Ý đồ thiết kế

Namespace Bar được tinh chỉnh để loại bỏ sự lộn xộn về thị giác trong các ứng dụng doanh nghiệp có mật độ dữ liệu cao. Bằng cách cung cấp một bộ nền chuyên biệt cho điều hướng, nó đảm bảo rằng các nút điều khiển chức năng không bao giờ bị "lạc lối" giữa biển bề mặt dữ liệu.