## faColors.common

Trong kiến trúc bộ máy **Surface - Ink - Stroke**, namespace Common là nơi lưu trữ các hằng số nguyên thủy bất biến của hệ thống thiết kế. Không giống như các token ngữ nghĩa tự động dịch chuyển sắc độ dựa trên ngữ cảnh độ sáng của thiết bị, các biến nằm trong nhánh `common` là các vectơ tuyệt đối, độc lập với giao diện (theme-agnostic), được dành riêng cho các thao tác vẽ kỹ thuật, đồ họa lõi hoặc các ranh giới có độ tương phản cao cố định.

### 1. Phân rã cấu trúc

Hệ sinh thái tiện ích chung thiết lập một bộ ba nghiêm ngặt gồm các điểm neo nguyên thủy không có bộ xử lý (zero-resolver):

<table>
  <thead>
    <tr>
      <th>Tên Token đầy đủ</th>
      <th>Giá trị màu HEX</th>
      <th>Mục đích kỹ thuật cốt lõi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`faColors.common.white`</td>
      <td>`0xFFFFFFFF`</td>
      <td>Các lớp phủ màu trắng cố định, mặt nạ vẽ canvas, nền huy hiệu đồ họa.</td>
    </tr>
    <tr>
      <td>`faColors.common.black`</td>
      <td>`0xFF000000`</td>
      <td>Bộ lọc nền cứng, gốc bóng đổ (dropshadow) tuyệt đối, hình khối stencil.</td>
    </tr>
    <tr>
      <td>`faColors.common.transparent`</td>
      <td>`0x00000000`</td>
      <td>Vùng bắt cử chỉ (hit-test) vô hình, xóa viền mặc định, khoảng trống đệm.</td>
    </tr>
  </tbody>
</table>

### 2. Học thuyết thiết kế cốt lõi

<ul>
  <li>**Nguyên tắc độc lập bối cảnh:** Mọi token bên trong phạm vi `faColors.common` đều bỏ qua hoàn toàn các vòng lặp đánh giá giao diện ngữ nghĩa của cấu trúc FaColorGraph phía sau. Một vectơ màu trắng tinh khiết hay đen mun tuyệt đối sẽ được giữ nguyên vẹn như nhau trên cả giao diện Tối độ bão hòa sâu lẫn giao diện Sáng có độ tương phản cao.</li>
  <li>**Quy tắc Namespace thống nhất (Trải nghiệm DEV):** Mặc dù các biến này trả về cùng một giá trị nguyên thủy trong bộ nhớ giống như tầng lớp `Colors.*` nguyên bản của Flutter, các kỹ sư nên sử dụng duy nhất `faColors.common.*` trong hệ sinh thái. Việc giữ các nguyên thủy cơ sở này gọn gàng trong một phạm vi dễ đoán biết sẽ tăng cường mạnh mẽ tính liên kết của mã nguồn và hiệu suất gợi ý của IDE.</li>
  <li>**Quy tắc chống lạm dụng nền (Anti-Surface):** Tuyệt đối không lạm dụng các nguyên thủy thuộc nhánh common để thiết lập kiểu dáng cho các bề mặt thích ứng thông thường hoặc lớp chữ chính. Các thành phần động phải liên tục được ánh xạ tới các nhánh nhận biết bối cảnh (như `faColors.surface.standard` hoặc `faColors.ink.primary`) nhằm bảo vệ ứng dụng khỏi việc vỡ quy tắc tương phản thị giác khi người dùng hoán đổi giao diện Sáng/Tối trực tiếp.</li>
</ul>

> **Lưu ý kiến trúc hệ thống:** Bởi vì các token thuộc `faColors.common` không chịu bất kỳ chi phí xử lý (rendering overhead) nào và vận hành hoàn toàn tách biệt khỏi cây thông báo thay đổi giao diện, chúng là các tham số đầu vào an toàn và hiệu suất nhất cho các thủ tục vẽ nặng như CustomPainter hoặc các đường cắt Clipping Path.