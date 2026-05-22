## faColors.action.ink.info

The `faColors.action.ink.info` token defines the semantic information color (blue) specifically for text, icons, and vector graphics used in interactive informational actions.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.ink.info` is visually aligned with the info fill palette. The "Ink" designation ensures that guidance-related content remains sharp and maintains professional contrast when placed directly on neutral `faColors.surface.xxx` layers.

> **Informational Affordance:**
> 
>   Use this token for **TextButtons** like "Details" or "Read Manual" and standalone icons that provide extra context. It distinguishes helpful information from primary brand actions, creating a clearer hierarchy of intent.

### Implementation Example

```dart
// Creating an Informational Text Button (No Background)
Row(
  children: [
    Icon(
      Icons.help_center_rounded,
      // CORRECT: Use info ink for a standalone guidance icon
      color: context.faColors.action.ink.info,
      size: 18,
    ),
    const SizedBox(width: 4),
    TextButton(
      onPressed: () {},
      child: Text(
        'Learn More About This Feature',
        style: TextStyle(
          // CORRECT: Semantic info color for interactive text
          color: context.faColors.action.ink.info,
          fontWeight: FontWeight.w500,
        ),
      ),
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.info`. Use `faColors.action.ink.onInfoFill` to ensure optimal contrast and legibility.*