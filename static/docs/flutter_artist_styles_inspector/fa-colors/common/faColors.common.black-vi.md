## faColors.common.black

Token `faColors.common.black` xác định một hằng số màu đen nguyên thủy tuyệt đối (`0xFF000000`), hoàn toàn không bị ảnh hưởng bởi các thay đổi cấu hình giao diện (theme) của hệ thống.

### Logic kỹ thuật

Trong kiến trúc bộ máy **Fill - Ink - Stroke**, trong khi các token ngữ nghĩa thay đổi động thông qua FaColorGraph, `faColors.common.black` đóng vai trò như một điểm neo thị giác kiên định. It bỏ qua hoàn toàn các bộ xử lý ngữ nghĩa của giao diện. Điều này đảm bảo rằng bất kể ứng dụng đang hiển thị trong giao diện Sáng (Light Theme) có độ tương phản lớn hay giao diện Tối (Dark Theme) có độ bão hòa sâu, token này luôn đảm bảo một vectơ màu đen tinh khiết, rất quan trọng cho các bộ lọc nền đặc thù (backdrop filters), đổ bóng (dropshadow), mặt nạ khuôn đúc (stencil masks) thấp cấp hoặc các ranh giới in ấn có độ tương phản cao tuyệt đối.

> **Quy tắc hằng số bất biến (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một giá trị chính xác với mã màu `Colors.black` nguyên bản của Flutter, các nhà phát triển nên luôn luôn sử dụng `faColors.common.black` khi thiết kế các thành phần trong hệ sinh thái FlutterArtist. Việc giữ cho tất cả các khai báo cơ sở nằm gọn trong phạm vi scope `faColors.common` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai


```dart
// Cấu hình đổ bóng đậm hoặc mặt nạ khuân đúc tùy chỉnh bắt buộc phải giữ màu đen tuyệt đối
Container(
  width: 60.0,
  height: 60.0,
  decoration: BoxDecoration(
    color: context.faColors.surface.standard,
    borderRadius: BorderRadius.circular(12),
    boxShadow: [
      BoxShadow(
        // CHUẨN: Sử dụng bí danh common chuyên biệt để đảm bảo gốc bóng đổ đen tinh khiết
        color: context.faColors.common.black.withOpacity(0.15),
        blurRadius: 8.0,
        offset: const Offset(0, 4),
      ),
    ],
  ),
)
```

*Ghi chú: Không bao giờ sử dụng `faColors.common.black` làm màu chữ chính (body typography) hoặc màu nền trang tiêu chuẩn. Đối với các bố cục thích ứng thông thường, hãy tận dụng các token thuộc nhánh ink hoặc surface thích ứng như `faColors.ink.primary`, giữ các hằng số tinh khiết này riêng cho các phần tử tĩnh đặc thù.*