# Basic Data Block Example

This example demonstrates how a **Data Block** manages and synchronizes the
  **Current Item** state across multiple UI components.

* **Currency Selection (Left):** When a user selects a record, the `block.refreshItemAndSetAsCurrent()` method is triggered. This refreshes the object data and marks it as the active item in the global Block state.

  * **Detail Rendering (Right):** The **BlockItemDetailView** reactively listens to the Block. It automatically re-renders whenever the **Current Item** is updated or refreshed.

  * **Record Navigation:** Actions like **Next** or **Previous** invoke methods to fetch the adjacent record and set it as the new **Current Item**, ensuring the UI remains perfectly in sync.

*Technical Focus: Understanding reactive data synchronization through Current Item management.*

Check the **Related Documentation** for a deeper dive into the method implementation.
