## faColors.action.stroke.secondary

Token `faColors.action.stroke.secondary` xác định màu đường viền cho các hành động dạng khung (outlined) phụ, chẳng hạn như các nút "Hủy", "Quay lại" hoặc các vùng tương tác bổ trợ.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.stroke.secondary` cung cấp ranh giới cấu trúc bằng cách sử dụng tông màu trung tính hoặc đã khử bão hòa. Nó được thiết kế đặc biệt để tạo ra các yếu tố tương tác "tĩnh lặng", cùng tồn tại với các hành động chính mà không tranh chấp sự chú ý của người dùng.

> **Cân bằng trung tính:**
> 
>   Luôn kết hợp đường viền này với `faColors.action.ink.secondary`. Sự kết hợp này là thiết yếu cho các hành động không phải là chính, đảm bảo chúng vẫn có thể tìm thấy nhưng có thứ cấp về mặt thị giác so với nút kêu gọi hành động chính (CTA).

### Ví dụ triển khai

```dart
// Tạo một Nút bấm Secondary dạng Outlined (ví dụ: Nút Hủy)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // Đường viền secondary tinh tế
    border: Border.all(
      color: context.faColors.action.stroke.secondary,
      width: 1.0,
    ),
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Hủy',
    style: TextStyle(
      // Mực đúng cho các yếu tố tương tác phụ
      color: context.faColors.action.ink.secondary,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới một màu trung tính có độ đậm vừa phải (như màu xám) để duy trì độ rõ nét trên các màu bề mặt khác nhau.*