## faColors.action.ink.warning

Token `faColors.action.ink.warning` xác định màu cảnh báo ngữ nghĩa (thường là màu hổ phách hoặc cam) cho văn bản, biểu tượng và đồ họa vector được sử dụng trong các hành động tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.warning` được căn chỉnh thị giác với bảng màu warning fill. Định danh "Ink" đảm bảo rằng các thông điệp thận trọng hoặc biểu tượng trạng thái luôn sắc nét và dễ đọc khi đặt trực tiếp trên các lớp `faColors.surface.xxx` trung tính.

> **Cảnh báo độc lập:**
> 
>   Sử dụng token này cho các **TextButton** hoặc biểu tượng báo hiệu một vấn đề không quá nghiêm trọng, chẳng hạn như chỉ báo "Pin yếu" hoặc liên kết "Hồ sơ chưa hoàn thiện". Nó mang lại độ tương phản màu sắc cao trên nền sáng/tối mà không gây "nặng" giao diện như một nút bấm có nền.

### Ví dụ triển khai


```dart
// Tạo một Text Button Cảnh báo (Không có nền)
Row(
  children: [
    Icon(
      Icons.error_outline_rounded,
      // ĐÚNG: Sử dụng mực warning cho icon cảnh báo đứng độc lập
      color: context.faColors.action.ink.warning,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Gói đăng ký sắp hết hạn',
        style: TextStyle(
          // ĐÚNG: Màu warning ngữ nghĩa cho văn bản tương tác
          color: context.faColors.action.ink.warning,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.warning`. Hãy sử dụng `faColors.action.ink.onWarningFill` để đảm bảo khả năng đọc tối ưu.*