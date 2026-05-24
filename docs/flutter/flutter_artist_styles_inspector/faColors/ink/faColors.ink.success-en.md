## faColors.ink.success

The `faColors.ink.success` token defines the semantic green color for static text and icons that indicate completed actions, positive states, or successful validations on expansive **Surface** layers.

### Technical Logic

Under the **Surface - Ink - Stroke** hierarchy, `faColors.ink.success` is tuned to provide a soothing yet clear visual confirmation. It is optimized to maintain an accessible contrast ratio on `faColors.surface.primary` or `secondary`, allowing the user to quickly verify that "Everything is correct" without the visual weight of an interactive button.

> **Usage Guidelines:**
> 
>   
> * **DO:** Use for success messages (e.g., "Payment completed"), positive status indicators, and "check" icons.
> 
>     * **DON'T:** Use as a background color (Fill).
> 
>     * **DON'T:** Use for interactive primary buttons (use `faColors.action.fill.success` or `faColors.action.ink.success` instead).

### Implementation Example


```dart
// Correct usage for a success message on a surface
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    Icon(
      Icons.check_circle_outline,
      // CORRECT: Static success icon
      color: context.faColors.ink.success,
      size: 48,
    ),
    const SizedBox(height: 16),
    Text(
      'Payment successful!',
      style: TextStyle(
        // CORRECT: Static success text
        color: context.faColors.ink.success,
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
    ),
    const SizedBox(height: 8),
    Text(
      'Your transaction ID: #12345',
      style: TextStyle(
        color: context.faColors.ink.secondary,
        fontSize: 14,
      ),
    ),
  ],
)
```

*Note: In the FaColorGraph, `faColors.ink.success` is mapped to a balanced green that symbolizes growth and completion, ensuring it stands out from neutral information.*