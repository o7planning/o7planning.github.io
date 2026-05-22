## faColors.action.ink.onDangerFill

Token `faColors.action.ink.onDangerFill` xác định màu mực cụ thể cho văn bản và biểu tượng nằm trực tiếp trên nền `faColors.action.fill.danger`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, token này đóng vai trò là điểm neo tương phản cuối cùng. Vì nền nguy hiểm sử dụng màu đỏ có độ bão hòa cao, loại mực này được tinh chỉnh để duy trì khả năng đọc tối đa (thường là màu trắng hoặc trung tính có độ sáng cao), đảm bảo các nhãn xác nhận quan trọng như "Xóa vĩnh viễn" không thể bị nhầm lẫn.

> **Quy tắc "Bề mặt đỏ":**
> 
>   Token này **BẮT BUỘC** phải đi đôi với `faColors.action.fill.danger`.
>   Việc cố gắng sử dụng `faColors.action.ink.onDangerFill` trên nền trung tính hoặc nền trắng sẽ dẫn đến nội dung gần như **vô hình**, vì độ sáng của nó được thiết kế riêng để tương phản với màu đỏ đậm.

### Ví dụ triển khai

```dart
// Triển khai đúng cho một nút bấm Nguy hiểm (Xác nhận xóa)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // BẮT BUỘC: Lớp lấp đầy đỏ đậm danger
    color: context.faColors.action.fill.danger,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'XÁC NHẬN XÓA',
    style: TextStyle(
      // ĐÚNG: Mực tương phản tối đa dành cho nền danger
      color: context.faColors.action.ink.onDangerFill,
      fontWeight: FontWeight.black,
      letterSpacing: 1.2,
    ),
  ),
)
```

*Ghi chú: Trong FaColorGraph, token này thường được ánh xạ tới màu trắng tinh khiết hoặc tông màu cực sáng để đáp ứng các tiêu chuẩn truy cập cao (WCAG AAA) trên các bề mặt nguy hiểm.*