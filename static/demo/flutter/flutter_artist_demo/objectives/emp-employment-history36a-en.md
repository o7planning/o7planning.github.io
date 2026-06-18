# Hierarchical Relationships in FormModel

This example demonstrates how to implement **Cascading Dependencies** within a
  **FormModel**, ensuring data integrity during complex data entry tasks like
  recording employment history.

* **Cascading Selection:** Similar to the FilterModel pattern, the **Company**
  and **Department** properties are linked in a parent-child hierarchy. Selecting a
  company automatically filters the available options for the department field.

  * **Context-Aware Data Loading:** The `performLoadMultiOptPropXData`
  method utilizes the `parentMultiOptPropValue` to fetch relevant departments,
  eliminating manual state management between interdependent dropdowns.

  * **Item Detail Extraction:** Shows how to use `extractMultiOptPropValueFromItemDetail`
  to correctly populate hierarchical fields when editing an existing record, keeping the
  UI in sync with the backend entity.

*Technical Focus: Replicating hierarchical cascading logic in FormModel for consistent and validated user inputs.*

Check the `multiOptPropDefs` configuration in **Related Documentation** to see the property nesting.
