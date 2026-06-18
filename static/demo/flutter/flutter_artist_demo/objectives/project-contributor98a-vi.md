# Thực thi phía máy chủ với BlockBackendAction

Ví dụ này minh họa **BlockBackendAction**, một cơ chế linh hoạt để kích hoạt các
  logic nghiệp vụ phía máy chủ và đồng bộ hóa trạng thái ứng dụng ngay khi thao tác từ xa hoàn tất.

* **Thực thi logic từ xa:** **BackendAction** được sử dụng cho các thao tác mà logic
  nghiệp vụ nằm ở máy chủ. Dù phía backend dùng mã ứng dụng (Java, Node.js...) để xử lý
  hay gọi một thủ tục cơ sở dữ liệu, Action này cung cấp một cách thống nhất để kích hoạt
  các quy trình đó từ giao diện.

  * **Đồng bộ hóa tự động:** Ví dụ sử dụng chính sách `AfterBlockBackendAction.query`.
  Điều này đảm bảo rằng sau khi máy chủ hoàn thành nhiệm vụ, **Block** sẽ tự động
  truy vấn lại dữ liệu, giữ cho UI luôn đồng bộ hoàn hảo với trạng thái mới trên server.

  * **Phản xạ toàn hệ thống:** Một **BackendAction** thành công có thể thông báo cho
  các phần khác trong **Shelf**. Điều này cho phép các **Block** hoặc **Scalar** liên quan
  tự làm mới mình, duy trì tính nhất quán dữ liệu trên toàn bộ ứng dụng.

<i>Trọng tâm kỹ thuật: Kích hoạt logic nghiệp vụ từ xa và tận dụng việc tự động truy vấn
lại để duy trì tính nhất quán giữa máy khách (Client) và máy chủ (Server).</i>

Vui lòng xem hàm `performBackendOperation` trong phần **Bài viết liên quan** để
tìm hiểu cách khởi tạo lệnh gọi từ xa.
