## faColors.action.ink.onWarningFill

Token `faColors.action.ink.onWarningFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên lớp nền `faColors.action.fill.warning`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là một lớp tương phản cực kỳ quan trọng. Vì nền cảnh báo thường có độ sáng cao (vàng hoặc hổ phách), loại mực này được tinh chỉnh đặc biệt (thường là màu trung tính cực tối) để đảm bảo thông điệp thận trọng luôn dễ đọc hoàn hảo trong mọi điều kiện môi trường.

> **Khóa khả năng hiển thị:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với `faColors.action.fill.warning`.
>   Nếu bạn sử dụng `faColors.action.ink.onWarningFill` cho một nhãn đứng độc lập trên `faColors.surface.xxx`, độ tương phản sẽ không đủ, thường khiến chữ gần như **vô hình**.

### Ví dụ triển khai

```dart
// Triển khai đúng cho một nút hành động Cảnh báo
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy warning rực rỡ
    color: context.faColors.action.fill.warning,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Yêu cầu cập nhật',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền warning
      color: context.faColors.action.ink.onWarningFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này hầu như luôn được ánh xạ tới màu xám cực đậm hoặc màu đen để đảm bảo độ tương phản tối đa trên nền vàng/hổ phách sáng của warning.*