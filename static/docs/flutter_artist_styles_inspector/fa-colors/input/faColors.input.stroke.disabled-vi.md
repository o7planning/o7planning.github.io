## faColors.input.stroke.disabled

Token `faColors.input.stroke.disabled` xác định màu sắc của đường viền bao quanh ô nhập liệu khi chúng ở trạng thái bị khóa hoặc không thể tương tác.

### Logic kỹ thuật

Trong mô hình bố cục **Fill - Ink - Stroke**, `faColors.input.stroke.disabled` phục vụ mục đích làm mờ ranh giới của thành phần, báo hiệu cho người dùng biết rằng ô này không thể lấy tiêu điểm (focus) hoặc chỉnh sửa. Nó áp dụng một biến thể độ mờ (opacity) thấp được trích xuất từ mã outline tiêu chuẩn, giúp giữ lại hình dáng cấu trúc của container trên trang mà không cạnh tranh thị giác với các phần tử tương tác đang hoạt động khác.

> **Quy tắc ranh giới mờ:**
> 
>   Luôn kết hợp token viền khóa này cùng với màu nền khóa `faColors.input.fill.disabled`. Việc giữ cho đường viền hiển thị ở mức độ mờ nhạt giúp cấu trúc biểu mẫu không bị vỡ hoặc trôi tuột, cho phép người dùng nhận diện rõ ràng nơi container nhập liệu bị khóa bắt đầu và kết thúc.

### Ví dụ triển khai


```dart
// Áp dụng ranh giới mờ nhạt cho ô nhập liệu bị khóa trong biểu mẫu
TextField(
  enabled: false,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.disabled,
    // Sử dụng mã token viền khóa chuyên biệt để đồng bộ cấu trúc
    disabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.disabled,
        width: 1.0,
      ),
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.input.stroke.disabled` áp dụng tỷ lệ alpha được hiệu chuẩn chính xác (0.30 cho giao diện Tối và 0.40 cho giao diện Sáng) trên nền outlineVariant để duy trì tính thẩm mỹ cho bộ khung.*