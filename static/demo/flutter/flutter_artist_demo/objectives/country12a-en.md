# Unified Sorting & API Integration

This example demonstrates the **Dual-Sorting** mechanism using **SortModelBuilder**, focusing on how sorting criteria are seamlessly translated into API parameters.

* **Unified Definition:** Declare sorting criteria (Name, Population, Area) once in `defineSortModelStructure` to generate independent models for both local UI organization and remote database queries.
* **Server-Side Serialization:** In `performQuery`, the framework provides a `SortableCriteria` object. This object is converted via `toJsonString()` to be sent as a query parameter, allowing the backend to perform precise database-level sorting for paginated results.
* **Client-Side Agility:** Local sorting uses `getComparisonValue` to reorder currently loaded items in memory instantly, providing zero-latency feedback for small datasets or specific view-side requirements.
* **State Management:** Highlights the use of `SortStrategy.modelBased` within the **BlockConfig**, ensuring that the sorting state remains consistent and reactive across the entire Block lifecycle.

---

> **Technical Focus:** *Bridging UI sorting controls with backend database queries using serialized SortableCriteria.*

Check `CountryRestProvider.query` in **Related Documentation** to see the JSON sorting parameter implementation.
