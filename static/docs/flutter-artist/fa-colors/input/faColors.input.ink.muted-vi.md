## faColors.input.ink.muted

Token `faColors.input.ink.muted` xác định màu chữ có độ tương phản thấp dành cho chữ gợi ý (hint text), dữ liệu giữ chỗ (placeholder) hoặc các lớp chữ chỉ đọc khi ô nhập liệu bị khóa.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.ink.muted` vận hành nghiêm ngặt như một bí danh kiến trúc (architectural alias) chỉ đọc, trỏ thẳng về hạt nhân toàn cục `faColors.ink.muted`. Nó không sở hữu bộ xử lý (resolver) độc lập và không thể bị ghi đè riêng lẻ, nhằm đảm bảo tính nhất quán tuyệt đối cho hệ thống hiển thị chữ.

> **Quy tắc Namespace sạch (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một mã màu chính xác với `faColors.ink.muted`, các nhà phát triển nên luôn luôn sử dụng `faColors.input.ink.muted` khi cấu hình các thành phần biểu mẫu. Việc giữ cho tất cả các khai báo thuộc tính biểu mẫu nằm gọn trong phạm vi scope `faColors.input` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai

```dart
// Ánh xạ rõ ràng kiểu chữ gợi ý bên trong cấu hình một TextField tiêu chuẩn của Flutter
TextField(
  style: TextStyle(
    color: context.faColors.input.ink.primary,
  ),
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    hintText: 'Enter your account email...',
    // CHUẨN: Sử dụng bí danh ink muted của input cho dòng chữ gợi ý chìm
    hintStyle: TextStyle(
      color: context.faColors.input.ink.muted,
      fontSize: 13.0,
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(color: context.faColors.input.stroke.enabled),
    ),
  ),
)
```

*Ghi chú: Bằng cách tập trung hóa các lớp chữ dưới namespace `input.ink`, các công cụ gợi ý mã nguồn của IDE có thể phục vụ toàn bộ các thông số nền, viền và chữ chỉ trong một lần gõ dấu chấm.*