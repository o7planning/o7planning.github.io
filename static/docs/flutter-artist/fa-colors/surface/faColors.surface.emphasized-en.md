## faColors.surface.emphasized

The `faColors.surface.emphasized` token defines a prominent surface level, specifically designed to highlight specific content blocks or interactive containers within the layout.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `faColors.surface.emphasized` provides a higher visual elevation than the standard surface. It creates a clear "raised" effect, making it ideal for components that require immediate user attention or signify a distinct logical section.

> **Strategic Highlighting:**
> 
>   Use `faColors.surface.emphasized` for high-importance cards, active status panels, or containers that house primary call-to-action elements.

### Implementation Example


```dart
// Creating a highlighted card container
Container(
  // The emphasized surface for high-visibility blocks
  color: context.faColors.surface.emphasized,
  decoration: BoxDecoration(
    border: Border.all(
      // Pair with standard stroke to define the boundary clearly
      color: context.faColors.stroke.standard,
      width: 1,
    ),
    borderRadius: BorderRadius.circular(8),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Featured Content Block',
      style: TextStyle(
        // Maintains perfect legibility with primary ink
        color: context.faColors.ink.primary,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.emphasized` is mapped to `surfaceContainerHigh` to ensure a distinct elevation jump from the base and standard layers.*