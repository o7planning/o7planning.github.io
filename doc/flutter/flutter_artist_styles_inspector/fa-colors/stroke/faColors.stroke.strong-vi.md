## faColors.stroke.strong

Token `faColors.stroke.strong` đại diện cho mức độ nhấn mạnh cấu trúc cao nhất. Nó được sử dụng để báo hiệu tiêu điểm hoạt động (active focus), các chỉ báo điều hướng chính, hoặc phân tách cực kỳ rõ ràng giữa các phần lớn của bố cục.

### Logic kỹ thuật

Trong phân cấp **Surface - Ink - Stroke**, `faColors.stroke.strong` thu hút sự chú ý thị giác tối đa. Nó được thiết kế để đóng vai trò là vật dẫn đường dứt khoát cho mắt người dùng. Khi áp dụng cho viền, nó thường chỉ ra rằng phần tử đó đang ở trạng thái "Hoạt động", "Đang được chọn", hoặc đóng vai trò là trụ cột cấu trúc chính của ứng dụng.

> **Quy tắc Tiêu điểm & Chỉ báo:**
> 
>   Luôn sử dụng `faColors.stroke.strong` cho trạng thái focus của các phần tử tương tác (như TextField) hoặc làm vạch kẻ dưới chỉ báo cho các Tab đang được chọn. Điều này đảm bảo tính dễ tiếp cận cao bằng cách cung cấp phản hồi thị giác không thể nhầm lẫn.

### Ví dụ triển khai


```dart
// Làm nổi bật tiêu điểm của ô nhập liệu hoặc chỉ báo Tab đang chọn
Container(
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // ĐÚNG: Sử dụng stroke strong cho chỉ báo đang hoạt động
        color: isSelected
            ? context.faColors.stroke.strong
            : Colors.transparent,
        width: 2,
      ),
    ),
  ),
  child: Text(
    'ACTIVE TAB',
    style: TextStyle(
      color: isSelected
          ? context.faColors.ink.primary
          : context.faColors.ink.muted,
      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
    ),
  ),
)
```

*Ghi chú: Hãy sử dụng `faColors.stroke.strong` một cách chắt lọc. Việc lạm dụng các đường viền có độ tương phản cao có thể khiến giao diện cảm thấy nặng nề và "tù túng".*