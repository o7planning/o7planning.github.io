## faColors.ink.label

Token `faColors.ink.label` xác định màu sắc cụ thể cho các định danh cấu trúc như nhãn của trường nhập liệu (input field labels), tiêu đề bảng (table headers) và tiêu đề biểu mẫu trên các lớp **Surface** lớn.

### Logic kỹ thuật

Trong kiến trúc **Surface - Ink - Stroke**, `faColors.ink.label` cung cấp độ tương phản từ trung bình đến cao, giúp phân biệt rõ ràng giữa "Nhãn siêu dữ liệu" (Metadata Labels) và "Dữ liệu thực tế" (Actual Data). Nó được thiết kế để mang tính bền vững và ổn định, đảm bảo cấu trúc của giao diện người dùng luôn hiển thị rõ ràng và ngăn nắp ngay cả khi nhìn lướt qua.

> **Hướng dẫn sử dụng:**
> 
>   <ul>
>     <li>**NÊN:** Sử dụng cho nhãn biểu mẫu (ví dụ: "Email Address"), tiêu đề cột trong DataGrids và tiêu đề danh mục.</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng cho văn bản giữ chỗ - placeholder (hãy dùng `faColors.ink.muted` để thay thế).</li>
>     <li>**KHÔNG ĐƯỢC:** Sử dụng làm màu nền hoặc bên trong các thành phần tương tác nhỏ như **Chips hay Badges**.</li>
>   </ul>

### Ví dụ triển khai

```dart
// Sử dụng đúng cho nhãn biểu mẫu và cấu trúc dữ liệu
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'FULL NAME',
      style: TextStyle(
        // ĐÚNG: Dùng mực Label cho việc định danh trường dữ liệu chính thức
        color: context.faColors.ink.label,
        fontSize: 12,
        fontWeight: FontWeight.w600,
        letterSpacing: 1.1,
      ),
    ),
    const SizedBox(height: 8),
    Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: context.faColors.surface.secondary,
        borderRadius: BorderRadius.circular(4),
      ),
      child: Text(
        'Johnathan Doe',
        style: TextStyle(
          // ĐÚNG: Dùng mực Primary cho nội dung dữ liệu thực tế
          color: context.faColors.ink.primary,
          fontSize: 16,
        ),
      ),
    ),
  ],
)
```

*Ghi chú: Trong FaColorGraph, `faColors.ink.label` thường được tinh chỉnh để mang tông màu trung tính hoặc "màu đá" hơn một chút so với mực primary, nhằm duy trì sự phân biệt rõ ràng giữa khung xương của biểu mẫu và nội dung bên trong nó.*