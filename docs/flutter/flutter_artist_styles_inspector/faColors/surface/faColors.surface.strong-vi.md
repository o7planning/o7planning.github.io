## faColors.surface.strong

Token `faColors.surface.strong` xác định cấp độ bề mặt cao nhất trong hệ thống phân cấp, cung cấp độ tương phản tối đa so với lớp nền (ground).

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.strong` được thiết kế cho các thành phần cấu trúc yêu cầu sự phân tách dứt khoát với các yếu tố bố cục khác. Nó đại diện cho mật độ bề mặt mạnh nhất hiện có trước khi chuyển sang các lớp lấp đầy dựa trên hành động (action-based fills).

> **Quyền năng cấu trúc:**
> 
>   Sử dụng `faColors.surface.strong` cho các thanh bên (sidebars) cố định, tiêu đề modal có độ tương phản cao, hoặc các panel chuyên dụng dùng để định nghĩa cấu trúc chính của ứng dụng.

### Ví dụ triển khai


```dart
// Tạo một thanh bên cấu trúc có độ tương phản cao
Container(
  width: 250,
  // Bề mặt mạnh nhất để định nghĩa cấu trúc
  color: context.faColors.surface.strong,
  decoration: BoxDecoration(
    border: Border(
      right: BorderSide(
        // Kết hợp với stroke strong để tạo sự phân tách tuyệt đối
        color: context.faColors.stroke.strong,
        width: 1,
      ),
    ),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Main System Navigation',
      style: TextStyle(
        // Bề mặt strong yêu cầu mực primary có độ tương phản cao
        color: context.faColors.ink.primary,
        fontWeight: FontWeight.w600,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.strong` được ánh xạ tới `surfaceContainerHighest` để đảm bảo nó đứng ở đỉnh của ngăn xếp độ cao bề mặt.*