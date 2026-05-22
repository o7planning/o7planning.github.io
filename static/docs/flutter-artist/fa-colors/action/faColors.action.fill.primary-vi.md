## faColors.action.fill.primary

Token `faColors.action.fill.primary` xác định màu nền nổi bật nhất cho các hành động chính, chẳng hạn như các nút "Gửi", "Lưu" hoặc "Xác nhận".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.primary` đại diện cho cấp độ nhấn mạnh tương tác cao nhất. Nó sử dụng màu thương hiệu đậm nhất từ bảng màu để đảm bảo thu hút sự chú ý ngay lập tức. Token này được thiết kế đặc biệt cho các thành phần có mật độ cao yêu cầu một lớp lấp đầy (fill) thị giác mạnh mẽ.

> **Quy tắc tương phản quan trọng:**
> 
>   Luôn kết hợp nền này với `faColors.action.ink.onPrimaryFill` cho nội dung (chữ/biểu tượng).
>   **TUYỆT ĐỐI KHÔNG** sử dụng `faColors.action.ink.primary` đè lên nền này, vì token đó dành cho các phần tử đứng độc lập và sẽ không đủ độ tương phản tại đây.

### Ví dụ triển khai

```dart
// Tạo một Nút bấm Chính (Primary Button) có độ nhấn cao
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // Lớp fill primary đậm đà cho hành động chính
    color: context.faColors.action.fill.primary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_rounded,
        // ĐÚNG: Mực tương phản dành cho nền primary
        color: context.faColors.action.ink.onPrimaryFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Confirm Action',
        style: TextStyle(
          // ĐÚNG: Mực tương phản dành cho nền primary
          color: context.faColors.action.ink.onPrimaryFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: `faColors.action.fill.primary` được ánh xạ tới màu thương hiệu chính trong FaActionSurfaceResolvers.*