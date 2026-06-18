# Multi-Sorting with Segmented and Dialog Panels

This example demonstrates advanced **Multi-level Sorting** using **SegmentedSortPanel** and **DialogSortPanel**, focusing on optimized user workflows and controlled data querying.

* **Segmented Selection:** The **SegmentedSortPanel** offers a compact, horizontal selection interface, perfect for quick toggling between primary sorting criteria in a modern, sleek design.
* **Batch Configuration (DialogSortPanel):** Introduces a "Prepare-then-Apply" workflow. Users can meticulously configure multiple sorting layers—adjusting priorities and directions within a dedicated dialog—and only trigger a data refresh once they click **Apply**.
* **Efficiency & Performance:** By using the Dialog pattern, the application reduces unnecessary API calls, as the **Block** only executes `performQuery` after the final multi-sort configuration is confirmed.
* **Multi-Sort Integrity:** Maintains full compatibility with `SortMode.multi`, ensuring that complex business logic like *Category > Amount > Product* is handled accurately across different UI presentations.

---

> **Technical Focus:** *Leveraging Dialog-based sorting to minimize redundant network requests and providing a professional batch-update UX.*

Check the `DialogSortPanel` implementation in **Related Documentation** to see the "Apply" logic in action.
