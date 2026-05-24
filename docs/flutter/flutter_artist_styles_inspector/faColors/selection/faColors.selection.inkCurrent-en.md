## faColors.selection.inkCurrent

The `faColors.selection.inkCurrent` token defines the color for text and icons within a row that currently holds the focus or navigation pointer (`rowCurrent`).

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `inkCurrent` ensures that content remains primary and sharp while the user is actively navigating. Since `rowCurrent` usually represents a transient state, this ink is designed to work in perfect harmony with secondary-level backgrounds without losing the visual weight of the information.

> **Navigation Focus:**
> 
>   Use `inkCurrent` to provide subtle yet clear feedback that this specific item is the current target of keyboard or pointer navigation.

### Implementation Example


```dart
// Drawing content on a focused/current surface
Row(
  children: [
    Icon(
      Icons.arrow_forward_ios_rounded,
      // Apply ink for current focus state
      color: context.faColors.selection.inkCurrent,
      size: 16,
    ),
    const SizedBox(width: 8),
    Text(
      'Navigating System Item',
      style: TextStyle(
        // Use current ink for optimal legibility during navigation
        color: context.faColors.selection.inkCurrent,
      ),
    ),
  ],
)
```

*Note: `faColors.selection.inkCurrent` is typically an alias for `faColors.ink.primary` to ensure that focused content stays consistent with the main typography of the application.*