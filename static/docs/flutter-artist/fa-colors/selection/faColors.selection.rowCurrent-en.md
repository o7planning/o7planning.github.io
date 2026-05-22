## faColors.selection.rowCurrent

The `faColors.selection.rowCurrent` token identifies the background surface for the row that currently holds the active focus or is being navigated in a list or table context.

### Technical Logic

Unlike a persistent selection, `rowCurrent` represents a transient state. It acts as a visual pointer. In the **Surface - Ink - Stroke** system, it uses a secondary-level fill to provide enough distinction from `rowNormal` without competing for the same visual weight as `rowSelected`.

> **Design Integration:**
> 
>   To maintain a clean hierarchy, it is recommended to pair `rowCurrent` with `faColors.stroke.standard` to subtly define its boundaries.

### Implementation Example

```dart
// Highlighting the current focused row in a list
Container(
  // Transient fill for the current focused state
  color: context.faColors.selection.rowCurrent,
  decoration: BoxDecoration(
    border: Border.all(
      // Use standard stroke to indicate focus depth
      color: context.faColors.stroke.standard,
      width: 1,
    ),
  ),
  child: ListTile(
    title: Text(
      'Current Focused Item',
      style: TextStyle(
        // Use primary ink to maintain high legibility
        color: context.faColors.selection.inkCurrent,
      ),
    ),
  ),
)
```

*Note: `faColors.selection.rowCurrent` is often aliased to `faColors.surface.emphasized` in the FaColorGraph to ensure a "lifted" feel compared to the ground.*