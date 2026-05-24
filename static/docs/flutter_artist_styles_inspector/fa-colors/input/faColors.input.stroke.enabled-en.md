## faColors.input.stroke.enabled

The `faColors.input.stroke.enabled` token defines the default boundary border color for input fields when they are active, editable, but not currently focused by the user.

### Technical Logic

In the **Fill - Ink - Stroke** layout system, `faColors.input.stroke.enabled` forms the structural baseline of an active form field. It maps directly to the system's outline variant color scheme, providing a clear but non-intrusive boundary line. This keeps the field recognizable as an input target without competing with the intense border contrast reserved for validation errors or active typing focus.

> **The Base Skeleton Rule:**
> 
>   Always use `faColors.input.stroke.enabled` for the default `enabledBorder` state in Flutter's `InputDecoration`. This ensures consistency with the overall structural dividers across the UI, while keeping the form clean and legible during initial page loading.

### Implementation Example


```dart
// Configuring a standard active form boundary border
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Applying the standard active perimeter stroke token
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
        width: 1.0,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.stroke.enabled` maps directly to the theme's outlineVariant, ensuring that the form boundary adapts appropriately during Light and Dark mode transitions.*