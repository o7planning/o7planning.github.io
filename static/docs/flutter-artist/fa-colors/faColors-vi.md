## Tổng quan hệ thống màu

Hệ thống màu của FlutterArtist được thiết kế dựa trên bản năng tự nhiên của lập trình viên.
  Thay vì phải học thuộc lòng các quy tắc phức tạp, bạn chỉ cần hiểu mối quan hệ giữa **Fill** (Nền),
  **Ink** (Mực/Nội dung) và **Stroke** (Đường viền).

### 1. Logic hiển thị (Light Theme)

Trong Light Theme, quy tắc mặc định là: Bề mặt lớn thì Sáng, hành động và chữ thì Đậm.

<table>
  <thead>
    <tr>
      <th>Token Namespace</th>
      <th>Nhạt? (Sáng)</th>
      <th>Đậm? (Tối)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>`faColors.action.fill.primary`</td><td></td><td><span class="check-mark">&#10004;</span></td></tr>
    <tr><td>`faColors.action.fill.reversePrimary`</td><td><span class="check-mark">&#10004;</span></td><td></td></tr>
    <tr><td>`faColors.action.ink.primary`</td><td></td><td><span class="check-mark">&#10004;</span></td></tr>
    <tr><td>`faColors.action.ink.onPrimaryFill`</td><td><span class="check-mark">&#10004;</span></td><td></td></tr>
    <tr><td>`faColors.surface.ground`</td><td><span class="check-mark">&#10004;</span></td><td></td></tr>
    <tr><td>`faColors.bar.standard`</td><td><span class="check-mark">&#10004;</span></td><td></td></tr>
    <tr><td>`faColors.ink.primary`</td><td></td><td><span class="check-mark">&#10004;</span></td></tr>
    <tr><td>`faColors.stroke.strong`</td><td></td><td><span class="check-mark">&#10004;</span></td></tr>
  </tbody>
</table>

### 2. Ba chiến lược kết hợp màu (Action Namespace)

Khi xây dựng các thành phần tương tác (Button, Menu, Chip), hãy chọn 1 trong 3 mẫu triển khai chuẩn sau:

<ul>
  <li>
    **Chiến lược 1: Nhấn mạnh mạnh (High Emphasis - Solid)**<br>
    Sử dụng `faColors.action.fill.primary` (Đậm) + `faColors.action.ink.onPrimaryFill` (Nhạt).<br>
    *Phù hợp cho: Nút chính (Primary Button), FAB, các hành động kích hoạt quan trọng.*
  </li>
  <li>
    **Chiến lược 2: Tối giản (Minimalist - Ghost)**<br>
    Không dùng nền + `faColors.action.ink.primary` (Đậm).<br>
    *Phù hợp cho: Nút phụ, icon trên thanh công cụ, các lựa chọn thứ cấp.*
  </li>
  <li>
    **Chiến lược 3: Nhấn mạnh nhẹ (Soft Emphasis - Reverse)**<br>
    Sử dụng `faColors.action.fill.reversePrimary` (Nhạt) + `faColors.action.ink.primary` (Đậm).<br>
    *Phù hợp cho: Item đang chọn (Selected) trong Sidebar/Menu, Chips, nhãn trạng thái tinh tế.*
  </li>
</ul>

> **Ghi chú kỹ thuật:** Các token có hậu tố `reverse` (ví dụ `faColors.action.fill.reversePrimary`) được hệ thống tự động tính toán đẩy độ sáng lên biên độ ~95% (trong Light Theme). Điều này giúp tạo ra một lớp nền phớt nhạt cực kỳ chuyên nghiệp mà vẫn giữ được sắc thái (Hue) của thương hiệu.

*Lưu ý: Hệ thống sẽ tự động đảo ngược logic Đậm/Nhạt khi người dùng chuyển sang Dark Theme.*