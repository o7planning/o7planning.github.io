## faColors.action.fill.muted

The `faColors.action.fill.muted` token defines a low-intensity background fill for interactive elements that need to be visually understated.

### Technical Logic

Within the **Fill - Ink - Stroke** architecture, `faColors.action.fill.muted` provides the subtle interactive presence. It typically uses a neutral gray or a highly desaturated brand tint to ensure it blends into the background while still maintaining a clear hit area for the user.

> **Visual Hierarchy:**
> 
>   Use this fill for actions that are available but not recommended, such as "Reset to Default" or secondary settings. Always pair this background with `faColors.action.ink.onMutedFill` to ensure content doesn't get lost in the neutral tone.

### Implementation Example


```dart
// Creating a low-priority Muted Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // The understated muted fill
    color: context.faColors.action.fill.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Reset to Default',
    style: TextStyle(
      // Correct ink for the muted background
      color: context.faColors.action.ink.onMutedFill,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.muted` is often mapped to `surfaceContainerLow` or a similar neutral shade in FaActionSurfaceResolvers.*