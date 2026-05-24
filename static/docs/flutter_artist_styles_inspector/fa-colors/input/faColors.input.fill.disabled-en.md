## faColors.input.fill.disabled

The `faColors.input.fill.disabled` token defines the surface background color for input fields when they are explicitly set to a non-interactive or locked state.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.fill.disabled` serves to lower the visual weight of the input field. It uses a heavily muted neutral shade derived from the system's surface baseline to naturally communicate to the user that the component is locked, while still preserving the underlying text layer's legibility for data review.

> **The Locked Contrast Rule:**
> 
>   Always pair this disabled background with disabled typography markers. While the fill drops in prominence, ensure that any pre-filled value inside the field remains readable so users can scan historical or system-populated data without confusion.

### Implementation Example


```dart
// Creating a locked/non-interactive form input field
TextField(
  enabled: false,
  decoration: InputDecoration(
    filled: true,
    // Applying the specific disabled surface fill
    fillColor: context.faColors.input.fill.disabled,
    disabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        // Pairing with the corresponding disabled boundary marker
        color: context.faColors.input.stroke.disabled,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.fill.disabled` is dynamically attenuated across light and dark themes using calculated alpha values on top of the onSurface baseline.*