## faColors.ink.warning

Token `faColors.ink.warning` xác định màu vàng hổ phách/cam ngữ nghĩa cho văn bản tĩnh và biểu tượng truyền đạt sự thận trọng, rủi ro tiềm ẩn hoặc các cảnh báo không gây chặn (non-blocking) trên các lớp **Surface** lớn.

### Logic kỹ thuật

Trong hệ thống phân cấp **Surface - Ink - Stroke**, `faColors.ink.warning` được thiết kế để nổi bật thông qua tông màu ấm. Nó được tinh chỉnh đặc biệt để duy trì độ tương phản đủ trên `faColors.surface.primary` hoặc `secondary`, đảm bảo các ghi chú "Hãy chú ý" hiển thị rõ ràng mà không gây ra sự hoảng loạn tức thì như tông màu đỏ của lỗi.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng cho các thông báo thận trọng (ví dụ: "Session expires soon"), nhãn trạng thái chờ xử lý và biểu tượng "cảnh báo".
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng làm màu nền (Fill).
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng cho các nút bấm hành động chính (hãy dùng `faColors.action.fill.warning` hoặc `faColors.action.ink.warning`).

### Ví dụ triển khai


```dart
// Sử dụng đúng cho thông báo cảnh báo trên bề mặt
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    children: [
      Icon(
        Icons.warning_amber_rounded,
        // ĐÚNG: Biểu tượng cảnh báo tĩnh
        color: context.faColors.ink.warning,
      ),
      const SizedBox(width: 12),
      Expanded(
        child: Text(
          'Your password will expire in 3 days. Please update it.',
          style: TextStyle(
            // ĐÚNG: Văn bản cảnh báo tĩnh
            color: context.faColors.ink.warning,
            fontSize: 14,
          ),
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.warning` thường là màu vàng đậm hoặc cam, được tối ưu hóa để tránh vấn đề "tương phản thấp" thường gặp của các tông màu vàng trên nền sáng.*