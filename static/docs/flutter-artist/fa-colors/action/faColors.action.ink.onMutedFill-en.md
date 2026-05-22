## faColors.action.ink.onMutedFill

The `faColors.action.ink.onMutedFill` token defines the specific ink color for text and icons placed directly on top of a `faColors.action.fill.muted` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token provides a balanced contrast for low-emphasis surfaces. Since `faColors.action.fill.muted` is typically a neutral or desaturated tone, this ink is tuned to maintain legibility while preserving the "quiet" aesthetic of the component.

> **The "Low-Contrast" Balance:**
> 
>   This token **MUST** be used with `faColors.action.fill.muted`.
>   Using it elsewhere may lead to readability issues, as it is mathematically calculated to work against the specific luminance of the muted fill layer.

### Implementation Example


```dart
// Correct implementation of a Muted Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
  decoration: BoxDecoration(
    // REQUIRED: The neutral muted fill
    color: context.faColors.action.fill.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'Optional Action',
    style: TextStyle(
      // CORRECT: Balanced ink for the muted fill
      color: context.faColors.action.ink.onMutedFill,
      fontSize: 13,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is usually mapped to a deep neutral color to ensure it passes basic accessibility contrast checks on a light gray background.*