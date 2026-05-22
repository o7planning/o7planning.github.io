## faColors.ink.danger

The `faColors.ink.danger` token defines the semantic red color for static text and icons that indicate errors, critical alerts, or dangerous states on expansive **Surface** layers.

### Technical Logic

Under the **Surface - Ink - Stroke** hierarchy, `faColors.ink.danger` is optimized for high visibility and rapid recognition. It is specifically tuned to maintain a strong contrast ratio on `faColors.surface.primary` or `secondary`, ensuring that users can immediately identify "What went wrong" without needing an interactive button.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use for validation error messages (e.g., "Invalid password"), critical status labels, and error icons.</li>
>     <li>**DON'T:** Use as a background color (Fill).</li>
>     <li>**DON'T:** Use for interactive buttons (use `faColors.action.fill.danger` or `faColors.action.ink.danger` instead).</li>
>   </ul>

### Implementation Example

```dart
// Correct usage for an error message on a surface
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Credit Card Number',
      style: TextStyle(
        color: context.faColors.ink.label,
        fontSize: 12,
      ),
    ),
    const SizedBox(height: 8),
    // ... Input Field Stroke here ...
    const SizedBox(height: 4),
    Row(
      children: [
        Icon(
          Icons.error_outline,
          // CORRECT: Static error icon
          color: context.faColors.ink.danger,
          size: 14,
        ),
        const SizedBox(width: 4),
        Text(
          'The card number is incorrect',
          style: TextStyle(
            // CORRECT: Static error message text
            color: context.faColors.ink.danger,
            fontSize: 12,
          ),
        ),
      ],
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.danger` is mapped to a high-saturation red that commands attention while remaining comfortable enough for reading short phrases.*