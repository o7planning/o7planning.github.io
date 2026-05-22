## faColors.action.ink.onGhostFill

Token `faColors.action.ink.onGhostFill` xác định màu mực cho văn bản và biểu tượng khi chúng được đặt cụ thể bên trong một khung chứa `faColors.action.fill.ghost`.

### Logic kỹ thuật

Trong kiến trúc **Fill - Ink - Stroke**, `faColors.action.ink.onGhostFill` đóng vai trò là một lớp tương phản dành riêng cho các bề mặt ghost. Vì lớp lấp đầy ghost thường trong suốt hoặc có độ mờ cực thấp, loại mực này được thiết kế để kế thừa khả năng đọc của bề mặt bên dưới trong khi vẫn duy trì ngữ nghĩa tương tác riêng biệt.

> **Ghi chú triển khai:**
> 
>   Mặc dù `faColors.action.fill.ghost` là trong suốt, loại mực chuyên dụng này đảm bảo rằng ngay cả khi khung chứa ghost có sự chuyển đổi trạng thái (ví dụ: trong một hiệu ứng hover nhẹ), nội dung vẫn luôn đồng bộ hoàn hảo với mục tiêu tương tác.

### Ví dụ triển khai

```dart
// Vẽ nội dung trên một bề mặt hành động ghost
Container(
  decoration: BoxDecoration(
    // Lớp lấp đầy ghost trong suốt
    color: context.faColors.action.fill.ghost,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Ghost Action',
    style: TextStyle(
      // Mực chuyên dụng dành cho nền ghost
      color: context.faColors.action.ink.onGhostFill,
      fontSize: 13,
    ),
  ),
)
```

*Ghi chú: Trong nhiều cấu hình FaColorGraph, `faColors.action.ink.onGhostFill` thường được ánh xạ tới `faColors.ink.primary` hoặc `faColors.action.ink.ghost` do tính chất trong suốt của nền.*