# Simple Master-Detail Relationship

This example demonstrates how to implement a **Master-Detail** link between two blocks, where the child data is automatically filtered based on the parent's selection.

* **Automatic Synchronization:** When a user selects a **Category** (Parent Block), the **Product Block** (Child) is notified to refresh its data.
* **Data Fetching:** The Child Block uses the `parentBlockCurrentItem` parameter within its `performQuery()` method to fetch only the products belonging to the active Category.
* **Detail Overlay:** Detailed product information is displayed using a **BlockItemDetailView** hosted inside a Dialog, keeping the main workspace clean and focused.

---

> **Technical Focus:** *Mastering Parent-Child data flow using the `parentBlockCurrentItem` context.*

Check the **Related Documentation** to see the `performQuery` implementation details.
