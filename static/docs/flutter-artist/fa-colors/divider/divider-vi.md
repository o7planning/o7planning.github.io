## faColors.divider

Trong kiến trúc **Surface - Ink - Stroke**, namespace Divider cung cấp các vectơ tiện ích toàn cục được thiết kế chuyên biệt cho việc phân chia bố cục, phân đoạn hàng lối và tách biệt cấu trúc vĩ mô. Bằng cách thiết lập sự phân rã nhị phân nghiêm ngặt giữa hai token `subtle` và `strong`, FlutterArtist cho phép kiểm soát lưới cơ sở nhất quán và có khả năng mở rộng trên các bảng điều khiển ứng dụng doanh nghiệp có mật độ dữ liệu cao.

### 1. Phân rã cấu trúc

Hệ thống phân cách phân loại các ranh giới bố cục thành hai trọng số vật lý xác định:

<table>
  <thead>
    <tr>
      <th>Tên Token đầy đủ</th>
      <th>Mục đích thị giác</th>
      <th>Độ dày nét / Chiều cao khuyến nghị</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`faColors.divider.subtle`</td>
      <td>Ranh giới nội dung nội bộ, các hàng lưới dữ liệu lặp lại, phân đoạn danh sách nội dòng.</td>
      <td>Thickness: 1.0 logical pixel / Height: 1.0 logical pixel</td>
    </tr>
    <tr>
      <td>`faColors.divider.strong`</td>
      <td>Ngắt phân đoạn lớn (macro section), chia tách cấu trúc cấp trang, phân chia bảng điều khiển.</td>
      <td>Thickness: 2.0 logical pixels / Height: 1.0 logical pixel</td>
    </tr>
  </tbody>
</table>

### 2. Học thuyết thiết kế cốt lõi

<ul>
  <li>**Quy tắc không gian thở của lưới:** `faColors.divider.subtle` đóng vai trò như một bộ tổ chức vi cấu trúc. Nó thiết lập sự phân chia thị giác giữa các ô dữ liệu giống nhau mà không làm vỡ tính thống nhất liên kết của container widget bọc ngoài.</li>
  <li>**Quy tắc tường lửa phân đoạn:** `faColors.divider.strong` cung cấp các ranh giới có độ tương phản tuyệt đối. Nó vận hành như một khối vật lý dứt khoát, bẻ đôi các nhóm biểu mẫu phức tạp hoặc ngăn cách các không gian làm việc độc lập liền kề để tránh hiện tượng chồng chéo nhận thức.</li>
  <li>**Ánh xạ cơ sở đồng bộ:** Để bảo vệ tính nhất quán cấu trúc của hệ thống, namespace `divider` ánh xạ tỷ lệ 1-1 với công cụ của namespace `stroke` bên trong backend FaColorGraph (`subtle` đồng bộ với `stroke.subtle`; `strong` đồng bộ với `stroke.medium`).</li>
</ul>

> **Quy tắc chống tràn cấu trúc:**
> 
>   Tuyệt đối không pha trộn các trọng số phân cách một cách tùy tiện. Việc hoán đổi sai lệch hai token này trong cùng một phạm vi sẽ phá vỡ hệ thống phân cấp bố cục, khiến các vòng lặp dữ liệu phụ chiếm quyền ưu tiên thị giác sai lệch so với các điểm ngắt cấp section lớn.