## faColors.action.ink.muted

The `faColors.action.ink.muted` token defines a low-emphasis color for text and icons used in interactive elements that do not require a background fill.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.muted` provides a subtle interactive affordance. It is designed to be visually quieter than primary typography, making it ideal for auxiliary actions that should only be discovered when needed, rather than demanding immediate attention.

> **Subtle Affordance:**
> 
>   This token is the perfect choice for secondary TextButtons, footer links, or "Learn More" icons. It ensures that the interface remains clean and uncluttered while still providing clear paths for advanced user interactions.

### Implementation Example


```dart
// Creating a low-emphasis Text Button
Row(
  mainAxisSize: MainAxisSize.min,
  children: [
    Icon(
      Icons.help_outline_rounded,
      // CORRECT: Subtle muted ink for auxiliary info icon
      color: context.faColors.action.ink.muted,
      size: 16,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'View Documentation',
        style: TextStyle(
          // CORRECT: Muted ink for secondary interactive text
          color: context.faColors.action.ink.muted,
          fontSize: 13,
        ),
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.action.ink.muted` is typically identical to `faColors.ink.muted`, ensuring that interactive secondary text maintains the same visual weight as non-interactive secondary text.*