## faColors.input.ink.primary

The `faColors.input.ink.primary` token defines the primary text color for user-entered values inside an active input field.

### Technical Logic

In the **Fill - Ink - Stroke** architecture, `faColors.input.ink.primary` functions strictly as a read-only architectural alias pointing directly to the global `faColors.ink.primary` core engine. It does not possess an independent resolver and cannot be overridden individually, ensuring absolute color consistency across the typography system.

> **The Clean Namespace Rule (DX):**
> 
>   Although this token resolves to the exact same color as `faColors.ink.primary`, developers should always explicitly use `faColors.input.ink.primary` when configuring form elements. Keeping all form property declarations bounded within the `faColors.input` scope makes the source code highly cohesive, readable, and clean.

### Implementation Example

```dart
// Explicitly mapping input values within a standard Flutter TextField
TextField(
  style: TextStyle(
    // CORRECT: Utilizing the specialized input ink alias for high-contrast typing text
    color: context.faColors.input.ink.primary,
    fontSize: 16.0,
  ),
  decoration: InputDecoration(
    filled: true,
    fillColor: context.faColors.input.fill.enabled,
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(color: context.faColors.input.stroke.enabled),
    ),
  ),
)
```

*Note: By centralizing text under the `input.ink` namespace, IDE auto-complete engines can dynamically serve all necessary surface, boundary, and content metrics in a single keypress.*