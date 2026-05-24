## faColors.input.stroke.enabled

Token `faColors.input.stroke.enabled` xác định màu sắc đường viền bao quanh mặc định cho các ô nhập liệu khi chúng ở trạng thái hoạt động, cho phép chỉnh sửa, nhưng hiện chưa được người dùng chọn (focus).

### Logic kỹ thuật

Trong hệ thống bố cục **Fill - Ink - Stroke**, `faColors.input.stroke.enabled` tạo nên bộ khung cơ sở cho một ô biểu mẫu đang hoạt động. Nó được ánh xạ trực tiếp tới lớp màu outline variant của hệ thống, cung cấp một đường biên rõ ràng nhưng không lấn lướt. Điều này giúp ô nhập liệu dễ nhận diện mà không cạnh tranh thị giác với các đường viền đậm bão hòa cao được dành riêng cho trạng thái báo lỗi hoặc trạng thái focus gõ chữ.

> **Quy tắc khung xương cơ sở:**
> 
>   Luôn sử dụng `faColors.input.stroke.enabled` cho cấu hình trạng thái `enabledBorder` mặc định trong `InputDecoration` của Flutter. Điều này đảm bảo tính nhất quán với các vạch ngăn cách cấu trúc khác trên UI, giữ cho biểu mẫu sạch sẽ và dễ đọc khi trang vừa tải lên.

### Ví dụ triển khai


```dart
// Cấu hình đường viền chu vi tiêu chuẩn cho ô nhập liệu đang hoạt động
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Áp dụng mã token viền hoạt động mặc định để dựng khung
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
        width: 1.0,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.stroke.enabled` liên kết trực tiếp với outlineVariant của theme, đảm bảo các đường biên biểu mẫu tự động điều chỉnh sắc độ chuẩn xác khi đổi giữa giao diện Sáng và Tối.*