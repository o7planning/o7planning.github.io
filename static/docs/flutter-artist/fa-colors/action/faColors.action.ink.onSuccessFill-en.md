## faColors.action.ink.onSuccessFill

The `faColors.action.ink.onSuccessFill` token defines the specific ink color for text and icons that sit directly on top of a `faColors.action.fill.success` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token acts as a high-contrast companion. It is mathematically tuned to provide maximum legibility against the success green, ensuring that confirmation messages or primary "Done" actions are immediately readable under any lighting conditions.

> **The Contrast Commandment:**
> 
>   This token **MUST** be used with `faColors.action.fill.success`.
>   If you attempt to use `faColors.action.ink.onSuccessFill` for a standalone TextButton on a `faColors.surface.xxx`, the content will likely become **invisible** or extremely faint.

### Implementation Example

```dart
// Correct implementation of a Success Primary Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // REQUIRED: The success fill layer
    color: context.faColors.action.fill.success,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Payment Success',
    style: TextStyle(
      // CORRECT: High-contrast ink for the success fill
      color: context.faColors.action.ink.onSuccessFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a solid white or a very dark forest green, depending on the specific luminance of the success fill to meet WCAG standards.*