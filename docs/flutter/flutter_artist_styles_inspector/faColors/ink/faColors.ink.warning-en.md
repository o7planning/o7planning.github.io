## faColors.ink.warning

The `faColors.ink.warning` token defines the semantic amber/orange color for static text and icons that communicate caution, potential risks, or non-blocking alerts on expansive **Surface** layers.

### Technical Logic

Under the **Surface - Ink - Stroke** hierarchy, `faColors.ink.warning` is engineered to stand out through its warm hue. It is specifically tuned to maintain sufficient contrast on `faColors.surface.primary` or `secondary`, ensuring that "Pay attention" notes are visible without causing the immediate alarm associated with red error tones.

> **Usage Guidelines:**
> 
>   
> * **DO:** Use for caution messages (e.g., "Session expires soon"), pending status labels, and "warning" icons.
> 
>     * **DON'T:** Use as a background color (Fill).
> 
>     * **DON'T:** Use for interactive primary buttons (use `faColors.action.fill.warning` or `faColors.action.ink.warning` instead).

### Implementation Example


```dart
// Correct usage for a warning message on a surface
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    children: [
      Icon(
        Icons.warning_amber_rounded,
        // CORRECT: Static warning icon
        color: context.faColors.ink.warning,
      ),
      const SizedBox(width: 12),
      Expanded(
        child: Text(
          'Your password will expire in 3 days. Please update it.',
          style: TextStyle(
            // CORRECT: Static warning text
            color: context.faColors.ink.warning,
            fontSize: 14,
          ),
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.ink.warning` is often a deep amber or orange, optimized to avoid the common "low contrast" issue of yellow-based tones on light backgrounds.*