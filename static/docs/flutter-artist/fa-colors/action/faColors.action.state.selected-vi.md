## faColors.action.state.selected

Token `faColors.action.state.selected` xác định màu lớp phủ (overlay) được áp dụng cho một yếu tố tương tác để chỉ thị trạng thái đang hoạt động hoặc đã được chọn trong một nhóm.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `selected` là một lớp trạng thái duy trì. Khác với `hover` hay `pressed` mang tính tạm thời, lớp phủ này vẫn hiển thị chừng nào yếu tố đó còn ở trạng thái được chọn. Nó thường sử dụng độ mờ mang sắc thái thương hiệu (thường khoảng 8% đến 12%) để làm nổi bật lựa chọn mà không làm lu mờ nội dung bên dưới.

> **Phân cấp lựa chọn:**
> 
>   Đối với các lựa chọn cần độ nhấn mạnh cao (như Tab chính), hãy dùng `faColors.action.fill.selected`.
>   Đối với các lựa chọn có độ nhấn mạnh thấp (như một hàng trong DataGrid hoặc mục trong Navigation Rail), hãy sử dụng **lớp phủ trạng thái** này đè lên một bề mặt trung tính.

### Ví dụ triển khai

```dart
// Áp dụng lớp phủ trạng thái selected cho một List Item
Container(
  decoration: BoxDecoration(
    color: isSelected
      ? context.faColors.action.state.selected
      : Colors.transparent,
  ),
  child: ListTile(
    selected: isSelected,
    title: Text('Bản ghi dữ liệu #102'),
    // Đảm bảo mực (ink) cũng phản ánh trạng thái được chọn
    selectedColor: context.faColors.action.ink.primary,
    onTap: () => setState(() => isSelected = true),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.state.selected` thường là một phiên bản bán trong suốt của màu thương hiệu chính để tạo cảm giác "đang hoạt động" thống nhất trong toàn bộ ứng dụng.*