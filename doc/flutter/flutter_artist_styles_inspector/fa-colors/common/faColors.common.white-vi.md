## faColors.common.white

Token `faColors.common.white` xác định một hằng số màu trắng nguyên thủy tuyệt đối (`0xFFFFFFFF`), hoàn toàn không bị ảnh hưởng bởi các thay đổi cấu hình giao diện (theme) của hệ thống.

### Logic kỹ thuật

Trong kiến trúc bộ máy **Fill - Ink - Stroke**, trong khi hầu hết các token thay đổi động thông qua FaColorGraph, `faColors.common.white` đóng vai trò như một điểm neo đáng tin cậy và bất biến. Nó bỏ qua hoàn toàn các bộ xử lý ngữ nghĩa của giao diện. Điều này đảm bảo rằng bất kể ứng dụng đang chạy trong giao diện Tối (Dark Theme) có độ bão hòa sâu hay giao diện Sáng (Light Theme) có độ tương phản cao, token này luôn đảm bảo một vectơ màu trắng tinh khiết, rất cần thiết cho các lớp phủ đồ họa đặc thù, các vùng vẽ canvas cố định hoặc các mặt nạ cắt (clipping path masks) tùy chỉnh.

> **Quy tắc hằng số bất biến (Trải nghiệm DEV):**
> 
>   Mặc dù token này trả về cùng một giá trị chính xác với mã màu `Colors.white` nguyên bản của Flutter, các nhà phát triển nên luôn luôn sử dụng `faColors.common.white` khi thiết kế các thành phần trong hệ sinh thái FlutterArtist. Việc giữ cho tất cả các khai báo cơ sở nằm gọn trong phạm vi scope `faColors.common` giúp mã nguồn có tính liên kết cực kỳ cao, rõ ràng và sạch sẽ.

### Ví dụ triển khai


```dart
// Vẽ một nền huy hiệu hoặc canvas tùy chỉnh bắt buộc phải giữ màu trắng tuyệt đối
Container(
  width: 40.0,
  height: 40.0,
  decoration: BoxDecoration(
    // CHUẨN: Sử dụng bí danh common chuyên biệt để đảm bảo sắc trắng tuyệt đối
    color: context.faColors.common.white,
    shape: BoxShape.circle,
    border: Border.all(
      color: context.faColors.divider.subtle,
    ),
  ),
  child: const Icon(Icons.star_rounded),
)
```

*Ghi chú: Không bao giờ sử dụng `faColors.common.white` làm nền trang hoặc nền container tiêu chuẩn. Đối với các bố cục thích ứng thông thường, hãy tận dụng các token thuộc nhánh surface thích ứng như `faColors.surface.standard`, giữ các hằng số tinh khiết này riêng cho các phần tử tĩnh đặc thù.*