## faColors.input.stroke.focused

Token `faColors.input.stroke.focused` xác định màu sắc đường viền chủ đạo cho ô nhập liệu khi nó được người dùng bấm chọn hoặc chuyển tiêu điểm bàn phím (focus) vào để tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.stroke.focused` đóng vai trò là một chỉ báo cấu trúc có độ hiển thị cao. Nó ánh xạ trực tiếp tới màu thương hiệu chính (primary) của hệ thống trong FaColorGraph. Khi người dùng tương tác với ô nhập liệu, token này sẽ thay thế lớp viền trung tính mặc định, thiết lập một điểm neo thị giác dứt khoát để báo hiệu vị trí con trỏ nhập liệu đang hoạt động.

> **Quy tắc trọng số tiêu điểm:**
> 
>   Đường viền ở trạng thái focus thường được cấu hình với độ dày nét lớn hơn một chút (ví dụ: 2.0 logical pixels thay vì 1.0) kết hợp với token này. Sự thay đổi độ dày cấu trúc nhẹ nhàng này, khi đi cùng màu sắc focus thương hiệu, sẽ đảm bảo phản hồi tiếp cận (accessibility) tuyệt vời trên mọi giao diện máy tính và di động.

### Ví dụ triển khai


```dart
// Cấu hình đường viền tiêu điểm hoạt động trong phạm vi thiết lập ô nhập liệu
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Đường viền stroke được sử dụng khi ô nhập liệu nhận tiêu điểm focus
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.focused,
        width: 2.0, // Tăng độ dày nét viền khi đang focus để nhấn mạnh cấu trúc
      ),
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
        width: 1.0,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.stroke.focused` liên kết trực tiếp với thuộc tính scheme.primary của theme, duy trì độ tương phản sắc nét trên nền ô nhập liệu ở cả môi trường Sáng và Tối.*