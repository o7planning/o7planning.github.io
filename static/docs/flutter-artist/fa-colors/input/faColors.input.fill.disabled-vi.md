## faColors.input.fill.disabled

Token `faColors.input.fill.disabled` xác định màu sắc bề mặt nền cho các ô nhập liệu khi chúng được cấu hình ở trạng thái khóa hoặc không thể tương tác.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.input.fill.disabled` phục vụ mục đích giảm bớt trọng số thị giác của ô nhập liệu. Nó sử dụng một sắc độ trung tính dịu nhẹ được trích xuất từ lớp nền hệ thống để báo hiệu một cách tự nhiên rằng thành phần này đã bị khóa, nhưng vẫn bảo toàn độ tương phản vừa đủ cho lớp chữ bên trong.

> **Quy tắc tương phản khi khóa:**
> 
>   Luôn kết hợp lớp nền khóa này với các định danh chữ (typography) ở trạng thái disabled tương ứng. Khi phần nền giảm độ nổi bật, hãy chắc chắn rằng dữ liệu đã nhập trước đó vẫn có thể đọc được để người dùng kiểm tra thông tin cũ mà không bị nhầm lẫn.

### Ví dụ triển khai

```dart
// Tạo một ô nhập liệu bị khóa không cho phép chỉnh sửa trong biểu mẫu
TextField(
  enabled: false, // Khóa tương tác của ô nhập liệu
  decoration: InputDecoration(
    filled: true,
    // Áp dụng mã màu nền dành riêng cho trạng thái khóa
    fillColor: context.faColors.input.fill.disabled,
    disabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        // Đi kèm với đường viền khóa đồng bộ cấu trúc
        color: context.faColors.input.stroke.disabled,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.fill.disabled` được tính toán động dựa trên việc hạ tỷ lệ alpha trên nền onSurface, giúp thích ứng mượt mà khi đổi giữa giao diện Sáng và Tối.*