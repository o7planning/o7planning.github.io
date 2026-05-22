## faColors.input

Trong kiến trúc **Surface - Ink - Stroke**, namespace Input cung cấp một hệ sinh thái ngữ nghĩa thống nhất chuyên biệt để thiết lập kiểu dáng cho các ô nhập liệu, trường văn bản và các thành phần biểu mẫu. Bằng cách phân rã các biến thiết kế thành ba nhánh chức năng nghiêm ngặt (`fill`, `stroke`, và `ink`), FlutterArtist mang tới một giải pháp "One-Stop Shop" (Một điểm dừng) toàn diện, đảm bảo phản hồi trạng thái rõ ràng và duy trì độ tương phản chữ nhất quán trên các biểu mẫu doanh nghiệp dày đặc.

### 1. Phân rã cấu trúc kiến trúc

Hệ thống bố cục nhập liệu được chia làm ba lớp vận hành chuyên biệt để quản lý trọn vẹn chu kỳ sinh mệnh của thành phần:

<table>
  <thead>
    <tr>
      <th>Nhánh con (Sub-Namespace)</th>
      <th>Tên Token đầy đủ</th>
      <th>Thuộc tính tương ứng trong InputDecoration / TextStyle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">**`.fill`** (Bề mặt nền)</td>
      <td>`faColors.input.fill.enabled`</td>
      <td>`fillColor` (Khi cấu hình `enabled: true`)</td>
    </tr>
    <tr>
      <td>`faColors.input.fill.disabled`</td>
      <td>`fillColor` (Khi cấu hình `enabled: false`)</td>
    </tr>
    <tr>
      <td rowspan="5">**`.stroke`** (Đường viền khung)</td>
      <td>`faColors.input.stroke.enabled`</td>
      <td>`enabledBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.disabled`</td>
      <td>`disabledBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.focused`</td>
      <td>`focusedBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.error`</td>
      <td>`errorBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.focusedError`</td>
      <td>`focusedErrorBorder`</td>
    </tr>
    <tr>
      <td rowspan="5">**`.ink`** (Bí danh Chữ)</td>
      <td>`faColors.input.ink.primary`</td>
      <td>`style: TextStyle(color: ...)` (Chữ người dùng gõ vào)</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.secondary`</td>
      <td>`helperStyle` / Chữ nhãn tiêu đề (label) mặc định</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.muted`</td>
      <td>`hintStyle` / Chữ gợi ý hoặc giá trị khi bị khóa chỉ đọc</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.danger`</td>
      <td>`errorStyle` (Dòng văn bản báo lỗi validate)</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.highlight`</td>
      <td>Ký hiệu bắt buộc (dấu `*`) / Chữ nổi bật khi khớp từ khóa tìm kiếm</td>
    </tr>
  </tbody>
</table>

### 2. Học thuyết thiết kế cốt lõi

<ul>
  <li>**Quy tắc bí danh kiến trúc (Tối ưu trải nghiệm DEV):** Các token nằm trong phạm vi `input.ink` vận hành như các proxy chỉ đọc trỏ thẳng về hệ thống chữ toàn cục `faColors.ink` và không có bộ xử lý độc lập. Tuy nhiên, các nhà phát triển được khuyến nghị luôn luôn sử dụng `faColors.input.ink.*` bên trong phạm vi biểu mẫu thay vì gọi mã ink tổng quát. Việc bao bọc tất cả thuộc tính cấu hình trong scope `faColors.input` giúp mã nguồn có tính liên kết bối cảnh cao, tường minh và sạch sẽ.</li>
  <li>**Quy tắc khung nền trung tính:** Các mã màu fill được ràng buộc chặt chẽ với các vùng container trung tính có cường độ thấp. Tuyệt đối không pha sắc độ thương hiệu bão hòa cao vào nền ô nhập liệu để bảo vệ mắt người dùng khỏi hiện tượng mỏi thị giác khi làm việc lâu với biểu mẫu.</li>
  <li>**Kỷ luật trạng thái kiên định:** Sắc độ viền và chữ báo lỗi phải tuyệt đối nhất quán. Khi một ô lỗi được click chọn để sửa, token `stroke.focusedError` giữ vai trò duy trì bản sắc cảnh báo lỗi ngữ nghĩa, không để trạng thái thị giác bị nhập nhằng, xáo trộn.</li>
  <li>**Sự thay đổi trọng số cấu trúc:** Đường biên stroke có khả năng co giãn linh hoạt. Các trạng thái thụ động sử dụng nét vẽ mỏng tiêu chuẩn 1.0 logical pixel, trong khi trạng thái tương tác tiêu điểm (focus) sẽ nở rộng lên 2.0 logical pixels để lập tức găm mắt người dùng vào vị trí trỏ chuột hiện hành.</li>
</ul>

> **Tính phản ứng ngữ cảnh:** Mọi token nằm trong namespace `faColors.input` đều tự động nhận biết độ sáng của Theme. Khi có hành vi hoán đổi giao diện Sáng/Tối, các tỷ lệ tương phản và lớp phủ mờ (opacity) sẽ lập tức tái cấu hình theo thuật toán của trục logic FaColorGraph.