## faColors.selection.rowNormal

Token `faColors.selection.rowNormal` xác định màu nền mặc định cho một hàng (trong Table, ListView, hoặc bất kỳ tập hợp nào) khi ở trạng thái nghỉ hoặc trung tính.

### Triết lý thiết kế

Trong hệ sinh thái FlutterArtist, `faColors.selection.rowNormal` đóng vai trò là **"Mặt đất" (Ground)**. Đây là một bề mặt ổn định, trung tính được thiết kế để mang lại khả năng đọc tối đa cho nội dung mà không gây xao nhãng cho người dùng.

> **Nguyên lý "Tam sên":**
> 
>   Để có vẻ ngoài chuyên nghiệp, hãy luôn kết hợp `faColors.selection.rowNormal` (Bề mặt) với `faColors.selection.inkNormal` (Mực/Nội dung) và `faColors.stroke.subtle` (Đường kẻ chỉ).

### Ví dụ triển khai

```dart
// Sử dụng rowNormal cho một item danh sách
Container(
  // Màu bề mặt ở trạng thái nghỉ
  color: context.faColors.selection.rowNormal,
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // Sử dụng stroke subtle để làm đường chia hàng
        color: context.faColors.stroke.subtle,
        width: 1,
      ),
    ),
  ),
  child: ListTile(
    title: Text(
      'Kiến trúc sạch với FlutterArtist',
      style: TextStyle(
        // Sử dụng mực tương ứng cho trạng thái normal
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ),
)
```

*Ghi chú: `rowNormal` thường được ánh xạ từ `faColors.surface.ground` để đảm bảo sự hòa hợp tuyệt đối với nền tảng ứng dụng.*