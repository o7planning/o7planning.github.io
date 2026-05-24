## faColors.action.ink.danger

The `faColors.action.ink.danger` token defines the semantic danger color (red) specifically for text, icons, and vector graphics used in interactive actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.danger` is visually aligned with the danger fill palette. The "Ink" designation ensures that destructive labels remain sharp and meet accessibility standards when placed directly on neutral `faColors.surface.xxx` or `faColors.bar.xxx` layers.

> **Standalone Destruction:**
> 
>   Use this token for destructive **TextButtons** (like "Remove item") or icons that signal a critical error. It provides a clear "Stop" signal without the overwhelming visual dominance of a filled red button.

### Implementation Example


```dart
// Creating a Danger Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.no_accounts_rounded,
      // CORRECT: Use danger ink for a standalone destructive icon
      color: context.faColors.action.ink.danger,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Unbind Account',
        style: TextStyle(
          // CORRECT: Semantic danger color for destructive text
          color: context.faColors.action.ink.danger,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.danger`. Use `faColors.action.ink.onDangerFill` to ensure the content remains visible and legible.*