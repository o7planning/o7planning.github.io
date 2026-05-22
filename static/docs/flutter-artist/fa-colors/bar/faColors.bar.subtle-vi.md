## faColors.bar.subtle

Token `faColors.bar.subtle` xác định màu nền có độ tương phản thấp cho các thanh phụ trợ, chẳng hạn như thanh trạng thái (status bars), thanh lọc (filter bars), hoặc các khung chứa điều hướng dưới cùng cần được tách biệt về mặt thị giác với nội dung chính mà không gây khó chịu.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.bar.subtle` đóng vai trò là một lớp chuyển tiếp. Nó được thiết kế để khác biệt một chút so với `faColors.surface.primary` nhằm báo hiệu sự thay đổi chức năng (từ dữ liệu sang công cụ) trong khi vẫn duy trì độ trong suốt và sự "thông thoáng" cao trong bố cục.

> **Ranh giới "Tĩnh lặng":**
> 
>   Sử dụng token này cho các thanh mang tính bổ trợ cho tác vụ hiện tại của người dùng. Nó hoàn hảo cho một thanh lọc ngang nằm ngay trên DataGrid, cung cấp một điểm neo sạch sẽ cho các nút điều khiển mà không tạo ra sự đứt gãy thị giác nặng nề.

### Ví dụ triển khai

```dart
// Tạo một thanh lọc (Filter Bar) tinh tế phía trên danh sách
Container(
  height: 48,
  decoration: BoxDecoration(
    // Nền thanh bar khiêm tốn
    color: context.faColors.bar.subtle,
    border: Border(
      bottom: BorderSide(color: context.faColors.stroke.subtle),
    ),
  ),
  child: Row(
    children: [
      Icon(Icons.filter_list, color: context.faColors.ink.secondary),
      const SizedBox(width: 8),
      Text(
        'Lọc kết quả...',
        style: TextStyle(color: context.faColors.ink.secondary),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường là một sắc thái trung tính nằm giữa `surface.primary` và `surface.secondary` để đảm bảo một dải chuyển màu thị giác mượt mà.*