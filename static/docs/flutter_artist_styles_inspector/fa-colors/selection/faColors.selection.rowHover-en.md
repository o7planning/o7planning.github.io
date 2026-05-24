## faColors.selection.rowHover

The `faColors.selection.rowHover` token defines the transient background surface color when a pointer device hovers over a row or item.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `rowHover` is designed as a subtle interactive layer. It uses a low-alpha overlay (typically 6% to 12% opacity) to provide immediate visual feedback without obscuring the underlying `rowNormal` ground or the content ink.

> **Interactive Feedback:**
> 
>   Since hover is a temporary state, it is best used to "lift" the row slightly. You can combine it with `faColors.stroke.subtle` to maintain structural integrity during the interaction.

### Implementation Example


```dart
// Applying hover effect to a list item
// Note: Usually handled via InkWell or MouseRegion in Flutter
Container(
  // The interactive overlay for hover state
  color: isHovered
      ? context.faColors.selection.rowHover
      : context.faColors.selection.rowNormal,
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // Keep the stroke subtle to avoid visual noise
        color: context.faColors.stroke.subtle,
        width: 1,
      ),
    ),
  ),
  child: ListTile(
    title: Text(
      'Hover Interactive Item',
      style: TextStyle(
        // Ink remains primary to ensure focus on content
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ),
)
```

*Note: `faColors.selection.rowHover` is dynamically calculated in the FaColorGraph using the `_hover` helper to ensure consistency across light and dark themes.*