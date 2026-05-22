## faColors.ink.highlight

The `faColors.ink.highlight` token is a specialized typography color used to draw immediate attention to specific words, phrases, or technical markers within a body of text.

### Technical Logic

Moving from the legacy *Special* namespace to **Ink**, this token serves as a "High-Visibility Ink". It is designed with a vibrant hue (often the brand's primary or a bright accent) to ensure that highlighted terms stand out against standard `faColors.ink.primary` text while maintaining strict contrast ratios on all **Surface** layers.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use for keyword highlighting in search results, important technical terms, or "New" badges.</li>
>     <li>**DO:** Use for inline spans (e.g., `RichText`) to emphasize specific segments.</li>
>     <li>**DON'T:** Use for long paragraphs (it causes visual fatigue).</li>
>     <li>**DON'T:** Use for links (use `faColors.action.ink.primary` for interactive elements).</li>
>   </ul>

### Implementation Example

```dart
// Using RichText to highlight a specific keyword
RichText(
  text: TextSpan(
    style: TextStyle(color: context.faColors.ink.primary),
    children: [
      const TextSpan(text: 'FlutterArtist is an '),
      TextSpan(
        text: 'Enterprise-grade',
        style: TextStyle(
          // Highlighting the key attribute
          color: context.faColors.ink.highlight,
          fontWeight: FontWeight.bold,
        ),
      ),
      const TextSpan(text: ' framework.'),
    ],
  ),
)
```

*Note: Unlike `faColors.ink.info`, which represents a system state, `faColors.ink.highlight` is purely stylistic and used for content emphasis.*