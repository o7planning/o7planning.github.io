## faColors.ink.muted

The `faColors.ink.muted` token defines the lowest-contrast color for non-essential content on large **Surface** layers. It is primarily used for placeholder text, disabled states of static elements, and very minor hints.

### Technical Logic

Under the **Surface - Ink - Stroke** hierarchy, `faColors.ink.muted` is designed to sit at the edge of legibility. Its purpose is to signal that the information is either "secondary to the secondary" or currently "inactive". This ensures that the user's cognitive focus remains entirely on the primary and secondary information.

> **Usage Guidelines:**
> 
>   
> * **DO:** Use for input placeholders (e.g., "Enter your name..."), disabled labels, and non-critical helper text.
> 
>     * **DON'T:** Use for any content that requires guaranteed readability for all users (be mindful of accessibility/WCAG).
> 
>     * **DON'T:** Use for interactive components like **Buttons or Chips**.

### Implementation Example


```dart
// Correct usage for placeholder and disabled static text
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Search query',
      style: TextStyle(
        // CORRECT: Label for the field structure
        color: context.faColors.ink.label,
        fontSize: 12,
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
        'Type to search...',
        style: TextStyle(
          // CORRECT: Muted ink for placeholder suggestion
          color: context.faColors.ink.muted,
          fontSize: 14,
          fontStyle: FontStyle.italic,
        ),
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.muted` is typically a very soft gray with low opacity, ensuring it "fades" into the surface background.*