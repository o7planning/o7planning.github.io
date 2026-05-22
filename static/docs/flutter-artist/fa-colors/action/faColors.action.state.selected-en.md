## faColors.action.state.selected

The `faColors.action.state.selected` token defines the overlay color applied to an interactive element to indicate its current active or selected status within a group.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `selected` is a persistent state layer. Unlike `hover` or `pressed`, which are transient, this overlay remains visible as long as the element is in a selected state. It typically uses a brand-tinted opacity (often around 8% to 12%) to highlight the selection without overwhelming the content underneath.

> **Selection Hierarchy:**
> 
>   For high-emphasis selection (like a primary Tab), use `faColors.action.fill.selected`.
>   For low-emphasis selection (like a row in a DataGrid or a Navigation Rail item), use this **state overlay** on top of a neutral surface.

### Implementation Example

```dart
// Applying a selected state overlay to a List Item
Container(
  decoration: BoxDecoration(
    color: isSelected
      ? context.faColors.action.state.selected
      : Colors.transparent,
  ),
  child: ListTile(
    selected: isSelected,
    title: Text('Data Record #102'),
    // Ensure the ink also reflects the selection status
    selectedColor: context.faColors.action.ink.primary,
    onTap: () => setState(() => isSelected = true),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.state.selected` is often a semi-transparent version of the primary brand color to create a cohesive "active" feel across the application.*