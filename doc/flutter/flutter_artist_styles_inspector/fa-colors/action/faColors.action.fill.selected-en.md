## faColors.action.fill.selected

The `faColors.action.fill.selected` token defines the background fill color for interactive components that are currently in a persistent "Selected" state.

### Technical Logic

Within the **Fill - Ink - Stroke** architecture, `faColors.action.fill.selected` provides a clear visual confirmation of a choice. It is designed to be more prominent than `faColors.surface.xxx` layers but often maintains a balanced saturation to avoid visual fatigue when multiple items (like Chips) are selected simultaneously.

> **Selection Hierarchy:**
> 
>   Unlike `faColors.selection.rowSelected` (which is optimized for wide data rows), `faColors.action.fill.selected` is tailored for smaller UI components. Always pair this fill with `faColors.action.ink.onSelectedFill` to maintain accessibility standards.

### Implementation Example


```dart
// Creating a Selected Filter Chip
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // The active fill for selected state
    color: context.faColors.action.fill.selected,
    borderRadius: BorderRadius.circular(16),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_rounded,
        // Use the dedicated ink for selected fill
        color: context.faColors.action.ink.onSelectedFill,
        size: 14,
      ),
      const SizedBox(width: 4),
      Text(
        'Selected Filter',
        style: TextStyle(
          // Use the dedicated ink for selected fill
          color: context.faColors.action.ink.onSelectedFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.selected` is typically aliased to a brand-tinted container color with optimal contrast.*