## faColors.ink.secondary

The `faColors.ink.secondary` token defines the medium-contrast color for supporting text and non-critical icons on large **Surface** layers. It helps create a clear information hierarchy by de-emphasizing supplementary details.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.ink.secondary` provides enough contrast for legibility while visually receding compared to `faColors.ink.primary`. This prevents visual fatigue in data-rich layouts by guiding the user's focus to the primary information first.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use for sub-headers, descriptions, timestamps, and secondary metadata on main surfaces.</li>
>     <li>**DON'T:** Use for primary body text or critical alerts.</li>
>     <li>**DON'T:** Use inside small interactive components like **Buttons or Badges** (keep the specialized action inks for those).</li>
>   </ul>

### Implementation Example

```dart
// Correct usage for secondary descriptive text
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(
      'Account Balance',
      style: TextStyle(
        color: context.faColors.ink.primary, // Main information
        fontSize: 18,
      ),
    ),
    const SizedBox(height: 4),
    Text(
      'Last updated 2 minutes ago',
      style: TextStyle(
        // CORRECT: Secondary ink for supporting metadata
        color: context.faColors.ink.secondary,
        fontSize: 12,
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.secondary` is often a slightly desaturated or lighter version of the primary ink to create a natural visual step-down.*