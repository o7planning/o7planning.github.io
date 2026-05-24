## faColors.action.ink.ghost

Token `faColors.action.ink.ghost` xác định màu mực cho văn bản và biểu tượng được sử dụng trong các yếu tố tương tác trong suốt, có độ nhấn thấp.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.ghost` được thiết kế để mang tính trung tính về mặt thị giác. Nó thường được ánh xạ tới một phiên bản mờ hoặc bán trong suốt của mực primary, đảm bảo cung cấp gợi ý tương tác rõ ràng trong khi vẫn để lớp `faColors.surface.xxx` bên dưới làm yếu tố thị giác chủ đạo.

> **Sự tương tác "Tĩnh lặng":**
> 
>   Token này là người bạn đồng hành hoàn hảo cho `faColors.action.fill.ghost`. Hãy sử dụng nó cho các hành động phụ trong các giao diện dày đặc dữ liệu, chẳng hạn như icon "Đóng" trong các chip, dấu phân cách breadcrumb, hoặc các nhãn thanh công cụ bổ trợ nơi mà màu sắc thương hiệu sẽ gây quá nhiều xao nhãng.

### Ví dụ triển khai


```dart
// Tạo một nhãn Ghost tinh tế (Hành động bổ trợ)
Row(
  mainAxisSize: MainAxisSize.min,
  children: [
    Icon(
      Icons.settings_outlined,
      // ĐÚNG: Mực ghost tinh tế cho icon bổ trợ
      color: context.faColors.action.ink.ghost,
      size: 16,
    ),
    const SizedBox(width: 4),
    Text(
      'Advanced Settings',
      style: TextStyle(
        // ĐÚNG: Mực trung tính cho văn bản hành động có độ nhấn thấp
        color: context.faColors.action.ink.ghost,
        fontSize: 12,
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.ink.ghost` thường là bí danh của `faColors.ink.muted` hoặc `faColors.ink.label` để duy trì thẩm mỹ điềm đạm và chuyên nghiệp.*