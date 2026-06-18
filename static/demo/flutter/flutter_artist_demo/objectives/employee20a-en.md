# Filter Initialization & Default Values

This example demonstrates the **Cascading Filter** pattern combined with the ability
  to define **Initial Default Values** for search criteria.

* **Initial State Setup:** When the **FilterModel** is first loaded, it automatically
  populates the criteria with predefined values. For instance, it can select the first
  **Company** and all its associated **Departments** to provide an immediate result set.

  * **Cascading Hierarchy:** Shows a Parent-Child relationship where the **Department**
  list (Multi-selection) dynamically adjusts its available options based on the selected
  **Company** (Single-selection).

  * **User-Friendly Start:** By setting defaults during the initial load, the system
  reduces the number of clicks required for a user to see the first relevant batch of data.

*Technical Focus: Mastering `specifyDefaultValue` to configure the filter's starting state.*

Check the **Related Documentation** for details on implementing default value logic.
