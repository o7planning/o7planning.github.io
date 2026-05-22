## faColors.action.fill.info

The `faColors.action.fill.info` token defines the background color for informational actions or states that provide neutral guidance, such as "Details", "Learn More", or "Instruction" banners.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.info` provides a visual signal for helpful but non-critical content. It typically utilizes a specific blue hue, chosen to be distinct from the primary brand color to avoid confusion between "Primary Actions" and "Informational Context".

> **Informational Clarity:**
> 
>   Always pair this background with `faColors.action.ink.onInfoFill`.
>   This fill should be reserved for elements that help the user understand the system state without implying success, warning, or danger.

### Implementation Example

```dart
// Creating an Informational Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  decoration: BoxDecoration(
    // The calm informational blue fill
    color: context.faColors.action.fill.info,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.info_outline_rounded,
        // CORRECT: Contrast ink for info background
        color: context.faColors.action.ink.onInfoFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'View Instructions',
        style: TextStyle(
          // CORRECT: Contrast ink for info background
          color: context.faColors.action.ink.onInfoFill,
          fontWeight: FontWeight.w600,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.info` is mapped to a balanced cyan or sky-blue palette to ensure a neutral and professional tone.*