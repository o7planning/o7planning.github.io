## faColors.action.ink.selected

The `faColors.action.ink.selected` token defines the color for text and icons in interactive elements that are in a persistent "Selected" state but do not have a background fill.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.action.ink.selected` provides a clear visual signal of selection through foreground color alone. It is visually identical to `faColors.action.fill.selected` (or its primary brand equivalent) to ensure brand consistency across different component styles.

> **Standalone Visibility:**
> 
>   This token is optimized for standalone elements. Because it uses a high-chroma brand color, it remains clearly visible when placed on neutral `faColors.surface.xxx` layers, making it the perfect choice for selected Tab labels or navigation icons.

### Implementation Example


```dart
// Creating a selected Tab item (No Background)
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    Text(
      'Active Tab',
      style: TextStyle(
        // CORRECT: Primary brand color for selected state ink
        color: context.faColors.action.ink.selected,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 4),
    // Underline indicator using the same logic
    Container(
      width: 20,
      height: 2,
      color: context.faColors.action.ink.selected,
    ),
  ],
)
```

*Note: Never use this token on top of `faColors.action.fill.selected`. Use `faColors.action.ink.onSelectedFill` for that scenario to ensure accessibility.*