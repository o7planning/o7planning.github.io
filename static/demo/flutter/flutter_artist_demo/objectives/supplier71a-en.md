# Batch Optimization: Deferring ExternalShelfEvent(s)

This example demonstrates a high-performance optimization technique: **Deferring ExternalShelfEvent(s)**.
  It illustrates how events are consolidated and triggered only when an **EndDrawer** is closed.

* **Event Deferral Pattern:** Instead of broadcasting signals immediately for every
  data change, events are queued while the **EndDrawer** remains open. This prevents
  unnecessary UI flickers and redundant processing during active editing sessions.

  * **Consolidation on Close:** The core highlight is the **Aggregation Logic**.
  When the EndDrawer is dismissed, FlutterArtist gathers all queued events, performs
  de-duplication, and executes them as a single batch.

  * **Network & CPU Efficiency:** By batching reactions (e.g., combining multiple
  SupplierData updates into one), the system significantly reduces the load on the
  API and minimizes the number of re-queries performed by recipient Blocks.

  * **Implementation:** Shows the use of
  `openEndDrawerAndDeferExternalShelfEventsUntilClosed()`, a strategic method
  to manage event lifecycles in complex side-panel workflows.

*Technical Focus: Mastering event aggregation upon EndDrawer closure to build highly optimized, reactive enterprise systems.*

Note: The next example (**supplier71b**) will demonstrate this same deferral mechanism applied to **Dialogs**.
