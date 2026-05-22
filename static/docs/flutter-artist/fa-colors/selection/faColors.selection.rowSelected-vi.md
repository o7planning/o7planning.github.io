## faColors.selection.rowSelected

Token `faColors.selection.rowSelected` xác định nền bề mặt cho các thành phần (hàng, thẻ hoặc ô) đã được người dùng chọn một cách rõ ràng để xử lý hoặc đánh dấu là đang hoạt động.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `rowSelected` mang trọng số thị giác cao hơn so với `rowCurrent` hoặc `rowHover`. Trong khi "Current" mang tính tạm thời (đi theo con trỏ/focus), thì "Selected" mang tính bền vững. Nó thường sử dụng một lớp màu phớt (tint) dựa trên màu chính của thương hiệu để báo hiệu trạng thái "Đã chọn" hoặc "Hoạt động" một cách rõ ràng.

> **Phân cấp chọn lựa:**
> 
>   Khi một hàng vừa ở trạng thái **Selected** (Đã chọn) vừa ở trạng thái **Current** (Tiêu điểm hiện tại), style của `rowSelected` thường được ưu tiên cho phần nền, trong khi `stroke` hoặc một vạch chỉ báo riêng biệt có thể được dùng để hiển thị vị trí tiêu điểm.

### Ví dụ triển khai

```dart
// Áp dụng trạng thái chọn bền vững cho một hàng dữ liệu
Container(
  // Nền bền vững cho các mục đã chọn
  color: isSelected
      ? context.faColors.selection.rowSelected
      : context.faColors.selection.rowNormal,
  child: ListTile(
    leading: Icon(
      isSelected ? Icons.check_box : Icons.check_box_outline_blank,
      // ĐÚNG: Sử dụng mực chuyên dụng cho trạng thái chọn
      color: context.faColors.selection.inkSelected,
    ),
    title: Text(
      'Selected Data Entry',
      style: TextStyle(
        // ĐÚNG: Mực có độ tương phản cao cho nền đã chọn
        color: context.faColors.selection.inkSelected,
        fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.selection.rowSelected` thường được ánh xạ tới một màu phớt nhạt của màu chính (giống như `action.fill.reversePrimary`) để đảm bảo văn bản vẫn dễ đọc khi sử dụng `inkSelected`.*