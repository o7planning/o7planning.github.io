# Tạo dữ liệu hàng loạt với BlockQuickMultiItemCreationAction

Ví dụ này minh họa cách thực hiện hiệu quả các **Hành động hàng loạt** (Bulk Action)
  để tạo nhiều mục cùng lúc, đi kèm với các **Chính sách xác nhận** linh hoạt để đảm bảo an toàn dữ liệu.

* **Xử lý theo lô hiệu suất cao:** `BlockQuickMultiItemCreationAction` cho phép
  nhà phát triển kích hoạt việc tạo nhiều bản ghi trong một lần thực thi duy nhất. **Block**
  sẽ tự động tích hợp `PageData` trả về vào danh sách hiện tại.

  * **Các cấp độ xác nhận linh hoạt:** Ví dụ phô diễn ba mô hình trải nghiệm người dùng khác biệt:
    <ul>
      <li>**Không xác nhận:** Thực thi tức thì cho các tác vụ cần tốc độ cao.

      * **Dialog mặc định:** Sử dụng giao diện xác nhận có sẵn của framework để ngăn chặn các cú nhấp chuột nhầm.

      * **Dialog tùy biến:** Thể hiện quyền kiểm soát hoàn toàn bằng cách cung cấp widget `CustomConfirmation`
      chuyên biệt cho các tình huống xác thực phức tạp.


  </li>
  * **Đồng bộ trạng thái mượt mà:** Khi thành công, tất cả các mục mới sẽ được đồng bộ hóa
  với trạng thái dữ liệu nội bộ, phản ánh thay đổi trên toàn bộ **Block** mà không cần gọi truy vấn thủ công.

</ul>


*Trọng tâm kỹ thuật: Quản lý vòng đời chèn nhiều bản ghi và tùy biến quy trình xác nhận để thực thi hành động một cách tin cậy.*

Vui lòng xem hàm `createCustomConfirmation` trong phần **Bài viết liên quan** để
tìm hiểu cách tích hợp các hộp thoại tùy chỉnh vào luồng hành động.
