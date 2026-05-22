## faColors.input.stroke.focused

The `faColors.input.stroke.focused` token defines the primary border color for an input field when it actively gains keyboard focus or user selection.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.stroke.focused` serves as a high-visibility structural indicator. It maps directly to the system's primary brand color within the FaColorGraph. When a user interacts with the input, this token replaces the default neutral outline, establishing a decisive visual anchor that clearly signals where the active data insertion point resides.

> **The Focus Weight Principle:**
> 
>   Focused borders are typically rendered with a slightly heavier line weight (e.g., 2.0 logical pixels instead of 1.0) alongside this token. This subtle structural thickness alteration, combined with the brand-driven focused color, ensures excellent accessibility feedback across all desktop and mobile layouts.

### Implementation Example


```dart
// Configuring active focus borders within an input decoration scope
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Boundary stroke used when the text field becomes focused
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.focused,
        width: 2.0, // Expanded width paired with focus state
      ),
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
        width: 1.0,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.stroke.focused` links natively to scheme.primary, maintaining crisp contrast against input fill baselines in both Light and Dark environments.*