## faColors.action.fill.reverseWarning

Token `faColors.action.fill.reverseWarning` cung cấp nền vàng phớt cho các thông điệp cảnh báo.

### Ví dụ triển khai

```dart
// Hộp cảnh báo tinh tế
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.action.fill.reverseWarning,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Low disk space warning.',
    style: TextStyle(color: context.faColors.action.ink.warning),
  ),
)
```