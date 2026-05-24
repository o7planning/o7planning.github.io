## faColors.action.ink.onDangerFill

The `faColors.action.ink.onDangerFill` token defines the specific ink color for text and icons that sit directly on top of a `faColors.action.fill.danger` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token acts as the ultimate contrast anchor. Since danger backgrounds use high-saturation red, this ink is mathematically tuned to maintain maximum legibility (typically white or high-luminance neutral), ensuring that critical confirmation labels like "Delete Forever" are unmistakable.

> **The "Red Surface" Rule:**
> 
>   This token **MUST** be paired with `faColors.action.fill.danger`.
>   Attempting to use `faColors.action.ink.onDangerFill` on a neutral or white background will likely result in **invisible** content, as its luminance is designed specifically to contrast against deep red.

### Implementation Example


```dart
// Correct implementation of a Critical Danger Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // REQUIRED: The deep red danger fill
    color: context.faColors.action.fill.danger,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'CONFIRM DELETE',
    style: TextStyle(
      // CORRECT: Maximum contrast ink for the danger fill
      color: context.faColors.action.ink.onDangerFill,
      fontWeight: FontWeight.black,
      letterSpacing: 1.2,
    ),
  ),
)
```

*Note: Within the FaColorGraph, this token is typically mapped to a pure white or an ultra-light tint to meet high accessibility standards (WCAG AAA) on dangerous surfaces.*