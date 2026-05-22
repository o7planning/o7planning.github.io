## faColors.action.ink.onSuccessFill

Token `faColors.action.ink.onSuccessFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên lớp nền `faColors.action.fill.success`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là một lớp mực tương phản cao. Nó được tinh chỉnh về mặt toán học để mang lại khả năng đọc tối ưu trên nền xanh lá thành công, đảm bảo các thông báo xác nhận hoặc hành động "Hoàn tất" chính luôn dễ đọc trong mọi điều kiện ánh sáng.

> **Điều răn về tương phản:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với `faColors.action.fill.success`.
>   Nếu bạn cố tình sử dụng `faColors.action.ink.onSuccessFill` cho một TextButton đứng độc lập trên `faColors.surface.xxx`, nội dung sẽ gần như **vô hình** hoặc cực kỳ mờ nhạt.

### Ví dụ triển khai


```dart
// Triển khai đúng cho một nút bấm Thành công chính
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy success
    color: context.faColors.action.fill.success,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Thanh toán thành công',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền success
      color: context.faColors.action.ink.onSuccessFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới màu trắng tinh khiết hoặc màu xanh lá đậm (forest green), tùy thuộc vào độ sáng cụ thể của lớp nền success để đáp ứng tiêu chuẩn WCAG.*