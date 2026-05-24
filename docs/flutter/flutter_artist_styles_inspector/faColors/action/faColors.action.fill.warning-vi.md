## faColors.action.fill.warning

Token `faColors.action.fill.warning` xác định màu nền cho các hành động mang tính thận trọng hoặc các trạng thái yêu cầu sự chú ý của người dùng mà không có tính chất phá hủy, chẳng hạn như "Yêu cầu cập nhật", "Số dư thấp" hoặc "Tiếp tục một cách thận trọng".

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.warning` cung cấp một tín hiệu thị giác có độ hiển thị cao, nằm giữa các bề mặt trung tính và các trạng thái nguy hiểm (danger). Nó sử dụng sắc thái vàng hoặc hổ phách có độ bão hòa cao, được tinh chỉnh đặc biệt để nổi bật trên các thành phần UI tiêu chuẩn nhằm ngăn chặn sự bỏ sót vô ý.

> **Quản lý sự chú ý:**
> 
>   Luôn kết hợp nền này với `faColors.action.ink.onWarningFill`.
>   **TRÁNH** sử dụng lớp lấp đầy này cho các mục đích trang trí không khẩn cấp; nó nên được dành riêng cho những mục thực sự cần người dùng "nhìn lại lần hai" để duy trì tính toàn vẹn của hệ thống tín hiệu trong ứng dụng.

### Ví dụ triển khai


```dart
// Tạo một Nút bấm Cảnh báo (Warning Button)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // Lớp fill warning có độ hiển thị cao
    color: context.faColors.action.fill.warning,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.warning_amber_rounded,
        // ĐÚNG: Mực tương phản dành cho nền warning
        color: context.faColors.action.ink.onWarningFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Xác minh danh tính',
        style: TextStyle(
          // ĐÚNG: Mực tương phản dành cho nền warning
          color: context.faColors.action.ink.onWarningFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.warning` thường được ánh xạ tới bảng màu hổ phách hoặc tông cam để đảm bảo khả năng hiển thị trong cả chế độ Sáng và Tối.*