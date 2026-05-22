## faColors.selection.rowCurrent

Token `faColors.selection.rowCurrent` xác định bề mặt nền cho hàng hiện đang giữ tiêu điểm (Focus) hoặc đang được điều hướng trong danh sách hoặc bảng dữ liệu.

### Logic kỹ thuật

Khác với trạng thái lựa chọn vĩnh viễn (Selection), `rowCurrent` đại diện cho một trạng thái điều hướng tạm thời. Trong hệ thống **Surface - Ink - Stroke**, nó sử dụng một lớp lấp đầy cấp độ phụ để tạo sự phân biệt vừa đủ với `rowNormal` mà không tranh chấp trọng số thị giác với `rowSelected`.

> **Tích hợp thiết kế:**
> 
>   Để duy trì một phân cấp sạch sẽ, bạn nên kết hợp `rowCurrent` với `faColors.stroke.standard` để xác định ranh giới một cách tinh tế.

### Ví dụ triển khai


```dart
// Làm nổi bật hàng đang giữ tiêu điểm trong danh sách
Container(
  // Lớp fill tạm thời cho trạng thái focus hiện tại
  color: context.faColors.selection.rowCurrent,
  decoration: BoxDecoration(
    border: Border.all(
      // Sử dụng stroke standard để chỉ báo độ sâu tiêu điểm
      color: context.faColors.stroke.standard,
      width: 1,
    ),
  ),
  child: ListTile(
    title: Text(
      'Current Focused Item',
      style: TextStyle(
        // Sử dụng mực primary để duy trì khả năng đọc cao
        color: context.faColors.selection.inkCurrent,
      ),
    ),
  ),
)
```

*Ghi chú: `faColors.selection.rowCurrent` thường được ánh xạ tới `faColors.surface.emphasized` trong FaColorGraph để tạo cảm giác hàng được "nâng nhẹ" lên so với mặt đất.*