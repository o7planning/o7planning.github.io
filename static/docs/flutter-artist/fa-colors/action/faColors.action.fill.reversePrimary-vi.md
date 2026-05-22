## faColors.action.fill.reversePrimary

Token `faColors.action.fill.reversePrimary` cung cấp một lớp nền màu phớt (tint) tinh tế cho các thành phần tương tác cần "Nhấn mạnh nhẹ". Đây là phiên bản đối trọng của màu primary đặc, được thiết kế để chỉ thị trạng thái đang chọn hoặc đang hoạt động mà không làm nặng nề giao diện.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.fill.reversePrimary` đóng vai trò là lớp tương tác phụ. Nó giữ vững bản sắc màu sắc của thương hiệu nhưng chuyển đổi trọng số thị giác từ dạng "Khối đặc" sang dạng "Màu phớt". Token này là yếu tố cốt lõi để duy trì một giao diện sạch sẽ, thoáng đãng trong các ứng dụng Doanh nghiệp dày đặc dữ liệu.

> **Quy tắc "Nhấn mạnh nhẹ":**
> 
>   Khác với lớp nền primary đặc, lớp nền reverse này được thiết kế để kết hợp với `faColors.action.ink.primary`.
>   **TUYỆT ĐỐI KHÔNG** sử dụng `onPrimaryFill` tại đây, vì nền này đã đủ sáng và cần nội dung đậm màu để đạt độ tương phản tối ưu.

### Ví dụ triển khai

```dart
// Tạo một mục Menu đang được chọn (Nhấn mạnh nhẹ)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
  decoration: BoxDecoration(
    // Màu phớt nhẹ cho trạng thái điều hướng "Active"
    color: context.faColors.action.fill.reversePrimary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    children: [
      Icon(
        Icons.dashboard_rounded,
        // ĐÚNG: Mực primary đậm trên nền phớt nhạt
        color: context.faColors.action.ink.primary,
        size: 20,
      ),
      const SizedBox(width: 12),
      Text(
        'Bảng điều khiển',
        style: TextStyle(
          // ĐÚNG: Mực primary đậm trên nền phớt nhạt
          color: context.faColors.action.ink.primary,
          fontWeight: FontWeight.w600,
        ),
      ),
    ],
  ),
)
```

*Ghi chú: `faColors.action.fill.reversePrimary` thường được sử dụng cho Thanh menu bên (Sidebar), Navigation Rail và các thẻ Chip đang được chọn.*