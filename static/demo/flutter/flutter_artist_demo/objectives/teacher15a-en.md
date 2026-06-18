# Programmatic Pagination & Custom Control

This example demonstrates how to manually interact with the **Pagination API** of a Block,
  allowing developers to build custom navigation experiences beyond standard widgets.

* **Block Pagination API:** Explore the core methods for data navigation, including
  `queryNextPage()`, `queryPreviousPage()`, and `queryMore()`.
  These methods provide full control over how and when data is fetched.

  * **Load More Pattern:** The `queryMore()` method highlights the "Infinite Scroll"
  logic by fetching the next page and seamlessly appending it to the existing list instead of
  replacing it.

  * **Real-time Metadata Tracking:** Shows how to access `Block.paginationInfo`
  to display essential stats like Total Items, Current Page, and Total Pages, keeping the
  user informed about the data context.

*Technical Focus: Direct interaction with Block paging methods and monitoring pagination metadata for custom UI integration.*

Refer to `Teacher15aPaginationCtrl` in **Related Documentation** for the full implementation of manual paging actions.
