## faColors.input.ink.highlight

Token `faColors.input.ink.highlight` xác định màu chữ nổi bật được sử dụng để nhấn mạnh các ký tự đặc biệt nội dòng (inline characters), chỉ báo khớp từ khóa hoặc các ký hiệu bắt buộc trong phạm vi ô nhập liệu.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.ink.highlight` vận hành nghiêm ngặt như một bí danh kiến trúc (architectural alias) chỉ đọc, trỏ thẳng về hạt nhân toàn cục `faColors.ink.highlight`. Nó không sở hữu bộ xử lý (resolver) độc lập và không thể bị ghi đè riêng lẻ, nhằm đảm bảo tính nhất quán tuyệt đối cho hệ thống hiển thị chữ.

> **Quy tắc Namespace sạch (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một mã màu chính xác với `faColors.ink.highlight`, các nhà phát triển nên luôn luôn sử dụng `faColors.input.ink.highlight` khi cấu hình các thành phần biểu mẫu. Việc giữ cho tất cả các khai báo thuộc tính biểu mẫu nằm gọn trong phạm vi scope `faColors.input` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai

```dart
// Ánh xạ rõ ràng một chỉ báo trường bắt buộc nhập bên trong bố cục của ô nhập liệu
Row(
  children: [
    Text(
      'Email Address',
      style: TextStyle(
        color: context.faColors.input.ink.primary,
        fontSize: 14.0,
      ),
    ),
    const SizedBox(width: 2),
    Text(
      '*',
      style: TextStyle(
        // CHUẨN: Sử dụng bí danh ink highlight của input cho dấu sao bắt buộc nhập
        color: context.faColors.input.ink.highlight,
        fontSize: 14.0,
        fontWeight: FontWeight.bold,
      ),
    ),
  ],
)
```

*Ghi chú: Bằng cách tập trung hóa các lớp chữ dưới namespace `input.ink`, các công cụ gợi ý mã nguồn của IDE có thể phục vụ toàn bộ các thông số nền, viền và chữ chỉ trong một lần gõ dấu chấm.*