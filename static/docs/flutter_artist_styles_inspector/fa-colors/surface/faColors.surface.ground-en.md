## faColors.surface.ground

The `faColors.surface.ground` token defines the absolute base layer of the application UI. It is the primary surface upon which all other components, containers, and navigational elements are placed.

### Technical Logic

As the foundational layer in the **Surface - Ink - Stroke** architecture, `faColors.surface.ground` typically maps to the `Scaffold` background color. It is designed with the lowest visual elevation, providing a neutral "canvas" that allows higher-level surfaces (like Cards or Dialogs) to create depth through contrast.

> **Architectural Role:**
> 
>   Always use `faColors.surface.ground` for the main background of your screens. Avoid placing heavy borders or shadows directly on this layer; instead, let the higher-level surfaces handle the visual elevation.

### Implementation Example


```dart
// Setting up the base scaffold of a screen
Scaffold(
  // The ultimate base surface
  backgroundColor: context.faColors.surface.ground,
  body: Column(
    children: [
      Text(
        'Base Canvas Layer',
        style: TextStyle(
          // Use primary ink for maximum legibility on ground
          color: context.faColors.ink.primary,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.ground` is directly tied to the theme's `scheme.surface` to ensure global consistency.*