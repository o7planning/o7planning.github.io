## faColors.selection.inkNormal

Token `faColors.selection.inkNormal` xác định màu mực chủ đạo cho văn bản, biểu tượng và đồ họa vector bên trong một hàng dữ liệu ở trạng thái mặc định.

### Logic kỹ thuật

Nằm trong kiến trúc **Surface - Ink - Stroke**, `inkNormal` đại diện cho lớp nội dung cốt lõi. Nó được ánh xạ tới màu trung tính có độ tương phản cao nhất trong theme hiện tại, đảm bảo mọi dữ liệu luôn sắc nét và dễ đọc trên nền `rowNormal`.

> **Điểm neo ngữ nghĩa:**
> 
>   `inkNormal` không chỉ là màu chữ. Nó là loại mực vạn năng được áp dụng cho tất cả các thành phần tiền cảnh (foreground)—bao gồm cả icon SVG và ký tự—để duy trì sự thống nhất thị giác trong toàn bộ hàng.

### Ví dụ triển khai


```dart
// Vẽ nội dung bằng mực selection tiêu chuẩn
Row(
  children: [
    Icon(
      Icons.data_object_rounded,
      // Áp dụng mực cho biểu tượng
      color: context.faColors.selection.inkNormal,
    ),
    const SizedBox(width: 8),
    Text(
      'System Architecture Log',
      style: TextStyle(
        // Áp dụng mực cho văn bản
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ],
)
```

*Ghi chú: `faColors.selection.inkNormal` thường là bí danh (alias) của `faColors.ink.primary`, giúp nội dung danh sách luôn tuân thủ các tiêu chuẩn typographic toàn cục của ứng dụng.*