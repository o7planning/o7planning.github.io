## faColors.surface.subtle

Token `faColors.surface.subtle` đại diện cho cấp độ bề mặt nhẹ nhất trong hệ thống phân cấp, tạo ra một sự phân biệt tinh tế so với lớp nền (ground).

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.surface.subtle` được ánh xạ tới màu container có độ cao thị giác thấp nhất. Nó được thiết kế để tạo ra các vùng hoặc nhóm logic trên màn hình một cách nhẹ nhàng mà không tạo ra sự đứt gãy thị giác mạnh.

> **Ngữ cảnh sử dụng:**
> 
>   Lý tưởng cho việc nhóm nội dung nhẹ, chẳng hạn như nền cho Sort Panel, thanh công cụ phụ hoặc các lớp chứa danh sách lồng nhau khi bạn không muốn sử dụng hiệu ứng đổ bóng mạnh.

### Ví dụ triển khai

```dart
// Tạo một nền nhẹ nhàng cho Sort Panel
Container(
  // Cấp độ bề mặt nhẹ nhất
  color: context.faColors.surface.subtle,
  decoration: BoxDecoration(
    border: Border.all(
      // Kết hợp với stroke subtle để tạo ranh giới tinh tế
      color: context.faColors.stroke.subtle,
      width: 1,
    ),
  ),
  child: const Padding(
    padding: EdgeInsets.all(8.0),
    child: Text('Subtle Sort Panel Content'),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.surface.subtle` được ánh xạ tới `surfaceContainerLowest` để đảm bảo nó luôn là lớp gần với ground nhất.*