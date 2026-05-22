## faColors.action.fill.success

The `faColors.action.fill.success` token defines the background color for positive actions or completed states, such as "Success", "Done", or "Approve" buttons.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.success` provides a strong visual signal of completion and correctness. It uses a specific green hue from the theme palette, optimized to be distinguishable from primary brand colors while maintaining a "safe" and encouraging aesthetic.

> **Positivity Implementation:**
> 
>   Always pair this background with `faColors.action.ink.onSuccessFill`.
>   **NEVER** use `faColors.action.ink.success` on top of this fill, as it is intended for standalone content and will fail contrast requirements here.

### Implementation Example


```dart
// Creating a Success Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // The positive success fill
    color: context.faColors.action.fill.success,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_circle_outline_rounded,
        // CORRECT: Contrast ink for success background
        color: context.faColors.action.ink.onSuccessFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Transaction Complete',
        style: TextStyle(
          // CORRECT: Contrast ink for success background
          color: context.faColors.action.ink.onSuccessFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.success` is mapped to the semantic success color in FaActionSurfaceResolvers.*