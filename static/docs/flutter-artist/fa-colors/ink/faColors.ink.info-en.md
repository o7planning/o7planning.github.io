## faColors.ink.info

The `faColors.ink.info` token defines the semantic blue color for static text and icons that provide system guidance, helpful hints, or neutral status updates on expansive **Surface** layers.

### Technical Logic

Under the **Surface - Ink - Stroke** hierarchy, `faColors.ink.info` is designed to be distinct from neutral primary/secondary tones. Its cool blue hue signals "System Information" rather than "User Data", creating a clear mental model where blue content represents helpful context provided by the application.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use for informational banners, help text (e.g., "Learn more about security"), and neutral system notifications.</li>
>     <li>**DON'T:** Use as a background color (Fill).</li>
>     <li>**DON'T:** Use for primary actions (use `faColors.action.fill.primary` instead).</li>
>   </ul>

### Implementation Example

```dart
// Correct usage for an information tip on a surface
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.secondary,
    borderRadius: BorderRadius.circular(8),
  ),
  child: Row(
    children: [
      Icon(
        Icons.help_outline_rounded,
        // CORRECT: Static info icon
        color: context.faColors.ink.info,
      ),
      const SizedBox(width: 12),
      Expanded(
        child: Text(
          'Tip: You can drag and drop items to reorder them.',
          style: TextStyle(
            // CORRECT: Static info/guidance text
            color: context.faColors.ink.info,
            fontSize: 14,
          ),
        ),
      ),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.ink.info` is mapped to a clear, professional blue that ensures high legibility on light and dark surfaces alike.*