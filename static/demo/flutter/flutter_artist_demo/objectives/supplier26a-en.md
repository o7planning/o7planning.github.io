# Programmatic Form Patching with FormInput

This example demonstrates how to use **FormInput** to programmatically update or "patch"
  multiple fields within a **FormModel**, bypassing manual user entry.

* **Automated Data Entry:** Shows how `formModel.patchFormFields()` can
  take a `Supplier26aFormInput` object and automatically fill corresponding
  UI components (TextFields, Dropdowns, etc.) with new values.

  * **Intelligent Data Mapping:** The `extractUpdateValuesForSimpleProps`
  method illustrates how raw input data is mapped to specific form properties,
  ensuring the internal state remains consistent with the visual representation.

  * **Complex Object Resolution:** Demonstrates how to use a simple code
  (e.g., "DI") from the input to automatically find and select the correct complex
  object (`SupplierTypeInfo`) within a dropdown via `extractUpdateValueForMultiOptProp`.

*Technical Focus: Mastering programmatic form manipulation for advanced UX scenarios like auto-fill or external data integration.*

Check the `_patchFormFields26a` logic in **Related Documentation** to see the "magic" in action.
