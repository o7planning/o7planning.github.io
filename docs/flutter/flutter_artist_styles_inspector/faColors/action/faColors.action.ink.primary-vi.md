## faColors.action.ink.primary

Token `faColors.action.ink.primary` xác định màu thương hiệu chủ đạo dành riêng cho văn bản, biểu tượng và đồ họa vector được sử dụng trong các hành động tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.primary` có màu sắc giống hệt với `faColors.action.fill.primary`. Sự khác biệt về tên gọi tồn tại duy nhất để ngăn chặn sự nhầm lẫn về mặt kiến trúc: "Ink" dùng để vẽ nội dung, trong khi "Fill" dùng để lấp đầy nền.

> **Sử dụng chiến lược:**
> 
>   Token này được thiết kế cho các **TextButton** hoặc các nút không có nền. Vì sử dụng màu thương hiệu đậm nhất, các loại nút "trong suốt" này vẫn đảm bảo khả năng đọc rất tốt khi đặt trên các lớp `faColors.surface.xxx` hoặc các thành phần `faColors.bar.xxx` khác nhau.

### Ví dụ triển khai


```dart
// Tạo một Text Button mang màu thương hiệu (Không có nền)
Row(
  children: [
    Icon(
      Icons.add_circle_outline_rounded,
      // ĐÚNG: Sử dụng mực action primary cho icon đứng độc lập
      color: context.faColors.action.ink.primary,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Add New Item',
        style: TextStyle(
          // ĐÚNG: Màu thương hiệu chủ đạo cho văn bản tương tác
          color: context.faColors.action.ink.primary,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.primary`. Nó được sinh ra để đứng độc lập trên các bề mặt trung tính hoặc các thanh điều hướng.*