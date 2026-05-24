## faColors.action.ink.onSecondaryFill

The `faColors.action.ink.onSecondaryFill` token defines the specific ink color used for text and icons that sit directly on top of a `faColors.action.fill.secondary` background.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, this token serves as a specialized contrast ink. It is mathematically tuned to provide optimal legibility against the medium-emphasis surface of the secondary fill, ensuring that auxiliary actions are clear but remain visually subordinate to primary actions.

> **Critical Usage Warning:**
> 
>   This token **MUST** be used exclusively with `faColors.action.fill.secondary`.
>   If you use `faColors.action.ink.onSecondaryFill` for a button without a background (TextButton) placed on a `faColors.surface.xxx` or `faColors.bar.xxx`, the text will likely become **invisible** due to the lack of contrast.

### Implementation Example


```dart
// Correct implementation of a Secondary Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // REQUIRED: The secondary fill layer
    color: context.faColors.action.fill.secondary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Reset Settings',
    style: TextStyle(
      // CORRECT: High-contrast ink for the secondary fill
      color: context.faColors.action.ink.onSecondaryFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Note: Within the FaColorGraph, this token is typically mapped to a specific neutral tone that complements the secondary brand tint while maintaining accessibility standards.*