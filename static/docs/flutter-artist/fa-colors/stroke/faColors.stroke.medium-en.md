## faColors.stroke.medium

The `faColors.stroke.medium` token acts as the standard structural anchor for the UI. It provides a clear, professional boundary that defines components as distinct functional blocks.

### Technical Logic

Within the **Surface - Ink - Stroke** architecture, `faColors.stroke.medium` offers the perfect balance between visibility and neutrality. It is strong enough to define the "Box" of a major component (such as a Card, Sidebar, or Modal) but subtle enough to be used multiple times on a single page without causing visual clutter or heavy lines.

> **The Structural Rule:**
> 
>   Use `faColors.stroke.medium` when you need to define the outer perimeter of a container. For internal decorations or lighter separation within those containers, consider using `faColors.stroke.subtle` instead.

### Implementation Example


```dart
// Defining a clear boundary for a Card or Container
Container(
  decoration: BoxDecoration(
    color: context.faColors.surface.standard,
    border: Border.all(
      // CORRECT: Use medium stroke for component boundaries
      color: context.faColors.stroke.medium,
      width: 1,
    ),
    borderRadius: BorderRadius.circular(12),
  ),
  child: const Padding(
    padding: EdgeInsets.all(16),
    child: Text(
      'Functional Block Content',
      style: TextStyle(color: context.faColors.ink.primary),
    ),
  ),
)
```

*Note: `faColors.stroke.medium` is the primary choice for the overall layout's structural integrity.*