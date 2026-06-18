# Multi-Selection with CheckboxGroup & Default Values

This example demonstrates how to use **CheckboxGroup** for multi-selection in a
  cascading filter while initializing **Initial Default Values**.

* **Visual Multi-Selection:** Instead of a dropdown, the **Department** criterion
  uses `FaFormBuilderCheckboxGroup`. This layout allows users to see all available
  departments at once and select multiple items with high visibility.

  * **Initial Default Values:** Similar to Example 20a, the **FilterModel**
  automatically sets the starting state when the filter is first loaded—selecting the first
  **Company** and all its **Departments** by default.

  * **Flexible UI Components:** It reinforces that **FilterModel** logic is
  independent of UI widgets. You can swap between a `MultiDropdown` and a
  `CheckboxGroup` without changing the core filtering logic.

<i>Technical Focus: Integrating visual multi-select widgets and mastering initial
default value settings for a smooth user start.</i>

Check the `Employee44aFilterPanel` source code in **Related Documentation**
for UI implementation details.
