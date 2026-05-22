## faColors.ink.sourceCode

Token `faColors.ink.sourceCode` được thiết kế đặc biệt để hiển thị các văn bản kỹ thuật, đoạn mã (code snippets) và các dữ liệu định dạng monospaced.

### Logic kỹ thuật

Là một thành viên chuyên biệt trong namespace **Ink**, token này đảm bảo độ đọc tốt nhất cho các nội dung dày đặc ký tự. Nó thường sử dụng tông màu trung tính nhưng khác biệt để tách biệt phần logic khỏi văn bản thông thường, mang lại cảm giác như đang đọc trên "Terminal" mà vẫn tuân thủ các yêu cầu về độ tương phản của lớp **Surface** bên dưới.

> **Hướng dẫn sử dụng:**
> 
>   <ul>
>     <li>**NÊN:** Sử dụng kết hợp với các font chữ đơn cách (monospaced) như Courier, Fira Code cho các khối mã hoặc log.</li>
>     <li>**NÊN:** Sử dụng cho các giá trị kỹ thuật nội dòng như mã UUID, chuỗi Hash hoặc các câu lệnh SQL.</li>
>     <li>**KHÔNG NÊN:** Sử dụng làm màu chính cho các nhãn (label) tiêu chuẩn của giao diện.</li>
>     <li>**KHÔNG NÊN:** Áp dụng cho các thành phần tương tác như liên kết (trừ khi đó là hành động đặc thù trong trình chỉnh sửa mã).</li>
>   </ul>

### Ví dụ triển khai

```dart
// Bao bọc trong Container với nền surface.muted để tạo ngữ cảnh tốt hơn
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'git commit -m "feat: simplify namespaces"',
    style: TextStyle(
      fontFamily: 'monospace',
      // Màu mực chuyên dụng cho các chuỗi ký tự kỹ thuật
      color: context.faColors.ink.sourceCode,
    ),
  ),
)
```

*Ghi chú: Trong khi `faColors.ink.highlight` dùng để nhấn mạnh ý nghĩa, `faColors.ink.sourceCode` dùng để nhấn mạnh bản chất kỹ thuật của nội dung.*