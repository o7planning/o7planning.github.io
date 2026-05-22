## faColors.selection.inkCurrent

Token `faColors.selection.inkCurrent` xác định màu sắc cho văn bản và biểu tượng bên trong một hàng hiện đang giữ tiêu điểm hoặc con trỏ điều hướng (`rowCurrent`).

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `inkCurrent` đảm bảo rằng nội dung luôn sắc nét và đóng vai trò chủ đạo khi người dùng đang thực hiện điều hướng. Vì `rowCurrent` thường đại diện cho một trạng thái tạm thời, loại mực này được thiết kế để hoạt động hài hòa với các nền cấp độ phụ mà không làm mất đi trọng số thị giác của thông tin.

> **Tiêu điểm điều hướng:**
> 
>   Sử dụng `inkCurrent` để cung cấp phản hồi tinh tế nhưng rõ ràng rằng mục cụ thể này đang là mục tiêu hiện tại của việc điều hướng bằng bàn phím hoặc con trỏ.

### Ví dụ triển khai

```dart
// Vẽ nội dung trên một bề mặt đang giữ tiêu điểm
Row(
  children: [
    Icon(
      Icons.arrow_forward_ios_rounded,
      // Áp dụng mực cho trạng thái focus hiện tại
      color: context.faColors.selection.inkCurrent,
      size: 16,
    ),
    const SizedBox(width: 8),
    Text(
      'Navigating System Item',
      style: TextStyle(
        // Sử dụng mực current để tối ưu khả năng đọc khi điều hướng
        color: context.faColors.selection.inkCurrent,
      ),
    ),
  ],
)
```

*Ghi chú: `faColors.selection.inkCurrent` thường là một bí danh của `faColors.ink.primary` để đảm bảo nội dung đang được focus luôn nhất quán với hệ thống typography chính của ứng dụng.*