## faColors.action.fill.reverseSecondary

The `faColors.action.fill.reverseSecondary` token defines a muted, low-contrast background for secondary interactive elements. It is designed to provide a "Soft Neutral" container that organizes UI components without drawing excessive attention away from the primary call-to-action.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.reverseSecondary` acts as the subtle foundation for secondary states. While `reversePrimary` carries a brand tint, `reverseSecondary` leans towards a more neutral or "stony" palette. This makes it ideal for background states in complex widgets like data filters, toggle groups, or inactive-but-selectable list items.

> **The "Neutral Balance" Rule:**
> 
>   Because this fill is highly neutral, it should be paired with `faColors.action.ink.secondary` for standard content, or `faColors.action.ink.primary` if you need to slightly elevate the legibility of the label within the neutral box.

### Implementation Example

```dart
// Creating a Secondary Toggle or Filter Chip
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // A neutral, subtle fill for non-primary actions
    color: context.faColors.action.fill.reverseSecondary,
    borderRadius: BorderRadius.circular(100), // Pill shape
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Text(
        'Filter: Date Modified',
        style: TextStyle(
          // CORRECT: Secondary ink for a balanced, professional look
          color: context.faColors.action.ink.secondary,
          fontSize: 13,
        ),
      ),
      const SizedBox(width: 4),
      Icon(
        Icons.close_rounded,
        color: context.faColors.action.ink.secondary,
        size: 14,
      ),
    ],
  ),
)
```

*Note: `faColors.action.fill.reverseSecondary` is frequently used for "Cancel" buttons in dialogs or as the background for "Unselected" states in multi-toggle components.*