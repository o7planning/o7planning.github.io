## faColors.action.ink.warning

The `faColors.action.ink.warning` token defines the semantic warning color (typically amber or orange) for text, icons, and vector graphics used in interactive actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.warning` is visually aligned with the warning fill palette. The "Ink" designation ensures that cautionary messages or status icons remain sharp and legible when placed directly on neutral `faColors.surface.xxx` layers.

> **Standalone Caution:**
> 
>   Use this token for **TextButtons** or icons that signal a non-critical issue, such as a "Low Battery" indicator or an "Incomplete Profile" link. It provides high chromatic contrast on light/dark grounds without the visual "weight" of a filled button.

### Implementation Example

```dart
// Creating a Warning Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.error_outline_rounded,
      // CORRECT: Use warning ink for a standalone caution icon
      color: context.faColors.action.ink.warning,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Subscription Expiring Soon',
        style: TextStyle(
          // CORRECT: Semantic warning color for interactive text
          color: context.faColors.action.ink.warning,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.warning`. Use `faColors.action.ink.onWarningFill` to ensure optimal legibility.*