## faColors.ink.label

The `faColors.ink.label` token defines the specific color for structural identifiers such as input field labels, table headers, and form titles on expansive **Surface** layers.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.ink.label` provides a professional, medium-to-high contrast that distinguishes "Metadata Labels" from "Actual Data". It is designed to be persistent and stable, ensuring that the structure of the UI remains visible and organized at a glance.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use for form labels (e.g., "Email Address"), column headers in DataGrids, and category titles.</li>
>     <li>**DON'T:** Use for placeholder text (use `faColors.ink.muted` instead).</li>
>     <li>**DON'T:** Use as a background color or inside small interactive components like **Chips or Badges**.</li>
>   </ul>

### Implementation Example

```dart
// Correct usage for form labels and data structure
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'FULL NAME',
      style: TextStyle(
        // CORRECT: Label ink for formal field identification
        color: context.faColors.ink.label,
        fontSize: 12,
        fontWeight: FontWeight.w600,
        letterSpacing: 1.1,
      ),
    ),
    const SizedBox(height: 8),
    Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: context.faColors.surface.secondary,
        borderRadius: BorderRadius.circular(4),
      ),
      child: Text(
        'Johnathan Doe',
        style: TextStyle(
          // CORRECT: Primary ink for the actual data
          color: context.faColors.ink.primary,
          fontSize: 16,
        ),
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.label` is often tuned to be slightly more "stony" or neutral than primary ink to maintain a clear distinction between the form's skeleton and its content.*