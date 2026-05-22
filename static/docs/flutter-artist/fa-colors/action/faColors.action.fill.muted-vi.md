## faColors.action.fill.muted

Token `faColors.action.fill.muted` xác định một lớp lấp đầy nền có cường độ thấp cho các yếu tố tương tác cần được giảm nhẹ về mặt thị giác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.muted` cung cấp sự hiện diện tương tác tinh tế nhất. Nó thường sử dụng màu xám trung tính hoặc một sắc thái thương hiệu đã được khử bão hòa mạnh để đảm bảo hòa nhập vào nền nhưng vẫn duy trì vùng bấm (hit area) rõ ràng cho người dùng.

> **Phân cấp thị giác:**
> 
>   Sử dụng lớp fill này cho các hành động có sẵn nhưng không được khuyến khích ưu tiên, chẳng hạn như "Thiết lập lại mặc định" hoặc các cài đặt phụ. Luôn kết hợp nền này với `faColors.action.ink.onMutedFill` để đảm bảo nội dung không bị chìm nghỉm trong tông màu trung tính.

### Ví dụ triển khai

```dart
// Tạo một Nút bấm Muted có độ ưu tiên thấp
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // Lớp fill muted khiêm tốn
    color: context.faColors.action.fill.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Reset to Default',
    style: TextStyle(
      // Mực đúng cho nền muted
      color: context.faColors.action.ink.onMutedFill,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.action.fill.muted` thường được ánh xạ tới `surfaceContainerLow` hoặc một sắc thái trung tính tương đương trong FaActionSurfaceResolvers.*