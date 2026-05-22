## faColors.action.stroke.subtle

The `faColors.action.stroke.subtle` token defines a very faint border color for interactive elements, used to provide low-contrast structural definition for secondary zones or input containers.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `faColors.action.stroke.subtle` uses a low-opacity neutral tone. Its primary purpose is to "ghost" a boundary, making it ideal for grouping related actions or defining the hit area of a subtle interactive card without cluttering the visual field with dark lines.

> **High-Density UI:**
> 
>   This token is your best friend in dense data environments. Use it for borders of non-critical items or to separate segments within a tool-bar. It maintains order while keeping the interface feeling open and breathable.

### Implementation Example


```dart
// Defining a subtle interactive container/card
Container(
  decoration: BoxDecoration(
    color: context.faColors.surface.primary,
    border: Border.all(
      // A barely-there border for secondary structure
      color: context.faColors.action.stroke.subtle,
      width: 1.0,
    ),
    borderRadius: BorderRadius.circular(4),
  ),
  child: ListTile(
    title: Text('Secondary Option'),
    trailing: Icon(Icons.chevron_right, color: context.faColors.action.ink.muted),
  ),
)
```

*Note: In the FaColorGraph, this token is typically mapped to a very light gray or a low-opacity divider color, optimized for stacking on various surface levels.*