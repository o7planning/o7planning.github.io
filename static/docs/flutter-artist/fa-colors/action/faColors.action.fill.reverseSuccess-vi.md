## faColors.action.fill.reverseSuccess

Token `faColors.action.fill.reverseSuccess` xác định lớp nền xanh lá phớt nhẹ cho các thao tác thành công.

### Ví dụ triển khai

```dart
// Tạo Banner thông báo thành công
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.action.fill.reverseSuccess,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    children: [
      Icon(Icons.check_circle, color: context.faColors.action.ink.success),
      const SizedBox(width: 8),
      Text(
        'Operation successful!',  
        style: TextStyle(color: context.faColors.action.ink.success),
      ),
    ],
  ),
)
```