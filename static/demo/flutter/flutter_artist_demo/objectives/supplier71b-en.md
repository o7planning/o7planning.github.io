# Batch Optimization: Deferring ExternalShelfEvent(s) on Dialog

This example demonstrates the **Event Deferral** mechanism applied to **Dialogs**.
  It highlights how multiple signals are consolidated and only broadcast when the Dialog is dismissed.

* **Dialog-Based Deferral:** When a user modifies data within a popup, immediate event
  broadcasting is paused. This ensures the background UI remains stable and doesn't waste
  resources on redundant re-renders while the user is still interacting with the Dialog.

  * **Aggregation upon Dismissal:** The core feature is the **Automatic Consolidation**.
  Once the Dialog closes, FlutterArtist analyzes the queued events, merges duplicates,
  and triggers a single batch of reactions across all recipient Blocks and Scalars.

  * **Optimized Network Usage:** By waiting for the Dialog to close before querying,
  the application reduces the number of hits to the server, resulting in a more performant
  and professional Enterprise-grade experience.

  * **Seamless Implementation:** Showcases `openDialogAndDeferExternalShelfEventsUntilClosed()`,
  allowing developers to wrap any dialog in an event-deferred container with a single method call.

*Technical Focus: Mastering event aggregation upon Dialog closure to balance high interactivity with optimized system performance.*

Refer to `openDialogAndDeferExternalShelfEventsUntilClosed` in **Related Documentation** to see the implementation details.
