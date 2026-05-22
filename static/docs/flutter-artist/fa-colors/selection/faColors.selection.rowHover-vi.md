## faColors.selection.rowHover

Token `faColors.selection.rowHover` xác định màu bề mặt nền tạm thời khi con trỏ chuột lướt qua một hàng hoặc một mục trong danh sách.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `rowHover` được thiết kế như một lớp tương tác tinh tế. Nó sử dụng một lớp phủ alpha thấp (thường từ 6% đến 12% độ mờ) để cung cấp phản hồi thị giác ngay lập tức mà không làm che lấp lớp nền `rowNormal` hoặc làm mờ mực nội dung (ink).

> **Phản hồi tương tác:**
> 
>   Vì hover là một trạng thái tạm thời, nó được sử dụng tốt nhất để "nhấc nhẹ" hàng lên khỏi mặt đất. Bạn có thể kết hợp nó với `faColors.stroke.subtle` để duy trì tính toàn vẹn cấu trúc trong quá trình tương tác.

### Ví dụ triển khai


```dart
// Áp dụng hiệu ứng hover cho một item trong danh sách
// Lưu ý: Thường được xử lý qua InkWell hoặc MouseRegion trong Flutter
Container(
  // Lớp phủ tương tác cho trạng thái hover
  color: isHovered
      ? context.faColors.selection.rowHover
      : context.faColors.selection.rowNormal,
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // Giữ nét vẽ subtle để tránh gây nhiễu thị giác
        color: context.faColors.stroke.subtle,
        width: 1,
      ),
    ),
  ),
  child: ListTile(
    title: Text(
      'Hover Interactive Item',
      style: TextStyle(
        // Mực vẫn giữ ở mức primary để tập trung vào nội dung
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ),
)
```

*Ghi chú: `faColors.selection.rowHover` được tính toán động trong FaColorGraph thông qua helper `_hover` để đảm bảo sự nhất quán giữa giao diện sáng và tối.*