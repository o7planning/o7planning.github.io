## faColors.action.fill.highlight

Token `faColors.action.fill.highlight` xác định màu nền có độ hiển thị cao, được sử dụng để thu hút sự chú ý ngay lập tức vào một yếu tố tương tác cụ thể hoặc một mục mới được tạo.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.highlight` tạo ra một điểm nhấn thị giác mạnh hơn so với `faColors.surface.emphasized` nhưng mang tính chuyên biệt hơn là lớp lấp đầy thương hiệu tiêu chuẩn. Nó thường được dùng cho các trạng thái tạm thời, chẳng hạn như làm nổi bật một hàng vừa được cập nhật hoặc một huy hiệu (badge) yêu cầu người dùng kiểm tra.

> **Quản lý sự chú ý:**
> 
>   Hãy sử dụng token này một cách tiết kiệm để tránh gây nhiễu loạn thị giác. Nó hiệu quả nhất cho các nhãn "Mới", các đánh dấu kết quả tìm kiếm đang hoạt động, hoặc các trạng thái tiêu điểm tạm thời. Luôn kết hợp nền này với `faColors.action.ink.onHighlightFill`.

### Ví dụ triển khai

```dart
// Làm nổi bật một huy hiệu trạng thái "Mới"
Container(
  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
  decoration: BoxDecoration(
    // Lớp fill highlight có độ hiển thị cao
    color: context.faColors.action.fill.highlight,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'NEW',
    style: TextStyle(
      // Mực đúng cho nền highlight
      color: context.faColors.action.ink.onHighlightFill,
      fontSize: 10,
      fontWeight: FontWeight.black,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.highlight` thường được ánh xạ tới một màu nhấn rực rỡ (như màu hổ phách hoặc màu thương hiệu phụ sáng) để đảm bảo nó tách biệt hoàn toàn khỏi bảng màu UI tiêu chuẩn.*