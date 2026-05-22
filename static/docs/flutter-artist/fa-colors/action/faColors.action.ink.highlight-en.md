## faColors.action.ink.highlight

The `faColors.action.ink.highlight` token defines a high-visibility color for text and icons, used to emphasize specific content without requiring a background fill.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.highlight` provides visual prominence through foreground color alone. It is designed to be visually distinct from primary typography, making it ideal for signaling urgency or "featured" status on neutral surfaces.

> **Strategic Spotlight:**
> 
>   This token is most effective for highlighting search keywords, indicating "Hot" items in a list, or for icons that need to stand out within a dense UI (like a star icon for a favorited item).

### Implementation Example

```dart
// Highlighting a featured item in a list
Row(
  children: [
    Icon(
      Icons.star_rounded,
      // CORRECT: Use highlight ink for a "featured" icon
      color: context.faColors.action.ink.highlight,
      size: 18,
    ),
    const SizedBox(width: 8),
    RichText(
      text: TextSpan(
        text: 'Featured: ',
        style: TextStyle(
          // CORRECT: Use highlight ink for emphasis text
          color: context.faColors.action.ink.highlight,
          fontWeight: FontWeight.bold,
        ),
        children: [
          TextSpan(
            text: 'Advanced Data Grid Component',
            style: TextStyle(color: context.faColors.ink.primary),
          ),
        ],
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.action.ink.highlight` is usually identical to `faColors.action.fill.highlight`, renamed for architectural consistency in foreground usage.*