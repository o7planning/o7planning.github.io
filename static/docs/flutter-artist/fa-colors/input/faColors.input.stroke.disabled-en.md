## faColors.bar.subtle

The `faColors.bar.subtle` token defines a low-contrast background color for secondary bars, such as status bars, filter bars, or bottom navigation containers that need to be visually separated from the main content without being intrusive.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.bar.subtle` acts as a transitional layer. It is designed to be slightly different from `faColors.surface.primary` to signify a functional shift (from data to tools) while maintaining a high degree of transparency and "airiness" in the layout.

> **The "Quiet" Boundary:**
> 
>   Use this token for bars that are supplementary to the user's current task. It is perfect for a horizontal filter bar sitting right above a DataGrid, providing a clean anchor point for controls without creating a heavy visual break.

### Implementation Example

```dart
// Creating a subtle Filter Bar above a list
Container(
  height: 48,
  decoration: BoxDecoration(
    // The understated bar background
    color: context.faColors.bar.subtle,
    border: Border(
      bottom: BorderSide(color: context.faColors.stroke.subtle),
    ),
  ),
  child: Row(
    children: [
      Icon(Icons.filter_list, color: context.faColors.ink.secondary),
      const SizedBox(width: 8),
      Text(
        'Filter Results...',
        style: TextStyle(color: context.faColors.ink.secondary),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, this token is typically a neutral shade that sits between `surface.primary` and `surface.secondary` to ensure a smooth visual gradient.*