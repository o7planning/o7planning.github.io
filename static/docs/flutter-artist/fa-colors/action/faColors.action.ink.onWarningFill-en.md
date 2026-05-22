## faColors.action.ink.onWarningFill

The `faColors.action.ink.onWarningFill` token defines the specific ink color for text and icons that sit directly on top of a `faColors.action.fill.warning` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token serves as a critical contrast layer. Since warning backgrounds are often high-luminance (yellow or amber), this ink is specifically tuned (typically to a deep dark neutral) to ensure that the cautionary message remains perfectly legible under all environmental conditions.

> **The Visibility Lock:**
> 
>   This token **MUST** be used exclusively with `faColors.action.fill.warning`.
>   If you use `faColors.action.ink.onWarningFill` for a standalone label on a `faColors.surface.xxx`, the contrast will be insufficient, often making the text appear nearly **invisible**.

### Implementation Example


```dart
// Correct implementation of a Warning Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // REQUIRED: The vibrant warning fill
    color: context.faColors.action.fill.warning,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Update Required',
    style: TextStyle(
      // CORRECT: High-contrast ink for the warning fill
      color: context.faColors.action.ink.onWarningFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Note: Within the FaColorGraph, this token is almost always mapped to a very dark gray or black to ensure maximum contrast against the bright warning yellow/amber.*