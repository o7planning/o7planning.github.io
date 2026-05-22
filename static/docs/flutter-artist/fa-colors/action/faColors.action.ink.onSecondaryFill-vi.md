## faColors.action.ink.onSecondaryFill

Token `faColors.action.ink.onSecondaryFill` xác định màu mực cụ thể được sử dụng cho văn bản và biểu tượng nằm trực tiếp trên nền màu `faColors.action.fill.secondary`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là một loại mực tương phản chuyên dụng. Nó được tinh chỉnh về mặt toán học để mang lại khả năng đọc tối ưu trên bề mặt có độ nhấn trung bình của lớp lấp đầy secondary, đảm bảo các hành động bổ trợ luôn rõ ràng nhưng vẫn giữ được thứ bậc thị giác phụ sau hành động chính.

> **Cảnh báo sử dụng quan trọng:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với nền `faColors.action.fill.secondary`.
>   Nếu bạn sử dụng `faColors.action.ink.onSecondaryFill` cho một nút không có nền (TextButton) mà nút đó đặt trên một `faColors.surface.xxx` hoặc `faColors.bar.xxx`, chữ sẽ **không thể nhìn thấy** do thiếu độ tương phản.

### Ví dụ triển khai

```dart
// Triển khai đúng cho một nút hành động phụ
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy secondary
    color: context.faColors.action.fill.secondary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Reset Settings',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền secondary
      color: context.faColors.action.ink.onSecondaryFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới một tông màu trung tính cụ thể nhằm bổ sung cho sắc thái của màu thương hiệu phụ mà vẫn duy trì các tiêu chuẩn về khả năng truy cập (accessibility).*