## Namespace Stroke: Khung xương cấu trúc

Trong kiến trúc **Surface - Ink - Stroke**, namespace Stroke chịu trách nhiệm định nghĩa các ranh giới, vạch ngăn cách và chỉ báo tiêu điểm. Nó tạo ra "độ bám" và "cấu trúc" cần thiết để ngăn giao diện trông bị phẳng lì hoặc mất trật tự.

### 1. Phân cấp cường độ

FlutterArtist phân loại các đường kẻ dựa trên trọng số thị giác của chúng thông qua hệ thống ba cấp độ:

| Tên Token | Cường độ | Vai trò chính |
| --- | --- | --- |
| `faColors.stroke.subtle` | Nhẹ | Phân tách nội bộ (Đường kẻ danh sách, vạch thanh công cụ). |
| `faColors.stroke.medium` | Vừa | Ranh giới component (Viền Card, viền Dialog). |
| `faColors.stroke.strong` | Mạnh | Trạng thái hoạt động (Viền focus, chỉ báo đang chọn). |

### 2. Nguyên tắc thiết kế

* **Quy tắc 80/20:** Trong giao diện Doanh nghiệp chuyên nghiệp, 80% đường kẻ nên là `faColors.stroke.subtle`. Chỉ dành `strong` cho các điểm tiêu điểm quan trọng.

  * **Tính nhất quán:** Tránh trộn lẫn nhiều cấp độ stroke trong cùng một thành phần nhỏ (ví dụ: không dùng viền đậm với vạch ngăn nhạt nếu chúng thuộc cùng một khối thị giác).

  * **Tính dễ tiếp cận:** Sử dụng `faColors.stroke.strong` để đảm bảo người dùng điều hướng bằng bàn phím có thể thấy rõ phần tử nào đang được chọn (focus).

> **Góc nhìn kỹ thuật:** Tất cả các token stroke đều có tính phản ứng (reactive). Khi bạn chuyển sang **Dark Theme**, hệ thống sẽ tự động điều chỉnh tỷ lệ độ tương phản để đảm bảo khung xương của UI vẫn hiển thị rõ ràng mà không gây mỏi mắt.