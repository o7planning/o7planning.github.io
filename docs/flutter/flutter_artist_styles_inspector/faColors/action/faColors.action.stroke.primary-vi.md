## faColors.action.stroke.primary

The `faColors.action.stroke.primary` token defines the border color for primary outlined actions, such as "Add New", "Sign Up", or secondary-emphasis primary buttons.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.stroke.primary` provides structural definition using the primary brand color. It allows for the creation of "hollow" interactive elements that maintain a strong brand identity while reducing the overall visual "heaviness" of the interface compared to a solid `fill.primary`.

> **The Outlined Rule:**
> 
>   For a professional Outlined Button, always pair this stroke with `faColors.action.ink.primary`. This ensures that the border and the content (text/icon) share the same chromatic intent, creating a unified interactive object.

### Implementation Example


```dart
// Creating a Primary Outlined Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
  decoration: BoxDecoration(
    // The primary brand border
    border: Border.all(
      color: context.faColors.action.stroke.primary,
      width: 1.5,
    ),
    borderRadius: BorderRadius.circular(8),
  ),
  child: Text(
    'Create Account',
    style: TextStyle(
      // Match the ink with the stroke for architectural consistency
      color: context.faColors.action.ink.primary,
      fontWeight: FontWeight.w600,
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.stroke.primary` is usually identical to `faColors.action.ink.primary`, but separated in the API to allow for specific border-weight or opacity adjustments in complex themes.*