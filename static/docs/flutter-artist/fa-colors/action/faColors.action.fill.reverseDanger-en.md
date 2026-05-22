## faColors.action.fill.reverseWarning

The `faColors.action.fill.reverseWarning` token provides a soft amber background for cautionary messages.

### Implementation Example

```dart
// Warning Alert Box
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.action.fill.reverseWarning,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Your session is about to expire.',  
    style: TextStyle(color: context.faColors.action.ink.warning),
  ),
)
```