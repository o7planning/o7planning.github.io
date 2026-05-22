## faColors.action.fill.highlight

The `faColors.action.fill.highlight` token defines a high-visibility background color used to draw immediate attention to a specific interactive element or a newly created item.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.fill.highlight` provides a visual "pop" that is stronger than `faColors.surface.emphasized` but more specialized than a standard brand fill. It is often used for transient states, such as highlighting a row that has just been updated or a badge that requires user inspection.

> **Attention Management:**
> 
>   Use this token sparingly to avoid visual clutter. It is most effective for "New" labels, active search result markers, or temporary focus states. Always pair this background with `faColors.action.ink.onHighlightFill`.

### Implementation Example

```dart
// Highlighting a "New" status badge
Container(
  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
  decoration: BoxDecoration(
    // The high-visibility highlight fill
    color: context.faColors.action.fill.highlight,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'NEW',
    style: TextStyle(
      // Correct ink for the highlight background
      color: context.faColors.action.ink.onHighlightFill,
      fontSize: 10,
      fontWeight: FontWeight.black,
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.highlight` is typically mapped to a vibrant accent color (like amber or a bright brand secondary) to ensure it stands out from the standard UI palette.*