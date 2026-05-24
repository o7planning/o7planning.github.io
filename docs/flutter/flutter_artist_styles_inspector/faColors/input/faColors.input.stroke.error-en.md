## faColors.input.stroke.error

The `faColors.input.stroke.error` token defines the boundary border color for input fields when the entered data fails validation constraints.

### Technical Logic

In the **Fill - Ink - Stroke** layout system, `faColors.input.stroke.error` delivers an urgent semantic signal. It bridges directly to the system's error color within the FaColorGraph, applying a distinct, high-chroma red hue to the field's perimeter. This immediately breaks the neutral pattern of the form, ensuring the user's attention is locked onto the invalid field without needing aggressive background fills.

> **The Semantic Contrast Rule:**
> 
>   Always match this stroke token with the corresponding error helper text color (usually `faColors.ink.danger`). Avoid changing the input's background fill to solid red, as using this crisp border token alone is sufficient for a clean, accessible, and professional validation state.

### Implementation Example


```dart
// Configuring a text field with error validation styling
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Boundary stroke used when the field holds an active validation error
    errorBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.error,
        width: 1.0,
      ),
    ),
    // Text style for the validation error message beneath the field
    errorStyle: TextStyle(
      color: context.faColors.ink.danger,
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.stroke.error` maps directly to scheme.error, maintaining consistent semantic alignment across both Light and Dark themes.*