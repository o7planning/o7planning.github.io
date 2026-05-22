## faColors.action.ink.onPrimaryFill

The `faColors.action.ink.onPrimaryFill` token defines the specific ink color used for text and icons that sit directly on top of a `faColors.action.fill.primary` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token serves as a "high-contrast companion". While standard inks are designed for neutral grounds, `faColors.action.ink.onPrimaryFill` is mathematically optimized to ensure perfect legibility against the intense saturation of the primary brand fill.

> **Critical Usage Warning:**
> 
>   This token **MUST** be used exclusively with `faColors.action.fill.primary`.
>   If you use `faColors.action.ink.onPrimaryFill` for a button without a background (TextButton) placed on a `faColors.surface.xxx` or `faColors.bar.xxx`, the text will likely become **invisible** due to the lack of contrast.

### Implementation Example

```dart
// Correct implementation of a Primary Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // REQUIRED: The primary fill layer
    color: context.faColors.action.fill.primary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Save Changes',
    style: TextStyle(
      // CORRECT: High-contrast ink for the primary fill
      color: context.faColors.action.ink.onPrimaryFill,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

*Note: Within the FaColorGraph, this token is typically mapped to a solid white or a deep dark neutral, depending on the luminance of your brand's primary color.*