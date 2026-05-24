## faColors.action.ink.selected

Token `faColors.action.ink.selected` xác định màu sắc cho văn bản và biểu tượng trong các thành phần tương tác đang ở trạng thái "Đã chọn" (Selected) nhưng không có lớp nền lấp đầy.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.selected` cung cấp một tín hiệu thị giác rõ ràng về sự lựa chọn chỉ thông qua màu sắc tiền cảnh. Nó thường có giá trị màu giống với `faColors.action.fill.selected` (hoặc màu thương hiệu tương đương) để đảm bảo tính nhất quán của thương hiệu trên các phong cách thành phần khác nhau.

> **Khả năng hiển thị độc lập:**
> 
>   Token này được tối ưu hóa cho các thành phần đứng độc lập. Vì sử dụng màu thương hiệu có độ bão hòa cao, nó vẫn hiển thị rõ ràng khi đặt trên các lớp `faColors.surface.xxx` trung tính, khiến nó trở thành lựa chọn hoàn hảo cho các nhãn Tab hoặc icon điều hướng đang được chọn.

### Ví dụ triển khai


```dart
// Tạo một mục Tab đang được chọn (Không có nền)
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    Text(
      'Active Tab',
      style: TextStyle(
        // ĐÚNG: Màu thương hiệu chính cho mực trạng thái selected
        color: context.faColors.action.ink.selected,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 4),
    // Thanh chỉ báo sử dụng cùng logic màu
    Container(
      width: 20,
      height: 2,
      color: context.faColors.action.ink.selected,
    ),
  ],
)
```

*Ghi chú: Tuyệt đối không dùng token này đè lên nền `faColors.action.fill.selected`. Hãy sử dụng `faColors.action.ink.onSelectedFill` cho kịch bản đó để đảm bảo khả năng truy cập.*