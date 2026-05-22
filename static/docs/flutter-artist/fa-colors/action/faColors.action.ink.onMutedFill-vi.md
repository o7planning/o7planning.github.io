## faColors.action.ink.onMutedFill

Token `faColors.action.ink.onMutedFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên lớp nền `faColors.action.fill.muted`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này cung cấp độ tương phản cân bằng cho các bề mặt có độ nhấn thấp. Vì `faColors.action.fill.muted` thường là tông màu trung tính hoặc đã khử bão hòa, loại mực này được tinh chỉnh để duy trì khả năng đọc trong khi vẫn bảo tồn thẩm mỹ "tĩnh lặng" của thành phần.

> **Cân bằng "Tương phản thấp":**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với `faColors.action.fill.muted`.
>   Sử dụng nó ở nơi khác có thể dẫn đến các vấn đề về khả năng đọc, vì nó được tính toán về mặt toán học để hoạt động dựa trên độ sáng cụ thể của lớp fill muted.

### Ví dụ triển khai

```dart
// Triển khai đúng cho một nút hành động Muted
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy trung tính muted
    color: context.faColors.action.fill.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Hành động phụ',
    style: TextStyle(
      // ĐÚNG: Mực cân bằng dành cho nền muted
      color: context.faColors.action.ink.onMutedFill,
      fontSize: 13,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới một màu trung tính đậm để đảm bảo vượt qua các bài kiểm tra tương phản cơ bản trên nền xám nhạt.*