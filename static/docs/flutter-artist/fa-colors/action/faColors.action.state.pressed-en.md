## faColors.action.state.pressed

The `faColors.action.state.pressed` token defines the overlay color applied to an interactive element at the exact moment it is clicked or tapped.

### Technical Logic

Under the **Fill - Ink - Stroke** architecture, `pressed` is the deepest state layer. It typically uses a higher opacity than `hover` (usually 10% to 16%) to create a clear tactile sensation. This visual "weight" ensures that users feel an immediate response from the UI, which is crucial for reducing perceived latency in enterprise applications.

> **Dynamic Feedback:**
> 
>   Like the hover state, this is an **overlay**. It is designed to darken or tint the underlying `fill.primary` or `fill.danger`, meaning you don't need a specific "Pressed Red" or "Pressed Blue" – the system handles it dynamically.

### Implementation Example

```dart
// Implementing a tactile feedback on a Button
InkWell(
  onTap: () => print('Action Executed'),
  // Flutter's built-in property for the pressed state
  splashColor: context.faColors.action.state.pressed,
  highlightColor: context.faColors.action.state.pressed,
  child: Container(
    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
    decoration: BoxDecoration(
      color: context.faColors.action.fill.primary,
      borderRadius: BorderRadius.circular(8),
    ),
    child: Text(
      'SUBMIT',
      style: TextStyle(color: context.faColors.action.ink.onPrimaryFill),
    ),
  ),
)
```

*Note: In the FaColorGraph, `faColors.action.state.pressed` is typically a darker neutral overlay that provides a "pressed down" effect by reducing the luminance of the base color.*