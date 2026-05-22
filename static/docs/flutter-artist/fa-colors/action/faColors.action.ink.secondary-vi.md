## faColors.action.ink.secondary

Token `faColors.action.ink.secondary` xác định màu thương hiệu phụ dành riêng cho văn bản, biểu tượng và đồ họa vector được sử dụng trong các hành động tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.secondary` có màu sắc giống hệt với `faColors.action.fill.secondary`. Sự khác biệt về tên gọi nhằm duy trì tính toàn vẹn của kiến trúc: "Ink" dùng để vẽ nội dung tiền cảnh, trong khi "Fill" dùng cho các lớp nền.

> **Sử dụng chiến lược:**
> 
>   Token này lý tưởng cho các **TextButton** phụ hoặc các biểu tượng bổ trợ cần tính gợi ý tương tác mà không mang trọng số thị giác nặng nề như hành động chính. Vì là một loại mực "độc lập", nó vẫn đảm bảo hiển thị rõ ràng khi đặt trên các lớp `faColors.surface.xxx` hoặc `faColors.bar.xxx` trung tính.

### Ví dụ triển khai

```dart
// Tạo một Text Button phụ (Không có nền)
Row(
  children: [
    Icon(
      Icons.history_rounded,
      // ĐÚNG: Sử dụng mực action secondary cho icon bổ trợ đứng độc lập
      color: context.faColors.action.ink.secondary,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'View History',
        style: TextStyle(
          // ĐÚNG: Màu thương hiệu phụ cho văn bản tương tác
          color: context.faColors.action.ink.secondary,
          fontWeight: FontWeight.w500,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.secondary`. Nó được sinh ra để đứng độc lập nhằm đảm bảo tỷ lệ tương phản phù hợp.*