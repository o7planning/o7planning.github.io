## faColors.action.fill.info

Token `faColors.action.fill.info` xác định màu nền cho các hành động hoặc trạng thái mang tính thông tin, cung cấp sự hướng dẫn trung lập, chẳng hạn như các nút "Chi tiết", "Tìm hiểu thêm" hoặc các biểu ngữ "Hướng dẫn".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.info` cung cấp một tín hiệu thị giác cho các nội dung hữu ích nhưng không khẩn cấp. Nó thường sử dụng một sắc thái xanh dương cụ thể, được chọn để phân biệt với màu thương hiệu chính nhằm tránh nhầm lẫn giữa "Hành động chính" và "Ngữ cảnh thông tin".

> **Tính rõ ràng của thông tin:**
> 
>   Luôn kết hợp nền này với `faColors.action.ink.onInfoFill`.
>   Lớp lấp đầy này nên được dành riêng cho các thành phần giúp người dùng hiểu trạng thái hệ thống mà không hàm ý thành công, cảnh báo hay nguy hiểm.

### Ví dụ triển khai

```dart
// Tạo một Nút bấm Thông tin (Info Button)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // Lớp fill màu xanh dương điềm tĩnh
    color: context.faColors.action.fill.info,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.info_outline_rounded,
        // ĐÚNG: Mực tương phản dành cho nền info
        color: context.faColors.action.ink.onInfoFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Xem hướng dẫn',
        style: TextStyle(
          // ĐÚNG: Mực tương phản dành cho nền info
          color: context.faColors.action.ink.onInfoFill,
          fontWeight: FontWeight.w600,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.info` thường được ánh xạ tới bảng màu xanh lơ hoặc xanh da trời để đảm bảo tông màu trung tính và chuyên nghiệp.*