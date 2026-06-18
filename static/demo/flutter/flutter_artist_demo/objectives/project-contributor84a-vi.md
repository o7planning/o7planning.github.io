# Phối hợp toàn cục với StorageBackendAction

Ví dụ này minh họa **StorageBackendAction**, một cơ chế thực thi cấp độ toàn cục
  giúp kích hoạt logic phía máy chủ từ bên ngoài bất kỳ **Shelf** cụ thể nào, đảm bảo
  sự đồng bộ hóa xuyên thành phần.

* **Thực thi cấp cao:** Khác với các hành động đặc thù của Block, **StorageBackendAction**
  được thực thi trực tiếp bởi **Storage**. Nó được thiết kế cho các thao tác mà tầm ảnh hưởng
  trải rộng trên nhiều Shelf hoặc các trạng thái toàn cục của ứng dụng.

  * **Phản xạ dựa trên sự kiện:** Sau khi thành công, hành động sẽ phát đi các sự kiện
  toàn cục (ví dụ: `Event(ContributorInfo)`). Điều này đóng vai trò như một
  tín hiệu phát thanh tới bất kỳ Block hoặc Scalar nào trong ứng dụng đã đăng ký lắng nghe.

  * **Đăng ký sự kiện bên ngoài:** Ví dụ nhấn mạnh cấu hình `onExternalShelfEvents`
  trong **BlockConfig**. Điều này cho phép một Block luôn nắm bắt được thông tin và
  tự động làm mới dữ liệu ngay cả khi thay đổi được khởi tạo bởi một hành động toàn cục hoặc bên ngoài.

<i>Trọng tâm kỹ thuật: Làm chủ vòng đời hành động toàn cục và giao tiếp xuyên Shelf bằng cách
sử dụng các sự kiện cấp Storage và trình lắng nghe bên ngoài.</i>

Vui lòng xem `onExternalShelfEvents` trong cấu hình **Contributor84aBlock** để
tìm hiểu cách triển khai trình lắng nghe.
