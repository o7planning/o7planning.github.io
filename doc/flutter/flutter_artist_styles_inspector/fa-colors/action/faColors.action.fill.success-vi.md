## faColors.action.fill.success

Token `faColors.action.fill.success` xác định màu nền cho các hành động tích cực hoặc trạng thái đã hoàn tất, chẳng hạn như các nút "Thành công", "Xong" hoặc "Phê duyệt".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.success` cung cấp một tín hiệu thị giác mạnh mẽ về sự hoàn thành và tính chính xác. Nó sử dụng một sắc thái xanh lá cụ thể từ bảng màu theme, được tối ưu hóa để phân biệt với màu thương hiệu chính trong khi vẫn duy trì thẩm mỹ "an toàn" và khuyến khích.

> **Triển khai tính tích cực:**
> 
>   Luôn kết hợp nền này với `faColors.action.ink.onSuccessFill`.
>   **TUYỆT ĐỐI KHÔNG** sử dụng `faColors.action.ink.success` đè lên nền này, vì token đó dành cho nội dung đứng độc lập và sẽ không đạt yêu cầu về độ tương phản tại đây.

### Ví dụ triển khai


```dart
// Tạo một Nút bấm Thành công (Success Button)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // Lớp fill success tích cực
    color: context.faColors.action.fill.success,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_circle_outline_rounded,
        // ĐÚNG: Mực tương phản dành cho nền success
        color: context.faColors.action.ink.onSuccessFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Giao dịch hoàn tất',
        style: TextStyle(
          // ĐÚNG: Mực tương phản dành cho nền success
          color: context.faColors.action.ink.onSuccessFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.success` được ánh xạ tới màu success ngữ nghĩa trong FaActionSurfaceResolvers.*