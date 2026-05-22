## faColors.action.state.pressed

Token `faColors.action.state.pressed` xác định màu lớp phủ (overlay) được áp dụng cho một yếu tố tương tác ngay tại thời điểm nó được nhấp chuột hoặc chạm vào.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `pressed` là lớp trạng thái đậm nhất. Nó thường sử dụng độ mờ cao hơn so với `hover` (thường từ 10% đến 16%) để tạo ra cảm giác xúc giác rõ rệt. "Trọng lượng" thị giác này đảm bảo người dùng cảm nhận được phản hồi tức thì từ UI, điều này cực kỳ quan trọng để giảm thiểu cảm giác trễ (latency) trong các ứng dụng doanh nghiệp.

> **Phản hồi động:**
> 
>   Giống như trạng thái hover, đây là một **lớp phủ (overlay)**. Nó được thiết kế để làm đậm hoặc nhuộm màu lớp `fill.primary` hoặc `fill.danger` bên dưới, nghĩa là ông giáo không cần một màu "Đỏ khi bấm" hay "Xanh khi bấm" riêng biệt – hệ thống sẽ tự xử lý động.

### Ví dụ triển khai

```dart
// Triển khai phản hồi xúc giác trên một Nút bấm
InkWell(
  onTap: () => print('Hành động được thực thi'),
  // Các thuộc tính tích hợp của Flutter cho trạng thái nhấn
  splashColor: context.faColors.action.state.pressed,
  highlightColor: context.faColors.action.state.pressed,
  child: Container(
    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
    decoration: BoxDecoration(
      color: context.faColors.action.fill.primary,
      borderRadius: BorderRadius.circular(8),
    ),
    child: Text(
      'GỬI ĐI',
      style: TextStyle(color: context.faColors.action.ink.onPrimaryFill),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.state.pressed` thường là một lớp phủ trung tính tối giúp tạo hiệu ứng "nhấn xuống" bằng cách giảm độ sáng của màu nền cơ sở.*