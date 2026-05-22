## faColors.action.ink.secondary

The `faColors.action.ink.secondary` token defines the secondary brand color specifically for text, icons, and vector graphics used in interactive actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.secondary` is visually identical to `faColors.action.fill.secondary`. The naming distinction exists solely to maintain architectural integrity: "Ink" is for drawing foreground content, while "Fill" is for background layers.

> **Strategic Usage:**
> 
>   This token is ideal for secondary **TextButtons** or auxiliary icons that require interactive affordance without the visual weight of a primary action. Because it is a "standalone" ink, it remains visible when placed on neutral `faColors.surface.xxx` or `faColors.bar.xxx` layers.

### Implementation Example

```dart
// Creating a secondary Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.history_rounded,
      // CORRECT: Use secondary action ink for standalone auxiliary icon
      color: context.faColors.action.ink.secondary,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'View History',
        style: TextStyle(
          // CORRECT: Secondary brand color for interactive text
          color: context.faColors.action.ink.secondary,
          fontWeight: FontWeight.w500,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.secondary`. It is strictly meant for standalone elements to ensure proper contrast ratios.*