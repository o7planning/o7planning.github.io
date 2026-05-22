## faColors.action.ink.highlight

Token `faColors.action.ink.highlight` xác định màu sắc có độ hiển thị cao cho văn bản và biểu tượng, được sử dụng để nhấn mạnh nội dung cụ thể mà không cần lớp lấp đầy nền.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.highlight` cung cấp sự nổi bật thị giác chỉ thông qua màu sắc tiền cảnh. Nó được thiết kế để khác biệt rõ rệt với hệ typography chính, giúp nó trở nên lý tưởng để báo hiệu sự khẩn cấp hoặc trạng thái "nổi bật" trên các bề mặt trung tính.

> **Tiêu điểm chiến lược:**
> 
>   Token này hiệu quả nhất khi dùng để làm nổi bật từ khóa tìm kiếm, chỉ báo các mục "Hot" trong danh sách, hoặc cho các biểu tượng cần sự chú ý trong một giao diện dày đặc (như biểu tượng ngôi sao cho mục yêu thích).

### Ví dụ triển khai


```dart
// Làm nổi bật một mục đặc biệt trong danh sách
Row(
  children: [
    Icon(
      Icons.star_rounded,
      // ĐÚNG: Sử dụng mực highlight cho icon "nổi bật"
      color: context.faColors.action.ink.highlight,
      size: 18,
    ),
    const SizedBox(width: 8),
    RichText(
      text: TextSpan(
        text: 'Nổi bật: ',
        style: TextStyle(
          // ĐÚNG: Sử dụng mực highlight cho văn bản nhấn mạnh
          color: context.faColors.action.ink.highlight,
          fontWeight: FontWeight.bold,
        ),
        children: [
          TextSpan(
            text: 'Thành phần Data Grid Nâng cao',
            style: TextStyle(color: context.faColors.ink.primary),
          ),
        ],
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.ink.highlight` thường có giá trị giống với `faColors.action.fill.highlight`, được đổi tên để đảm bảo tính nhất quán về mặt kiến trúc khi dùng cho tiền cảnh.*