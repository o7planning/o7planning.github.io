# Server-Side Execution with BlockBackendAction

This example demonstrates **BlockBackendAction**, a versatile mechanism for triggering
  server-side logic and synchronizing the app state once the remote operation completes.

* **Remote Logic Execution:** **BackendAction** is used for operations where the
  business logic resides on the server. Whether the backend uses application code (Java, Node.js, etc.)
  to process data or executes a database procedure, the Action provides a unified way to
  trigger these processes from the UI.

  * **Automated Synchronization:** It features the `AfterBlockBackendAction.query`
  policy. This ensures that after the server finishes its task, the **Block** automatically
  re-queries the data, keeping the UI perfectly in sync with the new server state.

  * **System-Wide Reactivity:** A successful **BackendAction** can notify other
  parts of the **Shelf**. This allows related **Blocks** or **Scalars** to
  refresh themselves, maintaining data consistency across the entire application.

<i>Technical Focus: Triggering remote business logic and leveraging automated re-querying
to maintain consistency between the client and server.</i>

Refer to `performBackendOperation` in **Related Documentation** to see how
the remote call is initiated.
