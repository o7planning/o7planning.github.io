## faColors.ink.secondary

Token `faColors.ink.secondary` xác định màu có độ tương phản trung bình cho văn bản bổ trợ và các biểu tượng không quan trọng trên các lớp **Surface** lớn. Nó giúp tạo ra một hệ thống phân cấp thông tin rõ ràng bằng cách giảm sự nhấn mạnh vào các chi tiết phụ.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.ink.secondary` cung cấp đủ độ tương phản để dễ đọc nhưng lại "lùi bước" về mặt thị giác so với `faColors.ink.primary`. Điều này ngăn chặn sự mệt mỏi thị giác trong các bố cục giàu dữ liệu bằng cách dẫn dắt sự chú ý của người dùng vào thông tin chính trước tiên.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng cho tiêu đề phụ, mô tả, dấu thời gian và dữ liệu phụ trên các bề mặt chính.
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng cho văn bản nội dung chính hoặc các cảnh báo quan trọng.
> 
>     * **KHÔNG ĐƯỢC:** Sử dụng bên trong các thành phần tương tác nhỏ như **Nút (Buttons) hoặc Badge** (hãy giữ các loại mực hành động chuyên biệt cho chúng).

### Ví dụ triển khai


```dart
// Sử dụng đúng cho văn bản mô tả phụ
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Account Balance',
      style: TextStyle(
        color: context.faColors.ink.primary, // Thông tin chính
        fontSize: 18,
      ),
    ),
    const SizedBox(height: 4),
    Text(
      'Last updated 2 minutes ago',
      style: TextStyle(
        // ĐÚNG: Mực secondary cho dữ liệu phụ trợ
        color: context.faColors.ink.secondary,
        fontSize: 12,
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.secondary` thường là một phiên bản ít bão hòa hơn hoặc nhạt hơn của mực primary để tạo ra một bước hạ bậc thị giác tự nhiên.*