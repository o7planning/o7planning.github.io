## faColors.action.ink.onHighlightFill

The `faColors.action.ink.onHighlightFill` token defines the specific ink color for text and icons that sit directly on top of a `faColors.action.fill.highlight` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token provides a high-contrast foreground color. Since `faColors.action.fill.highlight` is often a vibrant or warm color (like amber or bright yellow), this ink is mathematically tuned to maintain maximum legibility, preventing the content from "bleeding" into the bright background.

> **The Contrast Lock:**
> 
>   This token **MUST** be used with `faColors.action.fill.highlight`.
>   If you use `faColors.action.ink.onHighlightFill` for standalone text on a `faColors.surface.xxx`, it will likely lose its semantic meaning and visual clarity.

### Implementation Example

```dart
// Correct implementation of a Highlighted Badge
Container(
  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
  decoration: BoxDecoration(
    // REQUIRED: The vibrant highlight fill
    color: context.faColors.action.fill.highlight,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'HOT',
    style: TextStyle(
      // CORRECT: High-contrast ink for the highlight fill
      color: context.faColors.action.ink.onHighlightFill,
      fontWeight: FontWeight.black,
      fontSize: 10,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a dark neutral (like deep gray or black) to provide the best contrast against the bright highlight surface.*