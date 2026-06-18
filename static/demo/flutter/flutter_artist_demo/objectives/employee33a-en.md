# Advanced Custom Filters & Tree Integration

This example demonstrates how to integrate complex custom widgets into the
  **FilterPanel** using `FormBuilderField`, while maintaining reactive
  parent-child relationships.

* **Custom Tree Input:** Instead of a standard dropdown, the **Company** criterion is
  rendered as a **CompanyTreeView**. By wrapping it in `FormBuilderField`, it
  functions as a standard Form input, seamlessly replacing `FormBuilderDropdown`.

  * **Standard Interoperability:** Even with a custom Tree widget, the system maintains
  full compatibility with standard components like the **Department** dropdown. Selecting
  a node in the Tree automatically triggers the cascading logic for the dependent dropdown.

  * **Reactive State Handling:** The use of `field.didChange(item)` ensures that
  the **FilterModel** is instantly notified of user selections within the custom Tree,
  triggering real-time data queries.

*Technical Focus: Transforming any custom UI widget into a standardized Filter Input using FormBuilder wrappers.*

Check the `Employee33aFilterPanel` source code in **Related Documentation** for integration details.
