## faColors.ink.primary

The `faColors.ink.primary` token defines the default, high-contrast color for static text and icons that reside on expansive **Surface** layers. It is the backbone of readability for the core content of the application.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.ink.primary` is strictly a content-only token. It is optimized to provide the highest level of legibility on `faColors.surface.primary` or `secondary`. Unlike action inks, this token does not imply interactivity; it implies **information**.

> **Strict Usage Boundaries:**
> 
>   
> * **DO:** Use for body text, headings, and static icons on large layouts.
> 
>     * **DON'T:** Use as a background color for any component.
> 
>     * **DON'T:** Use for text/icons inside small interactive components like **Buttons, Chips, or Badges** (use `faColors.action.ink.xxx` instead).

### Implementation Example


```dart
// Correct usage for static content on a main surface
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Account Overview',
      style: TextStyle(
        // CORRECT: Primary ink for a static heading
        color: context.faColors.ink.primary,
        fontSize: 24,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 8),
    Icon(
      Icons.info_outline,
      // CORRECT: Static icon indicating information
      color: context.faColors.ink.primary,
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.primary` is mathematically tuned to contrast against the main application background, typically appearing as near-black in light mode and near-white in dark mode.*