## faColors.action.ink.onInfoFill

The `faColors.action.ink.onInfoFill` token defines the specific ink color for text and icons that sit directly on top of a `faColors.action.fill.info` background.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, this token serves as a high-contrast companion for informational surfaces. Since info backgrounds use a specific blue/cyan hue, this ink is mathematically tuned to provide maximum legibility, ensuring that auxiliary guidance or "Learn More" primary buttons are unmistakably clear.

> **The Informational Lock:**
> 
>   This token **MUST** be used with `faColors.action.fill.info`.
>   If you attempt to use `faColors.action.ink.onInfoFill` for standalone text on a `faColors.surface.xxx`, the lack of contrast will likely render the content **invisible**.

### Implementation Example

```dart
// Correct implementation of an Info Action Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // REQUIRED: The informational blue fill
    color: context.faColors.action.fill.info,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Text(
    'Show Tutorial',
    style: TextStyle(
      // CORRECT: High-contrast ink for the info fill
      color: context.faColors.action.ink.onInfoFill,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a crisp white or a very deep navy, depending on the specific blue luminance of your info theme.*