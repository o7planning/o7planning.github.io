# Filtering with RadioGroup & Cascading Logic

This example demonstrates how to implement a **Parent-Child** filter relationship using
  different UI components to enhance user interaction.

* **RadioGroup Integration:** Instead of a standard dropdown, the **Company** criterion
  uses `FormBuilderRadioGroup`. Điều này allows users to see all available companies
  at a glance and select one with a single click.

  * **Visual Diversity:** It proves that the **FilterModel** is UI-agnostic. Whether
  you use a RadioGroup, a Dropdown, or a Tree, the underlying cascading logic remains identical
  and consistent.

  * **Responsive Dependency:** Selecting a radio option for Company immediately triggers
  the **Department** dropdown to refresh its list, showing only the relevant departments
  for the chosen company.

*Technical Focus: Swapping UI components (RadioGroup vs. Dropdown) while maintaining robust Cascading Filter logic.*

Check the `Employee32aFilterPanel` source code in **Related Documentation** for UI implementation details.
