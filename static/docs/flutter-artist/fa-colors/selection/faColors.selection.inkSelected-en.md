## faColors.selection.inkSelected

The `faColors.selection.inkSelected` token defines the color for text and icons when their parent container is in the selected state (`rowSelected`).

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `inkSelected` is a functional contrast ink. While `inkNormal` focuses on legibility against neutral grounds, `inkSelected` is mathematically tuned to maintain a high contrast ratio against the primary/brand-colored surface of a selected row.

> **Dynamic Contrast:**
> 
>   This ink automatically switches between light and dark values depending on the luminance of your `rowSelected` fill, ensuring the content remains readable in any theme.

### Implementation Example


```dart
// Drawing content on a selected surface
Row(
  children: [
    Icon(
      Icons.check_circle_rounded,
      // Use selected ink for icons
      color: context.faColors.selection.inkSelected,
    ),
    const SizedBox(width: 8),
    Text(
      'Confirmed Selection',
      style: TextStyle(
        // Use selected ink for text
        color: context.faColors.selection.inkSelected,
        fontWeight: FontWeight.bold,
      ),
    ),
  ],
)
```

*Note: `faColors.selection.inkSelected` is often an alias for `faColors.ink.primary` (in alpha-based selections) or `textOnPrimary` (in solid-color selections) within the FaColorGraph.*