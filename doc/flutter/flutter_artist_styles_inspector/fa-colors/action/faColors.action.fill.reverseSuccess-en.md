## faColors.action.fill.reverseSuccess

The `faColors.action.fill.reverseSuccess` token defines a soft green background used to indicate successful operations or positive statuses.

### Technical Logic

In the **Fill - Ink - Stroke** system, `reverseSuccess` provides a professional container that pairs perfectly with `faColors.action.ink.success`.

### Implementation Example


```dart
// Success Banner Implementation
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
        'Transaction completed successfully!',
        style: TextStyle(color: context.faColors.action.ink.success),
      ),
    ],
  ),
)
```