## faColors.action.fill.selected

Token `faColors.action.fill.selected` xác định màu lấp đầy nền cho các thành phần tương tác hiện đang ở trạng thái "Đã chọn" (Selected).

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.selected` cung cấp một sự xác nhận thị giác rõ ràng về một lựa chọn. nó được thiết kế để nổi bật hơn các lớp `faColors.surface.xxx` nhưng thường duy trì độ bão hòa cân bằng để tránh gây mỏi mắt khi nhiều mục (như Chips) được chọn cùng lúc.

> **Phân cấp vùng chọn:**
> 
>   Khác với `faColors.selection.rowSelected` (vốn được tối ưu cho các hàng dữ liệu rộng), `faColors.action.fill.selected` được tinh chỉnh cho các thành phần UI nhỏ hơn. Luôn kết hợp lớp fill này với `faColors.action.ink.onSelectedFill` để duy trì các tiêu chuẩn về khả năng truy cập.

### Ví dụ triển khai


```dart
// Tạo một Filter Chip đang được chọn
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // Lớp fill kích hoạt cho trạng thái selected
    color: context.faColors.action.fill.selected,
    borderRadius: BorderRadius.circular(16),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_rounded,
        // Sử dụng mực chuyên dụng cho nền selected
        color: context.faColors.action.ink.onSelectedFill,
        size: 14,
      ),
      const SizedBox(width: 4),
      Text(
        'Selected Filter',
        style: TextStyle(
          // Sử dụng mực chuyên dụng cho nền selected
          color: context.faColors.action.ink.onSelectedFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.selected` thường được ánh xạ tới màu container mang sắc thái thương hiệu với độ tương phản tối ưu.*