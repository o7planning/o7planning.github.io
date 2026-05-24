## faColors.action.state.hover

Token `faColors.action.state.hover` xác định màu lớp phủ (overlay) được áp dụng cho một yếu tố tương tác khi con trỏ (chuột) nằm bên trên nó.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `hover` được xử lý như một lớp trạng thái động. Nó thường sử dụng màu trung tính hoặc màu thương hiệu có độ mờ thấp, "xếp chồng" lên trên lớp `fill` hoặc `surface` hiện có. Điều này cung cấp phản hồi thị giác tức thì, xác nhận rằng yếu tố đó có thể tương tác mà không làm thay đổi bản sắc cơ bản của nó.

> **Nguyên tắc Xếp chồng:**
> 
>   Vì đây là một lớp phủ, nó nên được triển khai bằng `Stack` hoặc `ColorFilter` trong Flutter.
>   **Mẹo chuyên nghiệp:** Hãy đảm bảo độ mờ ở mức tinh tế (thường từ 4% đến 8%) để duy trì khả năng đọc của lớp mực ("Ink") bên dưới.

### Ví dụ triển khai


```dart
// Áp dụng trạng thái hover cho một nút tùy chỉnh
InkWell(
  onTap: () {},
  // Cách tích hợp sẵn của Flutter để sử dụng token hover
  hoverColor: context.faColors.action.state.hover,
  child: Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: context.faColors.action.fill.primary,
      borderRadius: BorderRadius.circular(8),
    ),
    child: Text(
      'Di chuột vào tôi',
      style: TextStyle(color: context.faColors.action.ink.onPrimaryFill),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.state.hover` thường là màu đen bán trong suốt (trong Chế độ Sáng) hoặc trắng (trong Chế độ Tối) để làm đậm hoặc sáng nhẹ màu sắc bên dưới.*