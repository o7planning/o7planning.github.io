## faColors.ink.muted

Token `faColors.ink.muted` xác định màu có độ tương phản thấp nhất cho các nội dung không thiết yếu trên các lớp **Surface** lớn. Nó chủ yếu được sử dụng cho văn bản gợi ý (placeholder), các trạng thái vô hiệu hóa của yếu tố tĩnh và các chỉ dẫn rất phụ.

### Logic kỹ thuật

Trong hệ thống phân cấp **Surface - Ink - Stroke**, `faColors.ink.muted` được thiết kế để nằm ở ngưỡng tối thiểu của khả năng đọc. Mục đích của nó là báo hiệu rằng thông tin này là "phụ của phụ" hoặc hiện đang ở trạng thái "không hoạt động". Điều này đảm bảo sự tập trung nhận thức của người dùng hoàn toàn dành cho các thông tin chính (primary) và phụ (secondary).

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng cho văn bản gợi ý trong ô nhập liệu (ví dụ: "Type to search..."), các nhãn tĩnh bị vô hiệu hóa và văn bản trợ giúp không quan trọng.
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng cho bất kỳ nội dung nào yêu cầu đảm bảo khả năng đọc cho tất cả người dùng (cần lưu ý tiêu chuẩn truy cập WCAG).
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng bên trong các thành phần tương tác như **Nút (Buttons) hoặc Chip**.

### Ví dụ triển khai


```dart
// Sử dụng đúng cho văn bản gợi ý và văn bản tĩnh bị vô hiệu hóa
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Search query',
      style: TextStyle(
        // ĐÚNG: Mực label cho cấu trúc trường dữ liệu
        color: context.faColors.ink.label,
        fontSize: 12,
      ),
    ),
    const SizedBox(height: 8),
    Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: context.faColors.surface.secondary,
        borderRadius: BorderRadius.circular(4),
      ),
      child: Text(
        'Type to search...',
        style: TextStyle(
          // ĐÚNG: Mực muted cho văn bản gợi ý
          color: context.faColors.ink.muted,
          fontSize: 14,
          fontStyle: FontStyle.italic,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.muted` thường là một màu xám rất nhẹ với độ mờ thấp, đảm bảo nó "hòa tan" một phần vào nền bề mặt.*