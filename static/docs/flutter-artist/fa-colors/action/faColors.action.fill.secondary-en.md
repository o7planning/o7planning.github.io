## faColors.action.fill.secondary

The `faColors.action.fill.secondary` token defines the background color for secondary actions, such as "Cancel", "Back", or "Reset" buttons.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.secondary` provides a medium interactive emphasis. It typically uses a muted version of the brand color or a neutral tinted shade to ensure it remains distinguishable from the ground without competing for the same visual weight as the primary action.

> **The Contrast Rule:**
> 
>   For professional integration, always pair this background with `faColors.action.ink.onSecondaryFill`.
>   **NEVER** use `faColors.action.ink.secondary` on top of this fill, as it is intended for standalone elements and will lack the necessary contrast here.

### Implementation Example

```dart
// Creating a secondary emphasis Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // The subtle secondary fill for auxiliary actions
    color: context.faColors.action.fill.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Cancel Process',
    style: TextStyle(
      // CORRECT: Contrast ink designed for secondary background
      color: context.faColors.action.ink.onSecondaryFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Note: `faColors.action.fill.secondary` is often mapped to a low-saturation variant of the brand palette in FaActionSurfaceResolvers.*