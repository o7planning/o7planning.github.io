## faColors.ink.primary

Token `faColors.ink.primary` xác định màu mặc định có độ tương phản cao cho văn bản tĩnh và biểu tượng nằm trên các lớp **Surface** (bề mặt) lớn. Đây là xương sống cho khả năng đọc của nội dung cốt lõi trong ứng dụng.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.ink.primary` nghiêm ngặt là một token chỉ dành cho nội dung. Nó được tối ưu hóa để cung cấp mức độ dễ đọc cao nhất trên `faColors.surface.primary` hoặc `secondary`. Khác với các loại mực dành cho hành động, token này không hàm ý tính tương tác; nó hàm ý **thông tin**.

> **Ranh giới sử dụng nghiêm ngặt:**
> 
>   <ul>
>     <li>**NÊN:** Sử dụng cho văn bản nội dung, tiêu đề và các biểu tượng tĩnh trên các bố cục lớn.</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng làm màu nền cho bất kỳ thành phần nào.</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng làm màu chữ/biểu tượng bên trong các thành phần nhỏ có tính tương tác như **Nút (Buttons), Chip, hoặc Badge** (hãy sử dụng `faColors.action.ink.xxx` để thay thế).</li>
>   </ul>

### Ví dụ triển khai

```dart
// Sử dụng đúng cho nội dung tĩnh trên bề mặt chính
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Account Overview',
      style: TextStyle(
        // ĐÚNG: Mực primary cho tiêu đề tĩnh
        color: context.faColors.ink.primary,
        fontSize: 24,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 8),
    Icon(
      Icons.info_outline,
      // ĐÚNG: Biểu tượng tĩnh dùng để chỉ thị thông tin
      color: context.faColors.ink.primary,
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.primary` được tinh chỉnh toán học để tương phản với nền ứng dụng chính, thường xuất hiện dưới dạng gần như đen ở chế độ sáng và gần như trắng ở chế độ tối.*