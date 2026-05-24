## faColors.ink.highlight

Token `faColors.ink.highlight` là màu hệ thống chữ chuyên dụng được sử dụng để thu hút sự chú ý ngay lập tức vào các từ, cụm từ hoặc các dấu hiệu kỹ thuật cụ thể trong một khối văn bản.

### Logic kỹ thuật

Được chuyển từ namespace *Special* cũ sang **Ink**, token này đóng vai trò là "Mực có độ hiển thị cao". Nó được thiết kế với tông màu rực rỡ (thường là màu chính của thương hiệu hoặc màu nhấn sáng) để đảm bảo các thuật ngữ được làm nổi bật so với văn bản `faColors.ink.primary` tiêu chuẩn, trong khi vẫn duy trì tỷ lệ tương phản nghiêm ngặt trên tất cả các lớp **Surface**.

> **Hướng dẫn sử dụng:**
> 
>   
> * **NÊN:** Sử dụng để làm nổi bật từ khóa trong kết quả tìm kiếm, các thuật ngữ kỹ thuật quan trọng hoặc nhãn "Mới".
> 
>     * **NÊN:** Sử dụng cho các đoạn văn bản nội dòng (ví dụ: `RichText`) để nhấn mạnh các phân đoạn cụ thể.
> 
>     * **KHÔNG NÊN:** Sử dụng cho các đoạn văn dài (gây mỏi mắt).
> 
>     * **KHÔNG NÊN:** Sử dụng cho các liên kết (hãy dùng `faColors.action.ink.primary` cho các thành phần tương tác).

### Ví dụ triển khai


```dart
// Sử dụng RichText để làm nổi bật một từ khóa cụ thể
RichText(
  text: TextSpan(
    style: TextStyle(color: context.faColors.ink.primary),
    children: [
      const TextSpan(text: 'FlutterArtist là một '),
      TextSpan(
        text: 'Enterprise-grade',
        style: TextStyle(
          // Làm nổi bật thuộc tính chính
          color: context.faColors.ink.highlight,
          fontWeight: FontWeight.bold,
        ),
      ),
      const TextSpan(text: ' framework.'),
    ],
  ),
)
```

*Ghi chú: Khác với `faColors.ink.info` (đại diện cho một trạng thái hệ thống), `faColors.ink.highlight` thuần túy mang tính thẩm mỹ và được dùng để nhấn mạnh nội dung.*