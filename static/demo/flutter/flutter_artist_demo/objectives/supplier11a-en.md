# Core FormModel & Data Synchronization

This example demonstrates the fundamental usage of **FormModel** to manage state,
  validation, and data submission within a professional CRUD workflow.

* **Declarative Property Definition:** Use `defineFormModelStructure` to
  declare form fields and their data types (String, bool, dynamic). Each property in the model
  directly maps to an **InputField** in the UI.

  * **State Management:** The **FormView** reactively observes the model. As users
  type or select options, the **FormModel** automatically collects and centralizes
  this information into a unified `Map&lt;String, dynamic&gt;`.

  * **CRUD Execution:** Shows how the gathered data is passed into `performCreateItem()`
  or `performUpdateItem()`, allowing for a clean separation between UI components
  and API communication logic.

*Technical Focus: Mastering the lifecycle of form data from UI input to structured Map objects for API integration.*

Explore `Supplier11aFormModel` in the **Related Documentation** to see the property mapping details.
