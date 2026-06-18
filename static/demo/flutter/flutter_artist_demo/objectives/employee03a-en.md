# Cascading Filters in FilterModel

This example demonstrates a **Parent-Child** relationship between filter criteria,
  ensuring data consistency across multiple selection levels.

* **Cascading Behavior:** When a user selects a value for the **Company** criterion, the **Department** criterion is automatically notified. It then re-fetches its data source to display only the departments belonging to that specific company.

  * **Automatic Context Injection:** The **FilterModel** guarantees that `parentMultiOptTildeCriterionValue` is passed into the `performLoadMultiOptTildeCriterionXData()` method of the child criterion, removing the need for manual state management.

  * **Dynamic UI Update:** The **FilterPanel** reactively updates the available options in the Department dropdown as soon as the Company selection changes, providing a seamless user experience.

*Technical Focus: Mastering hierarchical filter dependencies within a unified FilterModelStructure.*

Refer to the `performLoadMultiOptTildeCriterionXData` logic in **Related Documentation** for details.
