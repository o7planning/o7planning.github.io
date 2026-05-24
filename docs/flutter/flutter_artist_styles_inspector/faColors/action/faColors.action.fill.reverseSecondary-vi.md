## faColors.action.fill.reverseSecondary

Token `faColors.action.fill.reverseSecondary` xác định một lớp nền có độ tương phản thấp, tông màu dịu cho các thành phần tương tác phụ. Nó được thiết kế để tạo ra một khung chứa "Trung tính nhẹ nhàng" (Soft Neutral), giúp tổ chức các thành phần UI mà không làm xao nhãng sự chú ý khỏi các hành động chính (primary actions).

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.reverseSecondary` đóng vai trò là nền tảng tinh tế cho các trạng thái phụ. Trong khi `reversePrimary` mang sắc thái của thương hiệu, thì `reverseSecondary` thiên về bảng màu trung tính hoặc "tông đá" (stony). Điều này làm cho nó trở nên lý tưởng để làm nền cho các widget phức tạp như bộ lọc dữ liệu, nhóm nút gạt (toggle groups), hoặc các mục danh sách ở trạng thái chưa được chọn nhưng có khả năng tương tác.

> **Quy tắc "Cân bằng trung tính":**
> 
>   Vì lớp nền này có tính trung tính cao, nó nên được kết hợp với `faColors.action.ink.secondary` cho các nội dung tiêu chuẩn, hoặc `faColors.action.ink.primary` nếu bạn cần tăng nhẹ độ dễ đọc của nhãn bên trong khung trung tính đó.

### Ví dụ triển khai


```dart
// Tạo một thẻ Chip lọc hoặc nút chuyển đổi phụ
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // Lớp nền trung tính, tinh tế cho các hành động không ưu tiên
    color: context.faColors.action.fill.reverseSecondary,
    borderRadius: BorderRadius.circular(100), // Hình viên thuốc
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Text(
        'Lọc: Ngày sửa đổi',
        style: TextStyle(
          // ĐÚNG: Mực secondary cho vẻ ngoài chuyên nghiệp và cân bằng
          color: context.faColors.action.ink.secondary,
          fontSize: 13,
        ),
      ),
      const SizedBox(width: 4),
      Icon(
        Icons.close_rounded,
        color: context.faColors.action.ink.secondary,
        size: 14,
      ),
    ],
  ),
)
```

*Ghi chú: `faColors.action.fill.reverseSecondary` thường được sử dụng cho các nút "Hủy" trong hộp thoại hoặc làm nền cho trạng thái "Chưa chọn" trong các thành phần chọn lựa (multi-toggle).*