## faColors.action.ink.ghost

The `faColors.action.ink.ghost` token defines the ink color for text and icons used in low-emphasis, transparent interactive elements.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.ghost` is designed to be visually neutral. It is typically mapped to a muted or semi-transparent version of the primary ink, ensuring that it provides a clear interactive hint while allowing the underlying `faColors.surface.xxx` to remain the dominant visual element.

> **The "Quiet" Interaction:**
> 
>   This token is the perfect companion for `faColors.action.fill.ghost`. Use it for secondary actions in dense UIs, such as "Close" icons in chips, breadcrumb separators, or auxiliary toolbar labels where brand colors would be too distracting.

### Implementation Example

```dart
// Creating a subtle Ghost Label (Auxiliary Action)
Row(
  mainAxisSize: MainAxisSize.min,
  children: [
    Icon(
      Icons.settings_outlined,
      // CORRECT: Subtle ghost ink for auxiliary icon
      color: context.faColors.action.ink.ghost,
      size: 16,
    ),
    const SizedBox(width: 4),
    Text(
      'Advanced Settings',
      style: TextStyle(
        // CORRECT: Neutral ink for low-emphasis action text
        color: context.faColors.action.ink.ghost,
        fontSize: 12,
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.action.ink.ghost` is often an alias for `faColors.ink.muted` or `faColors.ink.label` to maintain a calm and professional aesthetic.*