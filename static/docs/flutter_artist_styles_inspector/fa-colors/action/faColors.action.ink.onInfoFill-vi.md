## faColors.action.ink.onInfoFill

Token `faColors.action.ink.onInfoFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên lớp nền `faColors.action.fill.info`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là một lớp mực tương phản cao cho các bề mặt thông tin. Vì nền info sử dụng sắc thái xanh dương/xanh lơ đặc trưng, loại mực này được tinh chỉnh để mang lại khả năng đọc tối ưu, đảm bảo các hướng dẫn bổ trợ hoặc nút "Tìm hiểu thêm" chính luôn rõ ràng.

> **Khóa thông tin:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với `faColors.action.fill.info`.
>   Nếu bạn cố tình sử dụng `faColors.action.ink.onInfoFill` cho văn bản đứng độc lập trên `faColors.surface.xxx`, sự thiếu hụt tương phản sẽ khiến nội dung gần như **vô hình**.

### Ví dụ triển khai


```dart
// Triển khai đúng cho một nút hành động Thông tin
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy xanh dương info
    color: context.faColors.action.fill.info,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Xem hướng dẫn',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền info
      color: context.faColors.action.ink.onInfoFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới màu trắng tinh khôi hoặc màu xanh navy cực đậm, tùy thuộc vào độ sáng của màu info trong chủ đề của bạn.*