## faColors.input.stroke.error

Token `faColors.input.stroke.error` xác định màu sắc đường viền bao quanh cho ô nhập liệu khi dữ liệu người dùng nhập vào không vượt qua được các điều kiện kiểm tra (validation failed).

### Logic kỹ thuật

Trong hệ thống bố cục **Fill - Ink - Stroke**, `faColors.input.stroke.error` truyền tải một tín hiệu ngữ nghĩa khẩn cấp. Nó liên kết trực tiếp với mã màu lỗi hệ thống (error) trong FaColorGraph, áp dụng sắc đỏ có độ bão hòa cao lên chu vi của ô nhập liệu. Điều này phá vỡ cấu trúc trung tính mặc định của biểu mẫu một cách có chủ đích, giúp mắt người dùng tập trung ngay lập tức vào ô thông tin sai lệch mà không cần làm rực toàn bộ nền.

> **Quy tắc tương phản ngữ nghĩa:**
> 
>   Luôn kết hợp token viền lỗi này đồng bộ với màu chữ của thông điệp báo lỗi bên dưới (thường là `faColors.ink.danger`). Tránh đổi nền ô nhập liệu thành màu đỏ đặc; chỉ cần một đường viền sắc nét từ token này là đủ để đảm bảo giao diện sạch sẽ, chuyên nghiệp và dễ tiếp cận.

### Ví dụ triển khai


```dart
// Cấu hình ô nhập liệu hiển thị trạng thái lỗi kiểm tra dữ liệu
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Đường viền stroke được dùng khi ô nhập liệu đang có lỗi hoạt động
    errorBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.error,
        width: 1.0,
      ),
    ),
    // Màu chữ hiển thị dòng thông báo lỗi ngay dưới ô nhập liệu
    errorStyle: TextStyle(
      color: context.faColors.ink.danger,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.stroke.error` liên kết trực tiếp với thuộc tính scheme.error của theme, đảm bảo sắc độ đỏ cảnh báo hiển thị chuẩn xác trên cả giao diện Sáng và Tối.*