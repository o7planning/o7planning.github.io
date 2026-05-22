## faColors.action.fill.reverseDanger

Token `faColors.action.fill.reverseDanger` xác định nền đỏ phớt cho các trạng thái lỗi hoặc cảnh báo nguy hiểm cần sự chú ý nhẹ nhàng.

### Ví dụ triển khai

```dart
// Phản hồi lỗi nhập liệu
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.action.fill.reverseDanger, // Nền đỏ nhạt
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'This field is required.', // String tiếng Anh chuẩn quốc tế
    style: TextStyle(color: context.faColors.action.ink.danger),
  ),
)
```