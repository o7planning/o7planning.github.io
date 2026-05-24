## Tổng quan hệ thống màu

Hệ thống màu của FlutterArtist được thiết kế dựa trên bản năng tự nhiên của lập trình viên.
  Thay vì phải học thuộc lòng các quy tắc phức tạp, bạn chỉ cần hiểu mối quan hệ giữa **Fill** (Nền),
  **Ink** (Mực/Nội dung) và **Stroke** (Đường viền).

### 1. Logic hiển thị (Light Theme)

Trong Light Theme, quy tắc mặc định là: Bề mặt lớn thì Sáng, hành động và chữ thì Đậm.

| Token Namespace | Nhạt? (Sáng) | Đậm? (Tối) |
| --- | --- | --- |
| `faColors.action.fill.primary` |  | &#10004; |
| `faColors.action.fill.reversePrimary` | &#10004; |  |
| `faColors.action.ink.primary` |  | &#10004; |
| `faColors.action.ink.onPrimaryFill` | &#10004; |  |
| `faColors.surface.ground` | &#10004; |  |
| `faColors.bar.standard` | &#10004; |  |
| `faColors.ink.primary` |  | &#10004; |
| `faColors.stroke.strong` |  | &#10004; |

### 2. Ba chiến lược kết hợp màu (Action Namespace)

Khi xây dựng các thành phần tương tác (Button, Menu, Chip), hãy chọn 1 trong 3 mẫu triển khai chuẩn sau:

* **Chiến lược 1: Nhấn mạnh mạnh (High Emphasis - Solid)**<br>
    Sử dụng `faColors.action.fill.primary` (Đậm) + `faColors.action.ink.onPrimaryFill` (Nhạt).<br>
    *Phù hợp cho: Nút chính (Primary Button), FAB, các hành động kích hoạt quan trọng.*

  * **Chiến lược 2: Tối giản (Minimalist - Ghost)**<br>
    Không dùng nền + `faColors.action.ink.primary` (Đậm).<br>
    *Phù hợp cho: Nút phụ, icon trên thanh công cụ, các lựa chọn thứ cấp.*

  * **Chiến lược 3: Nhấn mạnh nhẹ (Soft Emphasis - Reverse)**<br>
    Sử dụng `faColors.action.fill.reversePrimary` (Nhạt) + `faColors.action.ink.primary` (Đậm).<br>
    *Phù hợp cho: Item đang chọn (Selected) trong Sidebar/Menu, Chips, nhãn trạng thái tinh tế.*

> **Ghi chú kỹ thuật:** Các token có hậu tố `reverse` (ví dụ `faColors.action.fill.reversePrimary`) được hệ thống tự động tính toán đẩy độ sáng lên biên độ ~95% (trong Light Theme). Điều này giúp tạo ra một lớp nền phớt nhạt cực kỳ chuyên nghiệp mà vẫn giữ được sắc thái (Hue) của thương hiệu.

*Lưu ý: Hệ thống sẽ tự động đảo ngược logic Đậm/Nhạt khi người dùng chuyển sang Dark Theme.*
