## faColors.selection.rowSelected

The `faColors.selection.rowSelected` token defines the background surface for items (rows, cards, or tiles) that have been explicitly selected by the user to be processed or marked as active.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `rowSelected` carries a higher visual weight than `rowCurrent` or `rowHover`. While "Current" is transient (following the cursor/focus), "Selected" is persistent. It typically uses a tinted fill derived from the brand's primary color to signal a "Checked" or "Active" state clearly.

> **Selection Hierarchy:**
> 
>   When a row is both **Selected** and **Current**, the `rowSelected` style usually takes precedence for the background, while the `stroke` or a dedicated indicator might be used to show the focus (Current) position.

### Implementation Example


```dart
// Applying a persistent selected state to a data row
Container(
  // Persistent background for selected items
  color: isSelected
      ? context.faColors.selection.rowSelected
      : context.faColors.selection.rowNormal,
  child: ListTile(
    leading: Icon(
      isSelected ? Icons.check_box : Icons.check_box_outline_blank,
      // CORRECT: Use dedicated selection ink
      color: context.faColors.selection.inkSelected,
    ),
    title: Text(
      'Selected Data Entry',
      style: TextStyle(
        // CORRECT: High contrast ink for selected background
        color: context.faColors.selection.inkSelected,
        fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.selection.rowSelected` is often mapped to a soft primary tint (like `action.fill.reversePrimary`) to ensure that text remains legible using `inkSelected`.*