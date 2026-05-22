## faColors.surface.muted

The `faColors.surface.muted` token defines a "quiet" surface level, specifically designed for secondary background areas or elements that need to be visually de-emphasized.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `faColors.surface.muted` provides a slightly more visible presence than `faColors.surface.subtle` but remains significantly less prominent than the standard surface. It is often used to indicate a "dormant" or "secondary" status within the UI hierarchy.

> **Strategic Use:**
> 
>   Use `faColors.surface.muted` for backgrounds of disabled components, empty state containers, or secondary panels that should not compete with the main content area.

### Implementation Example

```dart
// Using muted surface for a secondary information panel
Container(
  // The muted surface color for de-emphasized areas
  color: context.faColors.surface.muted,
  decoration: BoxDecoration(
    border: Border.all(
      // Pair with subtle stroke to maintain a soft boundary
      color: context.faColors.stroke.subtle,
      width: 1,
    ),
  ),
  child: ListTile(
    title: Text(
      'Secondary System Information',
      style: TextStyle(
        // Use muted ink to match the muted surface aesthetic
        color: context.faColors.ink.muted,
      ),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.surface.muted` is mapped to `surfaceContainerLow` to provide a distinct yet soft contrast against the ground.*