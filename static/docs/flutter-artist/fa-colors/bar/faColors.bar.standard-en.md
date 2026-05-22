## faColors.bar.standard

The `faColors.bar.standard` token defines the default background color for primary toolbars, application bars (AppBar), and main navigation headers.

### Technical Logic

Under the **Surface - Ink - Stroke** architecture, `faColors.bar.standard` provides a clear structural anchor. It is designed with enough contrast to distinguish functional headers from the `faColors.surface` layers, creating a professional and organized hierarchy for enterprise-grade layouts.

> **The Functional Anchor:**
> 
>   This is the go-to token for the main AppBar or any persistent navigation component. It provides a stable "home" for primary actions, titles, and branding elements. Pair this with `faColors.ink.primary` or `faColors.action.xxx` for optimal clarity.

### Implementation Example

```dart
// Standard Application Bar implementation
Container(
  height: 64,
  padding: const EdgeInsets.symmetric(horizontal: 16),
  decoration: BoxDecoration(
    // The reliable standard bar background
    color: context.faColors.bar.standard,
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(0.05),
        blurRadius: 4,
        offset: const Offset(0, 2),
      ),
    ],
  ),
  child: Row(
    children: [
      Icon(Icons.menu, color: context.faColors.ink.primary),
      const SizedBox(width: 16),
      Text(
        'Inventory Management',
        style: TextStyle(
          color: context.faColors.ink.primary,
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
      ),
      const Spacer(),
      CircleAvatar(backgroundColor: context.faColors.surface.secondary),
    ],
  ),
)
```

*Note: In the FaColorGraph, `faColors.bar.standard` is typically mapped to a solid neutral or a very subtle brand-tinted surface that ensures long-term visual comfort for the user.*