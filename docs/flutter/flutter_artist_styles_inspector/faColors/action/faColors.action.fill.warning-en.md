## faColors.action.fill.warning

The `faColors.action.fill.warning` token defines the background color for cautionary actions or states that require user attention without being inherently destructive, such as "Update Required", "Low Balance", or "Proceed with Caution".

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.warning` provides a high-visibility signal that sits between neutral surfaces and destructive danger states. It uses a high-chroma yellow or amber hue, specifically tuned to stand out against standard UI components to prevent accidental oversights.

> **Attention Management:**
> 
>   Always pair this background with `faColors.action.ink.onWarningFill`.
>   **AVOID** using this fill for non-urgent decorations; it should be reserved for items that truly require a user's "second look" to maintain the integrity of your app's signaling system.

### Implementation Example


```dart
// Creating a Warning Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // The high-visibility warning fill
    color: context.faColors.action.fill.warning,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.warning_amber_rounded,
        // CORRECT: Contrast ink for warning background
        color: context.faColors.action.ink.onWarningFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Verify Identity',
        style: TextStyle(
          // CORRECT: Contrast ink for warning background
          color: context.faColors.action.ink.onWarningFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.fill.warning` is typically mapped to an amber or orange-tinted palette to ensure visibility in both Light and Dark modes.*