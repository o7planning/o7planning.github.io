## faColors.action.stroke.secondary

The `faColors.action.stroke.secondary` token defines the border color for secondary outlined actions, such as "Cancel", "Back", or supplementary interactive zones.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.stroke.secondary` provides a structural boundary using a neutral or desaturated tone. It is specifically designed to create "quiet" interactive elements that coexist with primary actions without competing for the user's attention.

> **The Neutral Balance:**
> 
>   Always pair this stroke with `faColors.action.ink.secondary`. This combination is essential for non-primary actions, ensuring they remain discoverable but visually subordinate to the main call-to-action (CTA).

### Implementation Example


```dart
// Creating a Secondary Outlined Button (e.g., Cancel)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // The subtle secondary border
    border: Border.all(
      color: context.faColors.action.stroke.secondary,
      width: 1.0,
    ),
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Cancel',
    style: TextStyle(
      // Correct ink for secondary interactive elements
      color: context.faColors.action.ink.secondary,
      fontWeight: FontWeight.w500,
    ),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a medium-strength neutral (like gray) to maintain clarity on various surface colors.*