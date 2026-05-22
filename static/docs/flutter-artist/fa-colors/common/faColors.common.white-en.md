## faColors.common.white

The `faColors.common.white` token defines an absolute, hardcoded primitive white constant (`0xFFFFFFFF`) that remains entirely unaffected by system theme modifications.

### Technical Logic

In the **Fill - Ink - Stroke** engine architecture, while most tokens adapt dynamically via the FaColorGraph, `faColors.common.white` serves as a reliable, immutable anchor. It bypasses semantic theme resolvers completely. This ensures that regardless of whether the application is running in a deeply saturated Dark Theme or a high-contrast Light Theme, this token guarantees a pure white color vector, making it essential for specific graphic overlays, fixed canvas paints, or custom clipping path masks.

> **The Immutable Constant Rule (DX):**
> 
>   Although this token evaluates to the exact same value as Flutter's native `Colors.white`, developers should always explicitly use `faColors.common.white` when designing components within the FlutterArtist ecosystem. Keeping all baseline declarations bounded inside the `faColors.common` scope makes the source code highly cohesive, readable, and clean.

### Implementation Example

```dart
// Drawing a custom painting canvas or badge background that must remain strictly white
Container(
  width: 40.0,
  height: 40.0,
  decoration: BoxDecoration(
    // CORRECT: Utilizing the specialized common alias to guarantee absolute white
    color: context.faColors.common.white,
    shape: BoxShape.circle,
    border: Border.all(
      color: context.faColors.divider.subtle,
    ),
  ),
  child: const Icon(Icons.star_rounded),
)
```

*Note: Never use `faColors.common.white` for standard page or container backgrounds. For standard adaptive layouts, leverage the adaptive surface namespace tokens like `faColors.surface.standard` instead, keeping pure constants reserved for specialized static elements.*