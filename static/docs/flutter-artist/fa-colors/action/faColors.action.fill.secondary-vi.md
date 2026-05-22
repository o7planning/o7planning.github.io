## faColors.action.fill.secondary

Token `faColors.action.fill.secondary` xác định màu nền cho các hành động phụ, chẳng hạn như các nút "Hủy", "Quay lại" hoặc "Thiết lập lại".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.secondary` cung cấp một mức độ nhấn mạnh tương tác trung bình. Nó thường sử dụng một phiên bản nhẹ nhàng của màu thương hiệu hoặc một sắc thái trung tính để đảm bảo có thể phân biệt được với lớp nền (ground) mà không tranh chấp trọng số thị giác với hành động chính.

> **Quy tắc tương phản:**
> 
>   Để tích hợp chuyên nghiệp, luôn kết hợp nền này với `faColors.action.ink.onSecondaryFill`.
>   **TUYỆT ĐỐI KHÔNG** sử dụng `faColors.action.ink.secondary` đè lên nền này, vì token đó dành cho các phần tử đứng độc lập và sẽ không đủ độ tương phản tại đây.

### Ví dụ triển khai


```dart
// Tạo một Nút bấm Phụ (Secondary Button)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // Lớp fill secondary tinh tế cho các hành động bổ trợ
    color: context.faColors.action.fill.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Cancel Process',
    style: TextStyle(
      // ĐÚNG: Mực tương phản dành cho nền secondary
      color: context.faColors.action.ink.onSecondaryFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Ghi chú: `faColors.action.fill.secondary` thường được ánh xạ tới một biến thể có độ bão hòa thấp của bảng màu thương hiệu trong FaActionSurfaceResolvers.*