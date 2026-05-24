## faColors.surface.emphasized

Token `faColors.surface.emphasized` xác định một cấp độ bề mặt nổi bật, được thiết kế đặc biệt để làm nổi bật các khối nội dung cụ thể hoặc các khung chứa tương tác trong bố cục.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.emphasized` cung cấp độ cao thị giác cao hơn so với bề mặt tiêu chuẩn. Nó tạo ra hiệu ứng "nổi" rõ rệt, lý tưởng cho các thành phần yêu cầu sự chú ý ngay lập tức của người dùng hoặc biểu thị một phần logic riêng biệt.

> **Làm nổi bật chiến lược:**
> 
>   Sử dụng `faColors.surface.emphasized` cho các thẻ (cards) có tầm quan trọng cao, các bảng trạng thái đang hoạt động, hoặc các khung chứa các yếu tố kêu gọi hành động (call-to-action) chính.

### Ví dụ triển khai


```dart
// Tạo một khung chứa thẻ được làm nổi bật
Container(
  // Bề mặt emphasized cho các khối cần sự chú ý cao
  color: context.faColors.surface.emphasized,
  decoration: BoxDecoration(
    border: Border.all(
      // Kết hợp với stroke standard để xác định ranh giới rõ ràng
      color: context.faColors.stroke.standard,
      width: 1,
    ),
    borderRadius: BorderRadius.circular(8),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Featured Content Block',
      style: TextStyle(
        // Duy trì độ đọc hoàn hảo với mực primary
        color: context.faColors.ink.primary,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.emphasized` được ánh xạ tới `surfaceContainerHigh` để đảm bảo một bước nhảy độ cao rõ rệt so với các lớp base và standard.*