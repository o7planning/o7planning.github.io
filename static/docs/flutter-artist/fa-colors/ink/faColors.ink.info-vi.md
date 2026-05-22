## faColors.ink.info

Token `faColors.ink.info` xác định màu xanh dương ngữ nghĩa cho văn bản tĩnh và biểu tượng cung cấp chỉ dẫn hệ thống, mẹo hữu ích hoặc các cập nhật trạng thái trung tính trên các lớp **Surface** lớn.

### Logic kỹ thuật

Trong hệ thống phân cấp **Surface - Ink - Stroke**, `faColors.ink.info` được thiết kế để phân biệt rõ ràng với các tông màu trung tính (primary/secondary). Tông màu xanh dịu của nó báo hiệu "Thông tin hệ thống" thay vì "Dữ liệu của người dùng", tạo ra một mô hình tâm trí rõ ràng: nội dung màu xanh đại diện cho ngữ cảnh hữu ích do ứng dụng cung cấp.

> **Hướng dẫn sử dụng:**
> 
>   <ul>
>     <li>**NÊN:** Sử dụng cho các biểu ngữ thông tin, văn bản trợ giúp (ví dụ: "Learn more about security") và các thông báo hệ thống trung tính.</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng làm màu nền (Fill).</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng cho các hành động chính (hãy dùng `faColors.action.fill.primary`).</li>
>   </ul>

### Ví dụ triển khai

```dart
// Sử dụng đúng cho một mẹo nhỏ thông tin trên bề mặt
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    children: [
      Icon(
        Icons.help_outline_rounded,
        // ĐÚNG: Biểu tượng info tĩnh
        color: context.faColors.ink.info,
      ),
      const SizedBox(width: 12),
      Expanded(
        child: Text(
          'Tip: You can drag and drop items to reorder them.',
          style: TextStyle(
            // ĐÚNG: Văn bản chỉ dẫn/info tĩnh
            color: context.faColors.ink.info,
            fontSize: 14,
          ),
        ),
      ),
    ],
  ),
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.info` được ánh xạ tới một màu xanh dương chuyên nghiệp, đảm bảo khả năng đọc cao trên cả nền sáng và tối.*