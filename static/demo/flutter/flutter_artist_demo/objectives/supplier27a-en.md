# Cross-Shelf Synchronization with ExternalShelfEvents

This example demonstrates a complex architectural pattern where two independent **Shelves**
  communicate through events to maintain data consistency across the application.

* **Decoupled Architecture:** `Supplier27aShelf` (the list) and `SingleSupplierShelf`
  (the form) are completely separate. This decoupling allows each component to remain lean
  and reusable.

  * **Event Emission (Emitter):** The `SingleSupplierBlock` is configured with
  `emitExternalShelfEvents: [Event(SupplierData)]`. Whenever a supplier is saved or
  modified, it broadcasts a signal to the entire application.

  * **Block-Level Reaction (Recipient):** `Supplier27aBlock` acts as a listener
  using `blockLevelReactionOn: [Event(SupplierData)]`. Upon hearing the event,
  it automatically re-queries its data to reflect the changes made in the external shelf.

  * **The Coordinator Pattern:** Highlights the use of `Coordinator` to bridge the gap.
  It handles the setup (querying the specific item) and navigation between the list and the
  specialized form shelf.

<i>Technical Focus: Mastering cross-shelf communication and utilizing blockLevelReactionOn
for automated data refreshing in reactive distributed systems.</i>

Refer to `ExternalShelfEventBlockRecipient` in **Related Documentation**
to understand how listeners are configured within the BlockConfig.
