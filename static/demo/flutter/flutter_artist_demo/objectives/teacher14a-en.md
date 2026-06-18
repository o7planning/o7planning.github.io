# Numbered Pagination with BlockNumberPagination

This example demonstrates a **Web-style** navigation pattern using the
  **BlockNumberPagination** component, ideal for desktop-class applications or data-heavy dashboards.

* **Explicit Page Control:** Users can navigate through large datasets by selecting
  specific page numbers, providing a clear sense of location within the total record count.

  * **State-Aware Navigation:** The **BlockNumberPagination** reactively synchronizes
  with the Block's `Pageable` state. It automatically updates the active page
  highlighting and handles "First/Last" and "Next/Previous" actions.

  * **Configurable Visibility:** Developers can control the number of visible page
  buttons (e.g., `visiblePagesCount: 10`), ensuring the UI remains clean
  even when dealing with hundreds of pages.

*Technical Focus: Implementing structured, non-scrolling pagination logic for high-density information management.*

Check the `BlockNumberPagination` configuration in **Related Documentation** for UI customization details.
