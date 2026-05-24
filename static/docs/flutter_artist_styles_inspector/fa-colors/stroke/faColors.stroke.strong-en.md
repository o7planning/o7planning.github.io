## faColors.stroke.strong

The `faColors.stroke.strong` token represents the highest level of structural emphasis. It is used to signal active focus, primary navigation indicators, or critical separation between high-level layout sections.

### Technical Logic

In the **Surface - Ink - Stroke** hierarchy, `faColors.stroke.strong` commands maximum visual attention. It is designed to act as a definitive guide for the user's eye. When applied to a border, it usually indicates that the element is "Active", "In Focus", or serves as a major structural pillar of the application.

> **The Focus & Indicator Rule:**
> 
>   Always use `faColors.stroke.strong` for the focused state of interactive elements (like TextFields) or as the underline indicator for selected Tabs. This ensures high accessibility for all users by providing unmistakable visual feedback.

### Implementation Example


```dart
// Highlighting a focused input field or a selected tab indicator
Container(
  decoration: BoxDecoration(
    border: Border(
      bottom: BorderSide(
        // CORRECT: Use strong stroke for the active indicator
        color: isSelected
            ? context.faColors.stroke.strong
            : Colors.transparent,
        width: 2,
      ),
    ),
  ),
  child: Text(
    'ACTIVE TAB',
    style: TextStyle(
      color: isSelected
          ? context.faColors.ink.primary
          : context.faColors.ink.muted,
      fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
    ),
  ),
)
```

*Note: Use `faColors.stroke.strong` sparingly. Overusing high-contrast borders can make the UI feel "boxy" and heavy.*