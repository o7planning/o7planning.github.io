## faColors.action.fill.reversePrimary

The `faColors.action.fill.reversePrimary` token provides a subtle, tinted background for interactive elements that require "Soft Emphasis". It is the lighter counterpart to the primary fill, designed to indicate selection or active states without overwhelming the UI.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.fill.reversePrimary` serves as a secondary interactive layer. It preserves the brand's chromatic identity while shifting the visual weight from "Solid" to "Translucent". This token is essential for maintaining a clean, breathable interface in data-heavy Enterprise applications.

> **The "Soft Emphasis" Rule:**
> 
>   Unlike the solid primary fill, this reverse fill is designed to be paired with `faColors.action.ink.primary`.
>   **NEVER** use `onPrimaryFill` here, as the background is already light and requires dark, bold content for optimal contrast.

### Implementation Example


```dart
// Creating a Selected Menu Item (Soft Emphasis)
Container(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
  decoration: BoxDecoration(
    // A soft tint for the "Active" navigation state
    color: context.faColors.action.fill.reversePrimary,
    borderRadius: BorderRadius.circular(6),
  ),
  child: Row(
    children: [
      Icon(
        Icons.dashboard_rounded,
        // CORRECT: Bold primary ink on soft background
        color: context.faColors.action.ink.primary,
        size: 20,
      ),
      const SizedBox(width: 12),
      Text(
        'Dashboard',
        style: TextStyle(
          // CORRECT: Bold primary ink on soft background
          color: context.faColors.action.ink.primary,
          fontWeight: FontWeight.w600,
        ),
      ),
    ],
  ),
)
```

*Note: `faColors.action.fill.reversePrimary` is typically used for Sidebars, Navigation Rails, and selected Chips.*