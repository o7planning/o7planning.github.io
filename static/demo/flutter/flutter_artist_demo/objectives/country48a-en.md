# Infinite Scroll Pagination with NotificationListener

This example demonstrates the **Infinite Scroll** pattern, providing a fluid and uninterrupted browsing experience commonly found in modern social media and mobile apps.

* **Dynamic Content Loading:** Instead of clicking page numbers, data is fetched automatically as the user reaches the end of the list. This creates a seamless flow that encourages continuous content discovery.
* **Scroll Event Detection:** By utilizing `NotificationListener<ScrollEndNotification>`, the system intelligently detects when the user has hit the `maxScrollExtent` to trigger the next data fetch.
* **Efficient Data Appending:** Leverages the `block.queryMore()` method to retrieve the next batch of records and append them to the current list without re-rendering existing items, ensuring high performance.

---

> **Technical Focus:** *Integrating Flutter's scroll notifications with Block's pagination API to achieve a high-performance infinite list.*

Refer to `_onScrollEndNotification` in **Related Documentation** to see the reach-bottom detection logic.
