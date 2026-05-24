## faColors.surface.standard

Token `faColors.surface.standard` xác định cấp độ bề mặt mặc định cho các vùng nội dung chính. Đây là bề mặt được sử dụng thường xuyên nhất cho các thành phần giao diện tiêu chuẩn.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.standard` cung cấp một độ cao cơ sở để phân biệt nội dung với nền tảng tuyệt đối. Nó được cân bằng về mặt toán học để đảm bảo tất cả các token mực (ink) chủ đạo duy trì độ tương phản tối ưu cho việc đọc và tương tác lâu dài.

> **Vai trò chủ đạo:**
> 
>   Sử dụng `faColors.surface.standard` cho các khung chứa nội dung chính, nền danh sách và các vùng biểu mẫu tiêu chuẩn. Nó được thiết kế để trở thành "lựa chọn mặc định đáng tin cậy" cho bố cục ứng dụng của bạn.

### Ví dụ triển khai


```dart
// Tạo một khung chứa nội dung tiêu chuẩn
Container(
  // Bề mặt mặc định cho nội dung chính
  color: context.faColors.surface.standard,
  decoration: BoxDecoration(
    border: Border.all(
      // Kết hợp với stroke tiêu chuẩn để tạo cấu trúc rõ ràng
      color: context.faColors.stroke.standard,
      width: 1,
    ),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Standard Content Area',
      style: TextStyle(
        // Hoàn toàn tương thích với mực primary
        color: context.faColors.ink.primary,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.standard` được ánh xạ tới `surfaceContainer` để đại diện cho một độ cao trung bình và ổn định.*