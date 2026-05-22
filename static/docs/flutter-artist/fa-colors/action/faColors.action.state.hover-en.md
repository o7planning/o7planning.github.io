## faColors.action.state.hover

The `faColors.action.state.hover` token defines the overlay color applied to an interactive element when a pointer (mouse) is positioned over it.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `hover` is treated as a dynamic state layer. It typically uses a low-opacity neutral or brand-tinted color that "stacks" on top of the existing `fill` or `surface`. This provides immediate visual feedback, confirming that the element is interactive without changing its fundamental identity.

> **The Stacking Principle:**
> 
>   Since this is an overlay, it should be implemented using a `Stack` or a `ColorFilter` in Flutter.
>   **Pro Tip:** Ensure the opacity is subtle (usually 4% to 8%) to maintain the legibility of the "Ink" layer underneath.

### Implementation Example

```dart
// Applying a hover state to a custom button
InkWell(
  onTap: () {},
  // Flutter's built-in way to use hover tokens
  hoverColor: context.faColors.action.state.hover,
  child: Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: context.faColors.action.fill.primary,
      borderRadius: BorderRadius.circular(8),
    ),
    child: Text(
      'Hover Me',
      style: TextStyle(color: context.faColors.action.ink.onPrimaryFill),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.state.hover` is often a semi-transparent black (in Light Mode) or white (in Dark Mode) to subtly darken or lighten the underlying color.*