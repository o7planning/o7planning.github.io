## faColors.action.ink.success

Token `faColors.action.ink.success` xác định màu thành công (semantic success) dành riêng cho văn bản, biểu tượng và các yếu tố vector được sử dụng trong các hành động tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.success` có màu sắc giống hệt với `faColors.action.fill.success`. Việc tách biệt tên gọi là một yêu cầu kiến trúc nghiêm ngặt: "Ink" dùng để vẽ nội dung, đảm bảo văn bản mang chủ đề thành công luôn rõ ràng và đúng ngữ nghĩa trên các bề mặt trung tính.

> **Xác nhận độc lập:**
> 
>   Sử dụng token này cho các **TextButton**, các biểu tượng trạng thái "Đã hoàn thành" đứng độc lập, hoặc các thông báo thành công nằm trực tiếp trên các lớp `faColors.surface.xxx`. Nó cung cấp độ tương phản màu sắc cao trên nền trung tính.

### Ví dụ triển khai

```dart
// Tạo một Text Button Thành công (Không có nền)
Row(
  children: [
    Icon(
      Icons.done_all_rounded,
      // ĐÚNG: Sử dụng mực success cho biểu tượng trạng thái độc lập
      color: context.faColors.action.ink.success,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Đánh dấu đã giải quyết',
        style: TextStyle(
          // ĐÚNG: Màu success ngữ nghĩa cho văn bản tương tác
          color: context.faColors.action.ink.success,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.success`. Hãy sử dụng `faColors.action.ink.onSuccessFill` để đảm bảo nội dung không bị "chìm" vào nền.*