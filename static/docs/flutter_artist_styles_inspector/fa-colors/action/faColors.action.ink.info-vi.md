## faColors.action.ink.info

Token `faColors.action.ink.info` xác định màu thông tin ngữ nghĩa (màu xanh dương) dành riêng cho văn bản, biểu tượng và đồ họa vector được sử dụng trong các hành động mang tính chỉ dẫn.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.info` được căn chỉnh thị giác với bảng màu info fill. Định danh "Ink" đảm bảo rằng nội dung hướng dẫn luôn sắc nét và duy trì độ tương phản chuyên nghiệp khi đặt trực tiếp trên các lớp `faColors.surface.xxx` trung tính.

> **Gợi ý thông tin:**
> 
>   Sử dụng token này cho các **TextButton** như "Chi tiết" hoặc "Đọc hướng dẫn" và các biểu tượng đứng độc lập cung cấp thêm ngữ cảnh. Nó phân biệt thông tin hữu ích với các hành động thương hiệu chính, tạo ra một hệ thống phân cấp ý định rõ ràng hơn.

### Ví dụ triển khai


```dart
// Tạo một Text Button Thông tin (Không có nền)
Row(
  children: [
    Icon(
      Icons.help_center_rounded,
      // ĐÚNG: Sử dụng mực info cho icon hướng dẫn đứng độc lập
      color: context.faColors.action.ink.info,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Tìm hiểu thêm về tính năng này',
        style: TextStyle(
          // ĐÚNG: Màu xanh dương ngữ nghĩa cho văn bản tương tác
          color: context.faColors.action.ink.info,
          fontWeight: FontWeight.w500,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.info`. Hãy sử dụng `faColors.action.ink.onInfoFill` để đảm bảo khả năng hiển thị và độ đọc tối ưu.*