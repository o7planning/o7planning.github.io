## faColors.surface.muted

Token `faColors.surface.muted` xác định một cấp độ bề mặt "tĩnh lặng", được thiết kế đặc biệt cho các vùng nền phụ hoặc các yếu tố cần được giảm nhẹ về mặt thị giác.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.muted` mang lại sự hiện diện rõ ràng hơn một chút so với `faColors.surface.subtle` nhưng vẫn ít nổi bật hơn đáng kể so với bề mặt tiêu chuẩn. Nó thường được sử dụng để chỉ thị một trạng thái "nghỉ" hoặc "thứ cấp" trong phân cấp giao diện.

> **Sử dụng chiến lược:**
> 
>   Sử dụng `faColors.surface.muted` cho nền của các thành phần bị vô hiệu hóa (disabled), các vùng chứa trạng thái trống (empty states), hoặc các panel phụ không nên tranh chấp sự chú ý với vùng nội dung chính.

### Ví dụ triển khai


```dart
// Sử dụng bề mặt muted cho một bảng thông tin phụ
Container(
  // Màu bề mặt muted cho các vùng cần giảm sự chú ý
  color: context.faColors.surface.muted,
  decoration: BoxDecoration(
    border: Border.all(
      // Kết hợp với stroke subtle để giữ ranh giới mềm mại
      color: context.faColors.stroke.subtle,
      width: 1,
    ),
  ),
  child: ListTile(
    title: Text(
      'Secondary System Information',
      style: TextStyle(
        // Sử dụng mực muted để phù hợp với thẩm mỹ của bề mặt muted
        color: context.faColors.ink.muted,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.muted` được ánh xạ tới `surfaceContainerLow` để tạo ra sự tương phản nhẹ nhàng nhưng rõ rệt so với lớp nền (ground).*