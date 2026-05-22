## faColors.selection.rowNormal

The `faColors.selection.rowNormal` token defines the default background color for a row (in a Table, ListView, or any collection) when it is in its idle/neutral state.

### Design Philosophy

In the FlutterArtist ecosystem, `faColors.selection.rowNormal` serves as the **"Ground"**. It is a stable, neutral surface designed to provide maximum legibility for content without drawing attention to the container itself.

> **The Trio Principle:**
> 
>   For a professional look, always pair `faColors.selection.rowNormal` (Surface) with `faColors.selection.inkNormal` (Content) and `faColors.stroke.subtle` (Divider).

### Implementation Example


```dart
// Standard usage for a list item
Container(
  // The idle surface color
  color: context.faColors.selection.rowNormal,
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // Use subtle stroke for divider
        color: context.faColors.stroke.subtle,
        width: 1,
      ),
    ),
  ),
  child: ListTile(
    title: Text(
      'Clean Architecture with FlutterArtist',
      style: TextStyle(
        // Use matching ink for normal state
        color: context.faColors.selection.inkNormal,
      ),
    ),
  ),
)
```

*Note: `rowNormal` is typically aliased from `faColors.surface.ground` to ensure total visual harmony with the application base.*