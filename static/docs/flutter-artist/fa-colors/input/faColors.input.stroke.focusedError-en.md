## faColors.input.stroke.focusedError

The `faColors.input.stroke.focusedError` token defines the boundary border color for an input field when it simultaneously contains a validation error and actively holds keyboard focus.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.stroke.focusedError` handles a critical interactive state intersection. It links directly to the system's semantic error color within the FaColorGraph. When a user clicks into an invalid field to correct their input, this token ensures the border maintains its urgent error identity rather than reverting to the standard focus brand color, preserving clear status context during the correction process.

> **The Persistent Error Rule:**
> 
>   Form validation states must never be ambiguous. When an error field is focused, pair this token with an expanded line weight (e.g., 2.0 logical pixels). This heavy, semantic boundary reminds the user that the field is still invalid while providing the structural feedback of an active keyboard focus.

### Implementation Example

```dart
// Configuring comprehensive validation and focus borders within an input decoration scope
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    // Boundary stroke used when the field is invalid AND focused by the user
    focusedErrorBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.focusedError,
        width: 2.0, // Heavier weight applied during active error editing
      ),
    ),
    errorBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.error,
        width: 1.0,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.stroke.focusedError` maps natively to scheme.error, maintaining visual state discipline alongside focused borders in both Light and Dark themes.*