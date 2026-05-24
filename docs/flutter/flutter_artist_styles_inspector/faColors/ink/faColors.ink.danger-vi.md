## faColors.ink.danger

Token `faColors.ink.danger` xác định màu đỏ ngữ nghĩa cho văn bản tĩnh và biểu tượng chỉ thị lỗi, cảnh báo nghiêm trọng hoặc các trạng thái nguy hiểm trên các lớp **Surface** lớn.

### Logic kỹ thuật

Trong hệ thống phân cấp **Surface - Ink - Stroke**, `faColors.ink.danger` được tối ưu hóa cho khả năng hiển thị cao và nhận diện nhanh chóng. Nó được tinh chỉnh đặc biệt để duy trì tỷ lệ tương phản mạnh trên `faColors.surface.primary` hoặc `secondary`, đảm bảo người dùng có thể nhận ra ngay lập tức "Điều gì đã xảy ra lỗi" mà không cần đến một nút bấm tương tác.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng cho thông báo lỗi xác thực (ví dụ: "Invalid password"), nhãn trạng thái quan trọng và biểu tượng lỗi.
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng làm màu nền (Fill).
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng cho các nút bấm tương tác (hãy dùng `faColors.action.fill.danger` hoặc `faColors.action.ink.danger`).

### Ví dụ triển khai


```dart
// Sử dụng đúng cho thông báo lỗi trên bề mặt
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Credit Card Number',
      style: TextStyle(
        color: context.faColors.ink.label,
        fontSize: 12,
      ),
    ),
    const SizedBox(height: 8),
    // ... Input Field Stroke ở đây ...
    const SizedBox(height: 4),
    Row(
      children: [
        Icon(
          Icons.error_outline,
          // ĐÚNG: Biểu tượng lỗi tĩnh
          color: context.faColors.ink.danger,
          size: 14,
        ),
        const SizedBox(width: 4),
        Text(
          'The card number is incorrect',
          style: TextStyle(
            // ĐÚNG: Văn bản thông báo lỗi tĩnh
            color: context.faColors.ink.danger,
            fontSize: 12,
          ),
        ),
      ],
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.danger` được ánh xạ tới một màu đỏ có độ bão hòa cao nhằm thu hút sự chú ý nhưng vẫn đủ dễ chịu để đọc các cụm từ ngắn.*