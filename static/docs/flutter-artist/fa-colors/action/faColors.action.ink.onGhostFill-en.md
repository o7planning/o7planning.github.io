## faColors.action.ink.onGhostFill

The `faColors.action.ink.onGhostFill` token defines the ink color for text and icons when they are placed specifically inside a `faColors.action.fill.ghost` container.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.ink.onGhostFill` serves as a dedicated contrast layer for ghost surfaces. Since ghost fills are often transparent or have extremely low opacity, this ink is designed to inherit the legibility of the underlying surface while maintaining a distinct interactive semantic.

> **Implementation Note:**
> 
>   While `faColors.action.fill.ghost` is transparent, this specialized ink ensures that even if the ghost container transitions (e.g., during a subtle hover animation), the content remains perfectly synchronized with the interactive intent.

### Implementation Example


```dart
// Drawing content on a ghost action surface
Container(
  decoration: BoxDecoration(
    // The transparent ghost fill
    color: context.faColors.action.fill.ghost,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Ghost Action',
    style: TextStyle(
      // Dedicated ink for ghost background
      color: context.faColors.action.ink.onGhostFill,
      fontSize: 13,
    ),
  ),
)
```

*Note: In many FaColorGraph implementations, `faColors.action.ink.onGhostFill` is often aliased to `faColors.ink.primary` or `faColors.action.ink.ghost` due to the transparent nature of the background.*