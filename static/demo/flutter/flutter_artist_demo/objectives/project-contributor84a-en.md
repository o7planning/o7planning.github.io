# Global Coordination with StorageBackendAction

This example demonstrates **StorageBackendAction**, a global-level execution mechanism that
  triggers server-side logic from outside any specific **Shelf**, ensuring cross-component
  synchronization.

* **High-Level Execution:** Unlike Block-specific actions, **StorageBackendAction**
  is executed directly by the **Storage**. It is designed for operations whose impact
  spans across multiple Shelves or global application states.

  * **Event-Driven Reactivity:** Upon success, the action emits global events (e.g.,
  `Event(ContributorInfo)`). This acts as a broadcast signal to any Block or
  Scalar within the application that is registered to listen.

  * **External Event Subscription:** It highlights the `onExternalShelfEvents`
  configuration in the **BlockConfig**. This allows a Block to stay informed and
  automatically refresh its data even when the change was initiated by a global or
  external action.

<i>Technical Focus: Mastering global action lifecycles and cross-Shelf communication using
Storage-level events and external listeners.</i>

Refer to `onExternalShelfEvents` in the **Contributor84aBlock** configuration
to see how the listener is implemented.
