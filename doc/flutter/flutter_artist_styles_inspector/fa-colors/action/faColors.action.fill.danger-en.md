## faColors.action.fill.danger

The `faColors.action.fill.danger` token defines the background color for destructive or high-risk actions, such as "Delete", "Remove", "Block", or "Critical Error" alerts.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.danger` serves as the most intense visual signal. It utilizes a deep, high-chroma red optimized to command immediate attention and signal that the associated action has permanent or severe consequences.

> **The "Red Alert" Principle:**
> 
>   Always pair this background with `faColors.action.ink.onDangerFill`.
>   Due to the psychological weight of red, this fill should only be used for actions that are truly destructive. For non-destructive warnings, use `faColors.action.fill.warning` instead.

### Implementation Example


```dart
// Creating a Destructive Action Button (e.g., Delete Account)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // The high-urgency danger fill
    color: context.faColors.action.fill.danger,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.delete_forever_rounded,
        // CORRECT: Contrast ink for danger background
        color: context.faColors.action.ink.onDangerFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Delete Permanent',
        style: TextStyle(
          // CORRECT: Contrast ink for danger background
          color: context.faColors.action.ink.onDangerFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.danger` is mapped to the semantic error/danger color, ensuring maximum visibility across all themes.*