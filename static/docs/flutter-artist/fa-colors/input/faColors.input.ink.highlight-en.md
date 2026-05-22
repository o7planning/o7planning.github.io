## faColors.input.ink.highlight

The `faColors.input.ink.highlight` token defines the vibrant text color used for emphasizing specific inline characters, match indicators, or mandatory markers within an input scope.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.ink.highlight` functions strictly as a read-only architectural alias pointing directly to the global `faColors.ink.highlight` core engine. It does not possess an independent resolver and cannot be overridden individually, ensuring absolute color consistency across the typography system.

> **The Clean Namespace Rule (DX):**
> 
>   Although this token resolves to the exact same color as `faColors.ink.highlight`, developers should always explicitly use `faColors.input.ink.highlight` when configuring form elements. Keeping all form property declarations bounded within the `faColors.input` scope makes the source code highly cohesive, readable, and clean.

### Implementation Example

```dart
// Explicitly mapping a mandatory field indicator label inside an input layout
Row(
  children: [
    Text(
      'Email Address',
      style: TextStyle(
        color: context.faColors.input.ink.primary,
        fontSize: 14.0,
      ),
    ),
    const SizedBox(width: 2),
    Text(
      '*',
      style: TextStyle(
        // CORRECT: Utilizing the specialized input ink alias for highlighted mandatory marks
        color: context.faColors.input.ink.highlight,
        fontSize: 14.0,
        fontWeight: FontWeight.bold,
      ),
    ),
  ],
)
```

*Note: By centralizing text under the `input.ink` namespace, IDE auto-complete engines can dynamically serve all necessary surface, boundary, and content metrics in a single keypress.*