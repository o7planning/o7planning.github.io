## faColors.input.ink.danger

Token `faColors.input.ink.danger` xác định màu chữ cảnh báo cho các dòng thông báo lỗi kiểm tra dữ liệu (validation error), tin nhắn cảnh báo hoặc chỉ báo thất bại trong phạm vi ô nhập liệu.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.ink.danger` vận hành nghiêm ngặt như một bí danh kiến trúc (architectural alias) chỉ đọc, trỏ thẳng về hạt nhân toàn cục `faColors.ink.danger`. Nó không sở hữu bộ xử lý (resolver) độc lập và không thể bị ghi đè riêng lẻ, nhằm đảm bảo tính nhất quán tuyệt đối cho hệ thống hiển thị chữ.

> **Quy tắc Namespace sạch (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một mã màu chính xác với `faColors.ink.danger`, các nhà phát triển nên luôn luôn sử dụng `faColors.input.ink.danger` khi cấu hình các thành phần biểu mẫu. Việc giữ cho tất cả các khai báo thuộc tính biểu mẫu nằm gọn trong phạm vi scope `faColors.input` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai

```dart
// Ánh xạ rõ ràng dòng chữ báo lỗi kiểm tra dữ liệu bên trong một TextField tiêu chuẩn của Flutter
TextField(
  style: TextStyle(
    color: context.faColors.input.ink.primary,
  ),
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    errorText: 'Invalid email address format.',
    // CHUẨN: Sử dụng bí danh ink danger của input cho dòng chữ báo lỗi validate
    errorStyle: TextStyle(
      color: context.faColors.input.ink.danger,
      fontSize: 12.0,
      fontWeight: FontWeight.medium,
    ),
    errorBorder: OutlineInputBorder(
      borderSide: BorderSide(color: context.faColors.input.stroke.error),
    ),
  ),
)
```

*Ghi chú: Bằng cách tập trung hóa các lớp chữ dưới namespace `input.ink`, các công cụ gợi ý mã nguồn của IDE có thể phục vụ toàn bộ các thông số nền, viền và chữ chỉ trong một lần gõ dấu chấm.*