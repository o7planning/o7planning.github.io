## faColors.action.ink.onSelectedFill

Token `faColors.action.ink.onSelectedFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên lớp nền `faColors.action.fill.selected`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là một lớp mực tương phản cao. Nó được tối ưu hóa về mặt toán học để duy trì khả năng đọc tối đa trên lớp lấp đầy trạng thái được chọn, đảm bảo các lựa chọn đang hoạt động (như Chips hoặc Segments được chọn) luôn dễ đọc bất kể cường độ màu sắc thương hiệu chính là bao nhiêu.

> **Rủi ro "Vô hình":**
> 
>   Token này **BẮT BUỘC** phải đi đôi với `faColors.action.fill.selected`.
>   Việc sử dụng `faColors.action.ink.onSelectedFill` trên một bề mặt trung tính hoặc không có nền sẽ khiến nội dung trở nên **vô hình**, vì nó được thiết kế để tương phản với màu sắc rực rỡ chứ không phải nền trung tính.

### Ví dụ triển khai


```dart
// Triển khai đúng cho một Segment/Chip đang được chọn
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy selection đang hoạt động
    color: context.faColors.action.fill.selected,
    borderRadius: BorderRadius.circular(20),
  ),
  child: Text(
    'Active Selection',
    style: TextStyle(
      // ĐÚNG: Mực tương phản chuyên dụng dành cho nền selected
      color: context.faColors.action.ink.onSelectedFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới một màu trung tính có độ tương phản cao (thường là trắng hoặc một sắc thái thương hiệu cực tối) để thỏa mãn các tiêu chuẩn về khả năng truy cập WCAG trên nền đã chọn.*