## faColors.selection.inkSelected

Token `faColors.selection.inkSelected` xác định màu sắc cho văn bản và biểu tượng khi lớp chứa (container) của chúng ở trạng thái được chọn (`rowSelected`).

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `inkSelected` là loại mực tương phản chức năng. Trong khi `inkNormal` tập trung vào khả năng đọc trên nền trung tính, `inkSelected` được tinh chỉnh để duy trì tỷ lệ tương phản cao trên bề mặt mang màu sắc thương hiệu của một hàng đang được chọn.

> **Tương phản động:**
> 
>   Loại mực này tự động chuyển đổi giữa các giá trị sáng và tối tùy thuộc vào độ sáng của lớp lấp đầy `rowSelected`, đảm bảo nội dung luôn dễ đọc trong mọi bộ giao diện (theme).

### Ví dụ triển khai

```dart
// Vẽ nội dung trên một bề mặt đang được chọn
Row(
  children: [
    Icon(
      Icons.check_circle_rounded,
      // Sử dụng mực selected cho biểu tượng
      color: context.faColors.selection.inkSelected,
    ),
    const SizedBox(width: 8),
    Text(
      'Confirmed Selection',
      style: TextStyle(
        // Sử dụng mực selected cho văn bản
        color: context.faColors.selection.inkSelected,
        fontWeight: FontWeight.bold,
      ),
    ),
  ],
)
```

*Ghi chú: `faColors.selection.inkSelected` thường là bí danh của `faColors.ink.primary` (trong các vùng chọn dựa trên alpha) hoặc `textOnPrimary` (trong các vùng chọn màu đặc) bên trong FaColorGraph.*