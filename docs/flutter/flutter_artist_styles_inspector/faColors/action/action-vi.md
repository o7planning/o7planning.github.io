## faColors.action

Namespace `faColors.action` là động cơ cốt lõi của tính tương tác trong hệ sinh thái FlutterArtist. Nó cung cấp một bộ token toàn diện được thiết kế để xử lý mọi giai đoạn tương tác của người dùng, từ các nút tĩnh đến các trạng thái tương tác phức tạp.

### Triết lý kiến trúc

Được xây dựng trên bộ ba **Fill - Ink - Stroke**, namespace này đảm bảo mọi hành động đều rõ ràng về mặt ngữ nghĩa và nhất quán về mặt thị giác:

* **Fill (Lớp lấp đầy):** Xác định nền của hành động (ví dụ: Primary, Success, Danger).

  * **Ink (Mực):** Xác định nội dung (Văn bản/Biểu tượng) truyền tải thông điệp.

  * **Stroke (Đường viền):** Xác định "cấu trúc" hoặc ranh giới, lý tưởng cho các nút dạng khung (outlined) và nút "ma" (ghost buttons).

  * **State (Trạng thái):** Các lớp phủ động (Hover, Pressed, Selected) cung cấp phản hồi xúc giác trong thời gian thực.

### Các nhóm Token chính

| Nhóm | Mục đích | Kịch bản sử dụng |
| --- | --- | --- |
| **Primary / Secondary** | Tương tác định hướng thương hiệu. | Các nút kêu gọi hành động (CTA) chính và điều hướng phụ. |
| **Ngữ nghĩa (Success, Warning, Danger, Info)** | Truyền đạt trạng thái và rủi ro. | Xác nhận, cảnh báo và các hành động phá hủy. |
| **Muted / Subtle** | Tương tác có độ ưu tiên thấp. | Cài đặt, liên kết "Tìm hiểu thêm" và các tác vụ nền. |
| **States (Trạng thái)** | Phản hồi tương tác. | Di chuột, chạm nhấn và duy trì lựa chọn. |

> **Quy tắc theo cặp:**
> 
>   Để đạt được khả năng truy cập tối đa và tính toàn vẹn thị giác, hãy luôn tuân thủ quy ước đặt tên **onFill**.
>   Nếu bạn sử dụng `action.fill.primary`, bạn **bắt buộc** phải sử dụng `action.ink.onPrimaryFill` cho nội dung của nó. Việc trộn lẫn các token từ các nhóm ý định khác nhau sẽ làm hỏng logic của FaColorGraph.

### Ý đồ thiết kế

Namespace Action được thiết kế để giảm tải nhận thức cho người dùng. Bằng cách sử dụng các màu sắc ngữ nghĩa nhất quán (Đỏ cho Danger, Xanh dương cho Info), người dùng có thể điều hướng các giao diện Enterprise phức tạp một cách trực quan mà không cần đọc hết tất cả các nhãn.