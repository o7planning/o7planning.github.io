## faColors.action.ink.onSelectedFill

The `faColors.action.ink.onSelectedFill` token defines the specific ink color for text and icons that are placed directly on top of a `faColors.action.fill.selected` background.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, this token serves as a high-contrast ink layer. It is mathematically optimized to maintain maximum legibility against the selected state fill, ensuring that active choices (like selected Chips or Segments) are easily readable regardless of the primary brand color's intensity.

> **The "Invisible" Risk:**
> 
>   This token **MUST** be paired with `faColors.action.fill.selected`.
>   Using `faColors.action.ink.onSelectedFill` on a neutral surface or without a background will likely result in the content becoming **invisible**, as it is designed for high-chroma contrast, not neutral grounds.

### Implementation Example

```dart
// Correct implementation of a Selected Segment/Chip
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // REQUIRED: The active selection fill
    color: context.faColors.action.fill.selected,
    borderRadius: BorderRadius.circular(20),
  ),
  child: Text(
    'Active Selection',
    style: TextStyle(
      // CORRECT: Dedicated contrast ink for the selected fill
      color: context.faColors.action.ink.onSelectedFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a high-contrast neutral (often white or a dark brand tint) to satisfy WCAG accessibility standards on the selected background.*