## faColors.bar.standard

Token `faColors.bar.standard` xác định màu nền mặc định cho các thanh công cụ chính, thanh ứng dụng (AppBar) và các đầu mục điều hướng chính.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.bar.standard` cung cấp một điểm neo cấu trúc rõ ràng. Nó được thiết kế với độ tương phản đủ để phân biệt các phần đầu (headers) chức năng với các lớp `faColors.surface`, tạo ra một hệ thống phân cấp chuyên nghiệp và ngăn nắp cho các bố cục chuẩn doanh nghiệp.

> **Điểm neo chức năng:**
> 
>   Đây là token chủ đạo cho AppBar chính hoặc bất kỳ thành phần điều hướng cố định nào. Nó cung cấp một "ngôi nhà" ổn định cho các hành động chính, tiêu đề và các yếu tố thương hiệu. Hãy kết hợp nó với `faColors.ink.primary` hoặc `faColors.action.xxx` để đạt được độ rõ nét tối ưu.

### Ví dụ triển khai


```dart
// Triển khai thanh ứng dụng (AppBar) tiêu chuẩn
Container(
  height: 64,
  padding: const EdgeInsets.symmetric(horizontal: 16),
  decoration: BoxDecoration(
    // Nền thanh bar tiêu chuẩn đáng tin cậy
    color: context.faColors.bar.standard,
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(0.05),
        blurRadius: 4,
        offset: const Offset(0, 2),
      ),
    ],
  ),
  child: Row(
    children: [
      Icon(Icons.menu, color: context.faColors.ink.primary),
      const SizedBox(width: 16),
      Text(
        'Quản lý kho hàng',
        style: TextStyle(
          color: context.faColors.ink.primary,
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
      ),
      const Spacer(),
      CircleAvatar(backgroundColor: context.faColors.surface.secondary),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.bar.standard` thường được ánh xạ tới một màu trung tính đặc hoặc một bề mặt có sắc thái thương hiệu rất nhẹ nhằm đảm bảo sự thoải mái về thị giác lâu dài cho người dùng.*