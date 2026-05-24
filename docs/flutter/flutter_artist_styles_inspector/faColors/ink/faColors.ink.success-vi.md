## faColors.ink.success

Token `faColors.ink.success` xác định màu xanh lá ngữ nghĩa cho văn bản tĩnh và biểu tượng chỉ thị các hành động đã hoàn tất, trạng thái tích cực hoặc xác thực thành công trên các lớp **Surface** lớn.

### Logic kỹ thuật

Trong hệ thống phân cấp **Surface - Ink - Stroke**, `faColors.ink.success` được tinh chỉnh để cung cấp một sự xác nhận thị giác nhẹ nhàng nhưng rõ ràng. Nó được tối ưu hóa để duy trì tỷ lệ tương phản dễ tiếp cận trên `faColors.surface.primary` hoặc `secondary`, cho phép người dùng nhanh chóng xác nhận rằng "Mọi thứ đều đúng" mà không cần đến trọng lượng thị giác của một nút bấm tương tác.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng cho các thông báo thành công (ví dụ: "Payment completed"), chỉ báo trạng thái tích cực và biểu tượng "tích xanh".
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng làm màu nền (Fill).
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng cho các nút bấm hành động chính (hãy dùng `faColors.action.fill.success` hoặc `faColors.action.ink.success`).

### Ví dụ triển khai


```dart
// Sử dụng đúng cho thông báo thành công trên bề mặt
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Icon(
      Icons.check_circle_outline,
      // ĐÚNG: Biểu tượng thành công tĩnh
      color: context.faColors.ink.success,
      size: 48,
    ),
    const SizedBox(height: 16),
    Text(
      'Payment successful!',
      style: TextStyle(
        // ĐÚNG: Văn bản thông báo thành công tĩnh
        color: context.faColors.ink.success,
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 8),
    Text(
      'Your transaction ID: #12345',
      style: TextStyle(
        color: context.faColors.ink.secondary,
        fontSize: 14,
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.success` được ánh xạ tới một màu xanh lá cân bằng, tượng trưng cho sự phát triển và hoàn tất, đảm bảo nó nổi bật so với các thông tin trung tính.*