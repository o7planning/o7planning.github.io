## faColors.surface.standard

The `faColors.surface.standard` token defines the default surface level for primary content areas. It is the most frequently used surface for standard UI elements.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `faColors.surface.standard` provides a baseline elevation that distinguishes content from the absolute background. It is mathematically balanced to ensure that all primary ink tokens maintain optimal contrast for long-term reading and interaction.

> **Primary Role:**
> 
>   Use `faColors.surface.standard` for main content containers, list backgrounds, and standard form areas. It is designed to be the "reliable default" for your application's layout.

### Implementation Example

```dart
// Creating a standard content container
Container(
  // The default surface for main content
  color: context.faColors.surface.standard,
  decoration: BoxDecoration(
    border: Border.all(
      // Pair with standard stroke for a clear structure
      color: context.faColors.stroke.standard,
      width: 1,
    ),
  ),
  child: Padding(
    padding: const EdgeInsets.all(16.0),
    child: Text(
      'Standard Content Area',
      style: TextStyle(
        // Perfectly compatible with primary ink
        color: context.faColors.ink.primary,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.standard` is mapped to `surfaceContainer` to represent a stable, mid-level elevation.*