## faColors.action

Namespace `faColors.action` là động cơ cốt lõi của tính tương tác trong hệ sinh thái FlutterArtist. Nó cung cấp một bộ token toàn diện được thiết kế để xử lý mọi giai đoạn tương tác của người dùng, từ các nút tĩnh đến các trạng thái tương tác phức tạp.

### Triết lý kiến trúc

Được xây dựng trên bộ ba **Fill - Ink - Stroke**, namespace này đảm bảo mọi hành động đều rõ ràng về mặt ngữ nghĩa và nhất quán về mặt thị giác:

<ul>
  <li>**Fill (Lớp lấp đầy):** Xác định nền của hành động (ví dụ: Primary, Success, Danger).</li>
  <li>**Ink (Mực):** Xác định nội dung (Văn bản/Biểu tượng) truyền tải thông điệp.</li>
  <li>**Stroke (Đường viền):** Xác định "cấu trúc" hoặc ranh giới, lý tưởng cho các nút dạng khung (outlined) và nút "ma" (ghost buttons).</li>
  <li>**State (Trạng thái):** Các lớp phủ động (Hover, Pressed, Selected) cung cấp phản hồi xúc giác trong thời gian thực.</li>
</ul>

### Các nhóm Token chính

<table>
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
      <td>Tương tác định hướng thương hiệu.</td>
      <td>Các nút kêu gọi hành động (CTA) chính và điều hướng phụ.</td>
    </tr>
    <tr>
      <td>**Ngữ nghĩa (Success, Warning, Danger, Info)**</td>
      <td>Truyền đạt trạng thái và rủi ro.</td>
      <td>Xác nhận, cảnh báo và các hành động phá hủy.</td>
    </tr>
    <tr>
      <td>**Muted / Subtle**</td>
      <td>Tương tác có độ ưu tiên thấp.</td>
      <td>Cài đặt, liên kết "Tìm hiểu thêm" và các tác vụ nền.</td>
    </tr>
    <tr>
      <td>**States (Trạng thái)**</td>
      <td>Phản hồi tương tác.</td>
      <td>Di chuột, chạm nhấn và duy trì lựa chọn.</td>
    </tr>
  </tbody>
</table>

> **Quy tắc theo cặp:**
> 
>   Để đạt được khả năng truy cập tối đa và tính toàn vẹn thị giác, hãy luôn tuân thủ quy ước đặt tên **onFill**.
>   Nếu bạn sử dụng `action.fill.primary`, bạn **bắt buộc** phải sử dụng `action.ink.onPrimaryFill` cho nội dung của nó. Việc trộn lẫn các token từ các nhóm ý định khác nhau sẽ làm hỏng logic của FaColorGraph.

### Ý đồ thiết kế

Namespace Action được thiết kế để giảm tải nhận thức cho người dùng. Bằng cách sử dụng các màu sắc ngữ nghĩa nhất quán (Đỏ cho Danger, Xanh dương cho Info), người dùng có thể điều hướng các giao diện Enterprise phức tạp một cách trực quan mà không cần đọc hết tất cả các nhãn.