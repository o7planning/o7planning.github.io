## faColors.stroke.subtle

Token `faColors.stroke.subtle` xác định lớp ranh giới nhẹ nhất. Nó được thiết kế để phân tách các phần tử có tác động thấp, tạo ra nhịp điệu thị giác mà không làm gián đoạn luồng nội dung.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `stroke.subtle` cung cấp một "gợi ý" về cấu trúc. Nó thường được sử dụng cho các vạch ngăn cách nội bộ, nơi mà khoảng cách giữa các phần tử đã tự thân gợi lên một mối liên hệ, và một đường kẻ đậm hơn sẽ trở nên thừa thãi hoặc gây rối mắt.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN DÙNG:** Kẻ ngang giữa các mục danh sách, vạch dọc trên thanh công cụ, hoặc viền trạng thái rảnh (idle) của ô nhập liệu.
> 
>     * **HẠN CHẾ:** Dùng cho ranh giới của các container chính (như Dialog hay Sidebar) vì nó có thể quá mờ trên một số màn hình hoặc môi trường có độ sáng cao.

### Ví dụ triển khai


```dart
// Sử dụng stroke subtle cho đường kẻ ngăn cách danh sách
ListView.separated(
  itemCount: items.length,
  // Tạo đường kẻ phân tách giữa các hàng
  separatorBuilder: (context, index) => Divider(
    color: context.faColors.stroke.subtle,
    height: 1,
  ),
  itemBuilder: (context, index) => ListTile(
    title: Text('Item $index', style: TextStyle(color: context.faColors.ink.primary)),
  ),
)
```

*Ghi chú: `faColors.stroke.subtle` là cấp độ stroke được sử dụng nhiều nhất trong các bảng dữ liệu dày đặc để duy trì một giao diện "thoáng đãng".*