## faColors.input.fill.enabled

The `faColors.input.fill.enabled` token defines the default surface background color for input fields when they are active and available for user interaction.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.fill.enabled` provides a clean, neutral canvas for data entry. It is strategically mapped to a low-intensity container surface from the Material Design 3 color scheme, ensuring that the input area remains highly legible and visually separated from the background scaffold, without shifting focus away from the actual text content.

> **The Neutral Fill Principle:**
> 
>   Input surfaces should remain strictly neutral. Never tint this token with primary or accent brand colors, as high-saturation backgrounds within forms heavily strain the user's eyes and impair text contrast over long data-entry sessions.

### Implementation Example

```dart
// Creating a standard interactive input field within a form
TextField(
  enabled: true,
  decoration: InputDecoration(
    filled: true,
    // Applying the standard active fill token
    fillColor: context.faColors.input.fill.enabled,
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
        color: context.faColors.input.stroke.enabled,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.input.fill.enabled` points directly to the system's surfaceContainerLow, creating a soft contrast that automatically shifts appropriately during Light/Dark theme transitions.*