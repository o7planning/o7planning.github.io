## faColors.action.fill.danger

Token `faColors.action.fill.danger` xác định màu nền cho các hành động mang tính phá hủy hoặc có rủi ro cao, chẳng hạn như các nút "Xóa", "Loại bỏ", "Chặn" hoặc các cảnh báo "Lỗi nghiêm trọng".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.danger` đóng vai trò là tín hiệu thị giác mạnh mẽ nhất. Nó sử dụng sắc thái đỏ đậm có độ bão hòa cao, được tối ưu hóa để thu hút sự chú ý ngay lập tức và báo hiệu rằng hành động đi kèm sẽ có hậu quả vĩnh viễn hoặc nghiêm trọng.

> **Nguyên tắc "Báo động đỏ":**
> 
>   Luôn kết hợp nền này với `faColors.action.ink.onDangerFill`.
>   Do trọng số tâm lý của màu đỏ, lớp fill này chỉ nên được sử dụng cho các hành động thực sự mang tính phá hủy. Đối với các cảnh báo không gây mất mát dữ liệu, hãy sử dụng `faColors.action.fill.warning` để thay thế.

### Ví dụ triển khai

```dart
// Tạo một Nút bấm Phá hủy (Nút Xóa vĩnh viễn)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // Lớp fill danger có tính khẩn cấp cao
    color: context.faColors.action.fill.danger,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.delete_forever_rounded,
        // ĐÚNG: Mực tương phản dành cho nền danger
        color: context.faColors.action.ink.onDangerFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Xóa vĩnh viễn',
        style: TextStyle(
          // ĐÚNG: Mực tương phản dành cho nền danger
          color: context.faColors.action.ink.onDangerFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.danger` được ánh xạ tới màu lỗi/nguy hiểm ngữ nghĩa, đảm bảo khả năng hiển thị tối đa trên tất cả các chủ đề.*