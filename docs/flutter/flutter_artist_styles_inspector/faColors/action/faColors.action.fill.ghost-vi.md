## faColors.action.fill.ghost

Token `faColors.action.fill.ghost` xác định một lớp lấp đầy nền trong suốt, chủ yếu được sử dụng cho các yếu tố tương tác cần giữ trạng thái vô hình khi nghỉ nhưng vẫn cung cấp phản hồi khi có tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.ghost` về cơ bản là một lớp có độ mờ bằng không hoặc độ trong suốt cực cao. Nó được thiết kế cho các hành động có độ nhấn thấp, nơi bề mặt nền chỉ nên xuất hiện trong trạng thái `Hover` hoặc `Pressed`, nhằm bảo vệ sự thuần khiết thị giác của lớp `faColors.surface.xxx` bên dưới.

> **Tích hợp thiết kế:**
> 
>   Lớp lấp đầy Ghost hoàn hảo cho các nút trên thanh công cụ, các nút điều khiển cửa sổ hoặc các mục điều hướng phụ. Luôn kết hợp lớp fill này với `faColors.action.ink.ghost` để duy trì thẩm mỹ "trong suốt" nhất quán trong suốt chu kỳ tương tác.

### Ví dụ triển khai


```dart
// Tạo một Nút bấm Ghost tinh tế (Icon Button)
Container(
  padding: const EdgeInsets.all(8),
  decoration: BoxDecoration(
    // Nền vô hình ở trạng thái nghỉ
    color: context.faColors.action.fill.ghost,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Icon(
    Icons.more_vert_rounded,
    // Sử dụng mực ghost cho biểu tượng tương tác độc lập
    color: context.faColors.action.ink.ghost,
    size: 20,
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.ghost` thường được ánh xạ tới `Colors.transparent` hoặc một sắc thái cực nhẹ của mực primary.*