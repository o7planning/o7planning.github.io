## faColors.surface.ground

Token `faColors.surface.ground` xác định lớp nền tảng tuyệt đối của giao diện ứng dụng. Đây là bề mặt sơ khai nhất, nơi tất cả các thành phần, lớp chứa và yếu tố điều hướng khác được đặt lên.

### Logic kỹ thuật

Là lớp móng trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.ground` thường được ánh xạ tới màu nền của `Scaffold`. Nó được thiết kế với độ cao thị giác thấp nhất, tạo ra một Canvas trung tính cho phép các bề mặt cấp cao hơn (như Card hoặc Dialog) tạo ra chiều sâu thông qua sự tương phản.

> **Vai trò kiến trúc:**
> 
>   Luôn sử dụng `faColors.surface.ground` cho nền chính của màn hình. Tránh đặt các đường viền quá đậm hoặc đổ bóng trực tiếp lên lớp này; thay vào đó, hãy để các bề mặt cấp cao hơn xử lý việc tạo độ nổi thị giác.

### Ví dụ triển khai

```dart
// Thiết lập scaffold nền tảng cho một màn hình
Scaffold(
  // Bề mặt nền tảng cuối cùng
  backgroundColor: context.faColors.surface.ground,
  body: Column(
    children: [
      Text(
        'Base Canvas Layer',
        style: TextStyle(
          // Sử dụng mực primary để đạt độ đọc tốt nhất trên nền ground
          color: context.faColors.ink.primary,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.ground` được liên kết trực tiếp với `scheme.surface` của theme để đảm bảo tính nhất quán toàn cục.*