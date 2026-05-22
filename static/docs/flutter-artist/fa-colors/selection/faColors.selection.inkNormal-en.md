## faColors.selection.inkNormal

The `faColors.selection.inkNormal` token defines the primary color for text, icons, and vector graphics within a selection row in its default state.

### Technical Logic

As part of the **Surface - Ink - Stroke** architecture, `inkNormal` represents the core content layer. It is mapped to the highest contrast neutral color available in the current theme, ensuring that all data remains sharp and legible against the `rowNormal` ground.

> **The Semantic Anchor:**
> 
>   `inkNormal` is not just a text color. It is a universal ink applied to all foreground elements—including SVG icons and glyphs—to maintain visual unity within the row.

### Implementation Example

```dart
// Drawing content with standard selection ink
Row(
  children: [
    Icon(
      Icons.data_object_rounded,
      // Apply ink to the icon
      color: context.faColors.selection.inkNormal,
    ),
    const SizedBox(width: 8),
    Text(
      'System Architecture Log',
      style: TextStyle(
        // Apply ink to the text
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ],
)
```

*Note: `faColors.selection.inkNormal` is typically an alias for `faColors.ink.primary`, ensuring that list content follows the application's global typography standards.*