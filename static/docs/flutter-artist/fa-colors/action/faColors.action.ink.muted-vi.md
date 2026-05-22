## faColors.action.ink.muted

Token `faColors.action.ink.muted` xác định màu sắc có độ nhấn thấp cho văn bản và biểu tượng được sử dụng trong các yếu tố tương tác không yêu cầu lớp lấp đầy nền.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.muted` cung cấp một gợi ý tương tác tinh tế. Nó được thiết kế để "tĩnh lặng" hơn so với hệ typography chính, giúp nó trở nên lý tưởng cho các hành động phụ chỉ nên được phát hiện khi cần thiết, thay vì đòi hỏi sự chú ý ngay lập tức.

> **Gợi ý tinh tế:**
> 
>   Token này là lựa chọn hoàn hảo cho các TextButton phụ, các liên kết ở chân trang (footer), hoặc các biểu tượng "Tìm hiểu thêm". Nó đảm bảo giao diện luôn sạch sẽ và không bị rối rắm trong khi vẫn cung cấp các lối đi rõ ràng cho các tương tác nâng cao.

### Ví dụ triển khai

```dart
// Tạo một Text Button có độ nhấn thấp
Row(
  mainAxisSize: MainAxisSize.min,
  children: [
    Icon(
      Icons.help_outline_rounded,
      // ĐÚNG: Mực muted tinh tế cho biểu tượng thông tin phụ
      color: context.faColors.action.ink.muted,
      size: 16,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Xem tài liệu hướng dẫn',
        style: TextStyle(
          // ĐÚNG: Mực muted cho văn bản tương tác thứ cấp
          color: context.faColors.action.ink.muted,
          fontSize: 13,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.ink.muted` thường có giá trị giống với `faColors.ink.muted`, đảm bảo văn bản tương tác phụ vẫn giữ nguyên trọng số thị giác như văn bản phụ không tương tác.*