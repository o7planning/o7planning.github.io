## faColors.action.ink.onHighlightFill

Token `faColors.action.ink.onHighlightFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên nền `faColors.action.fill.highlight`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này cung cấp màu sắc tiền cảnh có độ tương phản cao. Vì `faColors.action.fill.highlight` thường là một màu rực rỡ hoặc tông màu ấm (như màu hổ phách hoặc vàng sáng), loại mực này được tinh chỉnh để duy trì khả năng đọc tối đa, ngăn chặn nội dung bị "nhòe" vào nền sáng.

> **Khóa tương phản:**
> 
>   Token này **BẮT BUỘC** phải được sử dụng đi kèm với `faColors.action.fill.highlight`.
>   Nếu bạn sử dụng `faColors.action.ink.onHighlightFill` cho văn bản đứng độc lập trên một `faColors.surface.xxx`, nó sẽ làm mất đi ý nghĩa ngữ nghĩa và độ rõ nét về mặt thị giác.

### Ví dụ triển khai


```dart
// Triển khai đúng cho một huy hiệu (Badge) nổi bật
Container(
  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy highlight rực rỡ
    color: context.faColors.action.fill.highlight,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'HOT',
    style: TextStyle(
      // ĐÚNG: Mực tương phản cao dành cho nền highlight
      color: context.faColors.action.ink.onHighlightFill,
      fontWeight: FontWeight.black,
      fontSize: 10,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới một màu trung tính tối (như xám đậm hoặc đen) để mang lại độ tương phản tốt nhất trên bề mặt highlight sáng.*