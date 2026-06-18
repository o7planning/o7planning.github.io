# Bulk Creation with BlockQuickMultiItemCreationAction

This example demonstrates how to efficiently perform **Bulk Actions** to create multiple
  items at once, featuring flexible **Confirmation Policies** to ensure data safety.

* **High-Efficiency Batching:** `BlockQuickMultiItemCreationAction` allows
  developers to trigger the creation of multiple records in a single execution. The **Block**
  automatically integrates the returned `PageData` into the current list.

  * **Flexible Confirmation Levels:** It showcases three distinct user experience patterns:
    <ul>
      <li>**No Confirmation:** Instant execution for high-speed tasks.

      * **Default Dialog:** Uses the framework's built-in confirmation UI to prevent accidental clicks.

      * **Custom Dialog:** Demonstrates full control by providing a specialized `CustomConfirmation`
      widget for complex verification scenarios.


  </li>
  * **Seamless State Sync:** Upon success, all new items are synchronized with the
  internal data state, reflecting the changes across the entire **Block** without manual query calls.

</ul>


*Technical Focus: Managing multi-record insertion lifecycles and customizing confirmation workflows for robust action execution.*

Refer to `createCustomConfirmation` in **Related Documentation** to see how
custom dialogs are integrated into the action flow.
