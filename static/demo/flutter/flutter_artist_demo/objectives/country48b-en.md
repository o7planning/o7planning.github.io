# Infinite Scroll with Sentinel Trigger Strategy

This example demonstrates the **Sentinel Trigger** technique for infinite scrolling—a robust strategy that leverages Flutter's lazy-rendering to automate data fetching.

* **The Sentinel Principle:** A special "sentinel" widget is appended to the end of the list. Because `ListView.builder` only renders visible items, the act of scrolling the sentinel into view automatically triggers the background loading logic.
* **Frictionless Loading:** By utilizing `Future.microtask()` within the sentinel's build cycle, the **Block** initiates a `queryMore()` call safely, ensuring no frame drops or build-phase conflicts.
* **Dynamic UI Feedback:** The sentinel is not just a trigger; it also serves as a **CustomPaginationLoading** widget, providing immediate visual feedback to the user that more content is on its way.

---

> **Technical Focus:** *Implementing self-triggering pagination using the Sentinel pattern for cleaner, more declarative scroll logic.*

Check the `itemBuilder` logic in **Related Documentation** to see how the sentinel is integrated.
