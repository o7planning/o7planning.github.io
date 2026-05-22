## faColors.stroke.medium

Token `faColors.stroke.medium` đóng vai trò là điểm neo cấu trúc tiêu chuẩn cho giao diện. Nó cung cấp ranh giới rõ ràng, chuyên nghiệp, giúp định nghĩa các component thành các khối chức năng riêng biệt.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.stroke.medium` mang lại sự cân bằng hoàn hảo giữa khả năng hiển thị và tính trung tính. Nó đủ mạnh để xác định "Cái hộp" của một thành phần chính (như Card, Sidebar, hoặc Modal) nhưng đủ tinh tế để sử dụng nhiều lần trên một trang mà không gây cảm giác nặng nề hay nhiễu thị giác.

> **Quy tắc cấu trúc:**
> 
>   Sử dụng `faColors.stroke.medium` khi bạn cần xác định chu vi bên ngoài của một container. Đối với các trang trí nội bộ hoặc phân tách nhẹ nhàng hơn bên trong các container đó, hãy cân nhắc sử dụng `faColors.stroke.subtle` để thay thế.

### Ví dụ triển khai

```dart
// Xác định ranh giới rõ ràng cho một Card hoặc Container
Container(
  decoration: BoxDecoration(
    color: context.faColors.surface.standard,
    border: Border.all(
      // ĐÚNG: Sử dụng stroke medium cho ranh giới của component
      color: context.faColors.stroke.medium,
      width: 1,
    ),
    borderRadius: BorderRadius.circular(12),
  ),
  child: const Padding(
    padding: EdgeInsets.all(16),
    child: Text(
      'Functional Block Content',
      style: TextStyle(color: context.faColors.ink.primary),
    ),
  ),
)
```

*Ghi chú: `faColors.stroke.medium` là lựa chọn hàng đầu để duy trì tính toàn vẹn về mặt cấu trúc của toàn bộ bố cục (layout).*