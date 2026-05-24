## faColors.input.ink.secondary

Token `faColors.input.ink.secondary` xác định màu chữ phụ cho các đoạn văn bản hướng dẫn bổ sung, tin nhắn trợ giúp hoặc các widget nhãn tiêu đề (label) ở trạng thái rảnh trong phạm vi ô nhập liệu.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.ink.secondary` vận hành nghiêm ngặt như một bí danh kiến trúc (architectural alias) chỉ đọc, trỏ thẳng về hạt nhân toàn cục `faColors.ink.secondary`. Nó không sở hữu bộ xử lý (resolver) độc lập và không thể bị ghi đè riêng lẻ, nhằm đảm bảo tính nhất quán tuyệt đối cho hệ thống hiển thị chữ.

> **Quy tắc Namespace sạch (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một mã màu chính xác với `faColors.ink.secondary`, các nhà phát triển nên luôn luôn sử dụng `faColors.input.ink.secondary` khi cấu hình các thành phần biểu mẫu. Việc giữ cho tất cả các khai báo thuộc tính biểu mẫu nằm gọn trong phạm vi scope `faColors.input` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai


```dart
// Ánh xạ rõ ràng dòng chữ hướng dẫn phụ bên dưới một TextField tiêu chuẩn của Flutter
Column(
  cross: CrossAxisAlignment.start,
  children: [
    TextField(
      decoration: InputDecoration(
        filled: true,
        fillColor: context.faColors.input.fill.enabled,
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: context.faColors.input.stroke.enabled),
        ),
      ),
    ),
    const SizedBox(height: 4),
    Text(
      'Password must be at least 8 characters long.',
      style: TextStyle(
        // CHUẨN: Sử dụng bí danh ink phụ của input cho dòng mô tả hướng dẫn
        color: context.faColors.input.ink.secondary,
        fontSize: 12.0,
      ),
    ),
  ],
)
```

*Ghi chú: Bằng cách tập trung hóa các lớp chữ dưới namespace `input.ink`, các công cụ gợi ý mã nguồn của IDE có thể phục vụ toàn bộ các thông số nền, viền và chữ chỉ trong một lần gõ dấu chấm.*