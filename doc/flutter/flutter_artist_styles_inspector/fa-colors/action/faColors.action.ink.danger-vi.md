## faColors.action.ink.danger

Token `faColors.action.ink.danger` xác định màu nguy hiểm ngữ nghĩa (màu đỏ) dành riêng cho văn bản, biểu tượng và đồ họa vector được sử dụng trong các hành động tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.danger` được căn chỉnh thị giác với bảng màu danger fill. Định danh "Ink" đảm bảo rằng các nhãn mang tính phá hủy luôn sắc nét và đáp ứng tiêu chuẩn truy cập khi đặt trực tiếp trên các lớp `faColors.surface.xxx` hoặc `faColors.bar.xxx` trung tính.

> **Phá hủy độc lập:**
> 
>   Sử dụng token này cho các **TextButton** mang tính phá hủy (như "Loại bỏ mục") hoặc các biểu tượng báo hiệu lỗi nghiêm trọng. Nó cung cấp một tín hiệu "Dừng lại" rõ ràng mà không gây choáng ngợp thị giác như một nút bấm đỏ có nền.

### Ví dụ triển khai


```dart
// Tạo một Text Button Danger (Không có nền)
Row(
  children: [
    Icon(
      Icons.no_accounts_rounded,
      // ĐÚNG: Sử dụng mực danger cho icon phá hủy đứng độc lập
      color: context.faColors.action.ink.danger,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Hủy liên kết tài khoản',
        style: TextStyle(
          // ĐÚNG: Màu đỏ ngữ nghĩa cho văn bản mang tính phá hủy
          color: context.faColors.action.ink.danger,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.danger`. Hãy sử dụng `faColors.action.ink.onDangerFill` để đảm bảo nội dung không bị "nuốt chửng" bởi nền.*