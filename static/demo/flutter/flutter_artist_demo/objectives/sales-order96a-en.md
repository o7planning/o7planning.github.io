# Seamless Parent-Child Sync with InternalShelfEvent

This example illustrates the **InternalShelfEvent** mechanism, where components within
  the same **Shelf** act as a unified entity to maintain real-time data consistency.

* **Internal Reactivity:** When a `SalesOrderLine` is created, modified,
  or deleted, it automatically triggers an internal signal. The parent `SalesOrderBlock`
  receives this and refreshes itself to show updated totals (Amount, Tax, etc.).

  * **Item-Level Reaction:** Highlights the `itemLevelReactionOn` configuration.
  Instead of re-querying the entire list, the **Block** intelligently reloads only the
  **current active item**, ensuring a high-performance and smooth user experience.

  * **Unified Entity Logic:** Demonstrates how Blocks, Scalars, and Shelves coordinate
  seamlessly. Any action—from Form saves to QuickActions or BackendActions—within the
  Shelf triggers these internal reactions automatically.

  * **Automated Data Integrity:** Eliminates the need for manual refresh logic,
  ensuring that the Header and Detail views are always in perfect synchronization.

*Technical Focus: Leveraging InternalShelfEventBlockRecipient to automate data refreshing between hierarchical Blocks within a single Shelf.*

Refer to `Evt.ofBlock` in the **SalesOrder96aShelf** configuration to see how internal dependencies are defined.
