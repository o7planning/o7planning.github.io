## faColors.input.ink.primary

Token `faColors.input.ink.primary` xác định màu chữ chủ đạo cho các giá trị dữ liệu do người dùng gõ vào bên trong một ô nhập liệu đang hoạt động.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.ink.primary` vận hành nghiêm ngặt như một bí danh kiến trúc (architectural alias) chỉ đọc, trỏ thẳng về hạt nhân toàn cục `faColors.ink.primary`. Nó không sở hữu bộ xử lý (resolver) độc lập và không thể bị ghi đè riêng lẻ, nhằm đảm bảo tính nhất quán tuyệt đối cho hệ thống hiển thị chữ.

> **Quy tắc Namespace sạch (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một mã màu chính xác với `faColors.ink.primary`, các nhà phát triển nên luôn luôn sử dụng `faColors.input.ink.primary` khi cấu hình các thành phần biểu mẫu. Việc giữ cho tất cả các khai báo thuộc tính biểu mẫu nằm gọn trong phạm vi scope `faColors.input` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai

```dart
// Ánh xạ rõ ràng giá trị chữ nhập liệu bên trong một TextField tiêu chuẩn của Flutter
TextField(
  style: TextStyle(
    // CHUẨN: Sử dụng bí danh ink chuyên biệt của input cho chữ người dùng gõ vào
    color: context.faColors.input.ink.primary,
    fontSize: 16.0,
  ),
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(color: context.faColors.input.stroke.enabled),
    ),
  ),
)
```

*Ghi chú: Bằng cách tập trung hóa các lớp chữ dưới namespace `input.ink`, các công cụ gợi ý mã nguồn của IDE có thể phục vụ toàn bộ các thông số nền, viền và chữ chỉ trong một lần gõ dấu chấm.*