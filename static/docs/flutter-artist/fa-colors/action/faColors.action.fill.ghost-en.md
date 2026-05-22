## faColors.action.fill.ghost

The `faColors.action.fill.ghost` token defines a transparent background fill, primarily used for interactive elements that should remain invisible in their idle state but provide feedback upon interaction.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.fill.ghost` is essentially a zero-opacity or high-transparency layer. It is designed for low-emphasis actions where the surface should only become visible during `Hover` or `Pressed` states, preserving the visual purity of the underlying `faColors.surface.xxx`.

> **Design Integration:**
> 
>   Ghost fills are perfect for toolbar buttons, window controls, or secondary navigation items. Always pair this fill with `faColors.action.ink.ghost` to maintain a consistent "transparent" aesthetic throughout the interactive cycle.

### Implementation Example

```dart
// Creating a subtle Ghost Button (Icon Button)
Container(
  padding: const EdgeInsets.all(8),
  decoration: BoxDecoration(
    // Invisible background in idle state
    color: context.faColors.action.fill.ghost,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Icon(
    Icons.more_vert_rounded,
    // Use ghost ink for the standalone interactive icon
    color: context.faColors.action.ink.ghost,
    size: 20,
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.ghost` is typically mapped to `Colors.transparent` or a very subtle tint of the primary ink.*