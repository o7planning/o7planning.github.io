## faColors.surface.subtle

The `faColors.surface.subtle` token represents the lightest surface level in the hierarchy, providing a delicate distinction from the base ground.

### Technical Logic

Within the **Surface - Ink - Stroke** architecture, `faColors.surface.subtle` is mapped to the lowest elevation container color. It is designed to create very soft zones or logical groupings on a screen without creating a strong visual break.

> **Usage Context:**
> 
>   Ideal for subtle content grouping, such as background for sort panels, secondary toolbars, or nested list containers where a clear card-like shadow is not desired.

### Implementation Example


```dart
// Creating a subtle background for a Sort Panel
Container(
  // The lightest surface level
  color: context.faColors.surface.subtle,
  decoration: BoxDecoration(
    border: Border.all(
      // Pair with subtle stroke for a refined boundary
      color: context.faColors.stroke.subtle,
      width: 1,
    ),
  ),
  child: const Padding(
    padding: EdgeInsets.all(8.0),
    child: Text('Subtle Sort Panel Content'),
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.subtle` is mapped to `surfaceContainerLowest` to ensure it remains the closest layer to the ground.*