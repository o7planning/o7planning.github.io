## faColors.action.ink.success

The `faColors.action.ink.success` token defines the semantic success color for text, icons, and vector elements used in interactive actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.success` is visually identical to `faColors.action.fill.success`. The naming separation is a strict architectural requirement: "Ink" is for drawing content, ensuring that success-themed text remains legible and semantically correct on neutral surfaces.

> **Standalone Confirmation:**
> 
>   Use this token for **TextButtons**, standalone "Completed" status icons, or success messages that sit directly on `faColors.surface.xxx` layers. It provides high chroma contrast against neutral backgrounds.

### Implementation Example


```dart
// Creating a Success Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.done_all_rounded,
      // CORRECT: Use success ink for a standalone status icon
      color: context.faColors.action.ink.success,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Mark as Resolved',
        style: TextStyle(
          // CORRECT: Semantic success color for interactive text
          color: context.faColors.action.ink.success,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.success`. Use `faColors.action.ink.onSuccessFill` instead to ensure the content doesn't "disappear" into the background.*