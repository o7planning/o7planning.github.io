# Reactive Statistics with Scalar-Level Event Listening

This example demonstrates how a **Scalar** (representing summary data or statistics)
  reactively updates itself in response to events triggered by external **Blocks**.

* **Cross-Shelf Statistics Sync:** `SystemReport24aScalar` manages global
  counts (Employees, Suppliers, Products). It needs to stay accurate even when data is
  modified in a completely different part of the system like `SingleSupplierShelf`.

  * **Scalar-Level Reaction:** Using `scalarLevelReactionOn: [Event(SupplierData)]`,
  the Scalar becomes an observer. The moment a new supplier is created, the Scalar
  intercepts the event and triggers its own `performQuery()` to fetch updated counts.

  * **Event Broadcaster:** Reinforces the `SingleSupplierBlock` role as an
  emitter. By broadcasting `SupplierData` events, it ensures that all interested
  components—whether they are Lists (Blocks) or Stats (Scalars)—can react accordingly.

  * **Dashboard Integration Pattern:** Highlights a professional pattern for building
  real-time Dashboards where summary widgets automatically reflect granular data changes
  without manual page reloads.

*Technical Focus: Implementing high-performance reactive dashboards by bridging Block-level actions with Scalar-level event recipients.*

Refer to `ExternalShelfEventScalarRecipient` in **Related Documentation** to see the listener configuration for Scalars.
