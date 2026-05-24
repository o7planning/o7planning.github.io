## faColors.action.fill.primary

The `faColors.action.fill.primary` token defines the most prominent background color for primary actions, such as "Submit", "Save", or "Confirm" buttons.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.primary` represents the highest level of interactive emphasis. It uses the boldest brand color from the theme palette to ensure it commands immediate attention. This token is specifically designed for high-density components where a strong visual "fill" is required.

> **Critical Accessibility Rule:**
> 
>   Always pair this background with `faColors.action.ink.onPrimaryFill` for its content (text/icons).
>   **NEVER** use `faColors.action.ink.primary` on top of this fill, as it is intended for standalone elements and will lack contrast here.

### Implementation Example


```dart
// Creating a high-emphasis Primary Button
Container(
  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  decoration: BoxDecoration(
    // The bold primary fill for main actions
    color: context.faColors.action.fill.primary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(
        Icons.check_rounded,
        // CORRECT: Contrast ink for primary background
        color: context.faColors.action.ink.onPrimaryFill,
        size: 18,
      ),
      const SizedBox(width: 8),
      Text(
        'Confirm Action',
        style: TextStyle(
          // CORRECT: Contrast ink for primary background
          color: context.faColors.action.ink.onPrimaryFill,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

*Note: `faColors.action.fill.primary` is mapped to the main brand color in FaActionSurfaceResolvers.*