## faColors.divider.subtle

Token `faColors.divider.subtle` xác định màu sắc của đường phân cách mảnh, có độ tương phản thấp, được sử dụng cho các ranh giới nội dung nội bộ, các phần tử danh sách và các hàng trong bảng dữ liệu.

### Logic kỹ thuật

Trong hệ thống bố cục **Fill - Ink - Stroke**, `faColors.divider.subtle` cung cấp khả năng tổ chức vi cấu trúc (micro-structural) mà không làm vỡ nhóm thị giác của nội dung. Nó ánh xạ trực tiếp tới mã màu `outlineVariant` hệ thống trong FaColorGraph nhưng được áp dụng thêm một bộ hiệu chỉnh alpha chính xác (0.75 cho giao diện Sáng và 0.90 cho giao diện Tối). Sự tinh chỉnh này đảm bảo đường phân cách luôn sạch sẽ, hiển thị rõ ràng trên màn hình máy tính có độ tương phản khác nhau mà không làm phân tán sự chú ý khỏi dữ liệu cốt lõi.

> **Quy tắc vi ranh giới (Micro-Boundary):**
> 
>   Chỉ sử dụng token này cho các phần tử lặp lại nội dòng hoặc các ranh giới phụ (ví dụ: phân tách các hàng trong một lưới dữ liệu). Đối với các vách ngăn cấu trúc cấp trang hoặc phân chia các khối logic lớn, hãy tăng cường độ nhấn mạnh bằng cách chuyển sang sử dụng `faColors.divider.strong`.

### Ví dụ triển khai

```dart
// Vẽ một đường phân cách hàng nhẹ nhàng bên trong bố cục danh sách dữ liệu
Column(
  children: [
    const RowValueWidget(title: "Item Alpha"),
    // Áp dụng đường phân cách nội dung cường độ thấp sắc nét
    Divider(
      color: context.faColors.divider.subtle,
      thickness: 1.0,
      height: 1.0,
    ),
    const RowValueWidget(title: "Item Beta"),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.divider.subtle` chia sẻ chung logic hạt nhân phía sau với `faColors.stroke.subtle`, duy trì một bộ khung xương ranh giới thống nhất hoàn hảo trên toàn bộ framework FlutterArtist.*