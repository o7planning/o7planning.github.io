## faColors.action.stroke.subtle

Token `faColors.action.stroke.subtle` xác định màu đường viền rất mờ cho các yếu tố tương tác, được sử dụng để cung cấp định nghĩa cấu trúc có độ tương phản thấp cho các vùng phụ hoặc các khung chứa nhập liệu.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.stroke.subtle` sử dụng tông màu trung tính có độ mờ thấp. Mục đích chính của nó là tạo ra một ranh giới "vô hình", lý tưởng để nhóm các hành động liên quan hoặc xác định vùng bấm của một thẻ tương tác tinh tế mà không làm rối mắt bằng các đường kẻ đậm.

> **Giao diện mật độ cao:**
> 
>   Token này là "người bạn thân" trong các môi trường dữ liệu dày đặc. Hãy sử dụng nó cho viền của các mục không quan trọng hoặc để ngăn cách các phân đoạn trong một thanh công cụ. Nó duy trì trật tự trong khi vẫn giữ cho giao diện cảm giác thông thoáng và dễ thở.

### Ví dụ triển khai


```dart
// Định nghĩa một khung chứa hoặc thẻ tương tác tinh tế
Container(
  decoration: BoxDecoration(
    color: context.faColors.surface.primary,
    border: Border.all(
      // Đường viền cực mờ cho cấu trúc phụ
      color: context.faColors.action.stroke.subtle,
      width: 1.0,
    ),
    borderRadius: BorderRadius.circular(4),
  ),
  child: ListTile(
    title: Text('Tùy chọn phụ'),
    trailing: Icon(Icons.chevron_right, color: context.faColors.action.ink.muted),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới màu xám rất nhạt hoặc màu của đường kẻ phân cách (divider) có độ mờ thấp, được tối ưu hóa để xếp chồng lên các cấp độ bề mặt khác nhau.*