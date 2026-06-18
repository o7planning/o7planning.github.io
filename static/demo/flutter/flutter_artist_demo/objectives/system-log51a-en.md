# Bulk Actions: Mastering Multi-Selection and Multi-Check

This example demonstrates the sophisticated **Bulk Management** capabilities of FlutterArtist,
  designed for high-efficiency data administration and professional workflows.

* **Dual-Layer Marking:** Learn to distinguish between **Selection** (highlighting items
  for focus) and **Checking** (marking items for batch operations). This dual-layer approach
  provides maximum flexibility for complex user interactions.

  * **Comprehensive Control API:** Explore the Block's built-in methods for aggregate
  manipulation, including `selectAllItems()`, `checkAllItems()`, and
  their counterparts for quick state resetting.

  * **Precise Deletion Logic:** Highlights the `CurrentItemInclusion` mechanism,
  allowing developers to define exactly how the "Current Item" is treated during bulk deletion
  (Include, Exclude, or IfMatch), preventing accidental data loss of the active record.

  * **Clean State Management:** Showcases the `clearCurrentItem()` feature,
  essential for scenarios where the UI needs to return to a neutral state without any active
  record selection.

<i>Technical Focus: Utilizing Block's aggregate state management for professional data-grid
manipulation and safe batch deletion procedures.</i>

Refer to the **Delete Method** implementations in `SystemLog51aButtons` to
see how inclusion policies are applied.
