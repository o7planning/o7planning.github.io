## faColors.common.black

The `faColors.common.black` token defines an absolute, hardcoded primitive black constant (`0xFF000000`) that remains entirely unaffected by system theme modifications.

### Technical Logic

In the **Fill - Ink - Stroke** engine architecture, while semantic tokens adjust dynamically via the FaColorGraph, `faColors.common.black` serves as an unyielding visual anchor. It completely bypasses semantic theme resolvers. This ensures that whether the application is rendered in a high-contrast Light Theme or a deeply saturated Dark Theme, this token guarantees a pure black color vector, making it critical for specific backdrop filters, dropshadow casting, low-level stencil masks, or absolute high-contrast printing bounds.

> **The Immutable Constant Rule (DX):**
> 
>   Although this token evaluates to the exact same value as Flutter's native `Colors.black`, developers should always explicitly use `faColors.common.black` when designing components within the FlutterArtist ecosystem. Keeping all baseline declarations bounded inside the `faColors.common` scope makes the source code highly cohesive, readable, and clean.

### Implementation Example


```dart
// Drawing a custom stencil mask or heavy drop shadow layout that must remain strictly black
Container(
  width: 60.0,
  height: 60.0,
  decoration: BoxDecoration(
    color: context.faColors.surface.standard,
    borderRadius: BorderRadius.circular(12),
    boxShadow: [
      BoxShadow(
        // CORRECT: Utilizing the specialized common alias to guarantee pure black shadow baseline
        color: context.faColors.common.black.withOpacity(0.15),
        blurRadius: 8.0,
        offset: const Offset(0, 4),
      ),
    ],
  ),
)
```

*Note: Never use `faColors.common.black` for standard body typography or primary page backgrounds. For standard adaptive layouts, leverage the adaptive ink or surface namespace tokens like `faColors.ink.primary`, keeping pure constants reserved for specialized static elements.*