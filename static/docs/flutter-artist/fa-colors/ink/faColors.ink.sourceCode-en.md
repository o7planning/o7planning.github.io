## faColors.ink.sourceCode

The `faColors.ink.sourceCode` token is specifically designed for rendering technical text, code snippets, and monospaced data.

### Technical Logic

As a specialized member of the **Ink** namespace, this token ensures optimal legibility for character-heavy content. It typically uses a neutral but distinct tone to separate logic from prose, providing a "Terminal-like" feel while respecting the contrast requirements of the underlying **Surface**.

> **Usage Guidelines:**
> 
>   <ul>
>     <li>**DO:** Use with monospaced fonts (e.g., Courier, Fira Code) for logs or code blocks.</li>
>     <li>**DO:** Use for inline technical values like UUIDs, Hash strings, or SQL queries.</li>
>     <li>**DON'T:** Use as the primary text color for standard UI labels.</li>
>     <li>**DON'T:** Apply to interactive elements like clickable links (unless it's a code-specific action).</li>
>   </ul>

### Implementation Example

```dart
// Wrap in a Container with a muted surface for better context
Container(
  padding: const EdgeInsets.all(12),
  decoration: BoxDecoration(
    color: context.faColors.surface.muted,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    'git commit -m "feat: simplify namespaces"',
    style: TextStyle(
      fontFamily: 'monospace',
      // The dedicated ink for technical strings
      color: context.faColors.ink.sourceCode,
    ),
  ),
)
```

*Note: While `faColors.ink.highlight` emphasizes meaning, `faColors.ink.sourceCode` emphasizes the technical nature of the content.*