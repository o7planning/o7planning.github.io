## faColors.action.ink.primary

The `faColors.action.ink.primary` token defines the primary brand color specifically for text, icons, and vector graphics used in interactive actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.primary` is visually identical to `faColors.action.fill.primary`. The naming distinction exists solely to prevent architectural confusion: "Ink" is for drawing content, while "Fill" is for filling backgrounds.

> **Strategic Usage:**
> 
>   This token is designed for **TextButtons** or buttons without a background. Because it uses the boldest brand color, these "transparent" buttons remain highly legible when placed on various `faColors.surface.xxx` layers or `faColors.bar.xxx` components.

### Implementation Example


```dart
// Creating a Brand-colored Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.add_circle_outline_rounded,
      // CORRECT: Use primary action ink for standalone icon
      color: context.faColors.action.ink.primary,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Add New Item',
        style: TextStyle(
          // CORRECT: Primary brand color for interactive text
          color: context.faColors.action.ink.primary,
          fontWeight: FontWeight.w600,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.primary`. It is meant to stand alone on neutral surfaces or bars.*