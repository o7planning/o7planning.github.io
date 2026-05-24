## faColors.action.ink.onPrimaryFill

Token `faColors.action.ink.onPrimaryFill` xác định màu mực cụ thể được sử dụng cho văn bản và biểu tượng nằm trực tiếp trên nền màu `faColors.action.fill.primary`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là "người bạn đồng hành tương phản cao". Trong khi các loại mực tiêu chuẩn được thiết kế cho nền trung tính, `faColors.action.ink.onPrimaryFill` được tối ưu hóa về mặt toán học để đảm bảo khả năng đọc hoàn hảo trên nền màu thương hiệu có độ bão hòa cao.

> **Cảnh báo sử dụng quan trọng:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với nền `faColors.action.fill.primary`.
>   Nếu bạn sử dụng `faColors.action.ink.onPrimaryFill` cho một nút không có nền (TextButton) mà nút đó đặt trên một `faColors.surface.xxx` hoặc `faColors.bar.xxx`, chữ sẽ **không thể nhìn thấy** do thiếu độ tương phản.

### Ví dụ triển khai


```dart
// Triển khai đúng cho một nút hành động chính
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy primary
    color: context.faColors.action.fill.primary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Save Changes',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền primary
      color: context.faColors.action.ink.onPrimaryFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới màu trắng tinh khiết hoặc màu trung tính cực tối, tùy thuộc vào độ sáng của màu thương hiệu chính.*