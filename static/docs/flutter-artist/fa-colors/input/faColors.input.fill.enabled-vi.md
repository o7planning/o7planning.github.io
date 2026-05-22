## faColors.input.fill.enabled

Token `faColors.input.fill.enabled` xác định màu sắc bề mặt nền mặc định cho các ô nhập liệu khi chúng ở trạng thái hoạt động và sẵn sàng tương tác với người dùng.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.fill.enabled` cung cấp một lớp nền trung tính và sạch sẽ cho việc nhập liệu. Nó được ánh xạ chiến lược tới một bề mặt container cường độ thấp từ hệ màu Material Design 3, đảm bảo vùng nhập liệu hiển thị rõ ràng và tách biệt nhẹ nhàng khỏi nền ứng dụng chính (scaffold) mà không làm phân tán sự chú ý khỏi nội dung chữ.

> **Nguyên tắc nền trung tính:**
> 
>   Bề mặt ô nhập liệu phải tuyệt đối trung tính. Không bao giờ pha trộn màu sắc thương hiệu (primary/accent) vào token này, vì lớp nền có độ bão hòa màu cao trong các biểu mẫu sẽ gây mỏi mắt nghiêm trọng và làm giảm độ tương phản của chữ khi làm việc lâu.

### Ví dụ triển khai

```dart
// Tạo một ô nhập liệu tương tác tiêu chuẩn trong biểu mẫu
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    // Áp dụng mã màu nền hoạt động mặc định
    fillColor: context.faColors.input.fill.enabled,
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.fill.enabled` trỏ thẳng tới surfaceContainerLow của hệ thống, tạo ra sự tương phản dịu nhẹ và tự động chuyển đổi sắc độ mượt mà giữa giao diện Sáng và Tối.*