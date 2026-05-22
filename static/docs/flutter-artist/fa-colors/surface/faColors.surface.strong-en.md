## faColors.surface.strong

The `faColors.surface.strong` token defines the highest elevation surface level in the hierarchy, providing the maximum contrast against the base ground.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.surface.strong` is designed for structural components that require definitive separation from other layout elements. It represents the most intense surface density available before transitioning into action-based fills.

> **Structural Authority:**
> 
>   Use `faColors.surface.strong` for persistent sidebars, high-contrast modal headers, or specialized panels that define the primary structure of your application.

### Implementation Example

```dart
// Creating a high-contrast structural sidebar
Container(
  width: 250,
  // The strongest surface for structural definition
  color: context.faColors.surface.strong,
  decoration: BoxDecoration(
    border: Border(
      right: BorderSide(
        // Pair with strong stroke for absolute separation
        color: context.faColors.stroke.strong,
        width: 1,
      ),
    ),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Main System Navigation',
      style: TextStyle(
        // Strong surface requires high-contrast primary ink
        color: context.faColors.ink.primary,
        fontWeight: FontWeight.w600,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.strong` is mapped to `surfaceContainerHighest` to ensure it stands at the peak of the surface elevation stack.*