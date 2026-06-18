# Dynamic Filtering with FilterModel

This example demonstrates how to build a flexible search system by combining
  **FilterModel** and **Block** to query songs by title and album.

* **Declarative Filter Structure:** Use `FilterModelStructure` to define search criteria (Simple text, Multi-option) and logical conditions (Contains, Equal To) without writing complex UI logic.

  * **Automated Data Loading:** The **FilterModel** automatically fetches master data (like the list of Albums) and populates selection components within the **FilterPanel**.

  * **Criteria to Query:** User inputs are transformed into a `FilterCriteria` object, which is then passed directly into the Block's `performQuery()` method to filter server-side data.

*Technical Focus: Centralizing filtering logic within FilterModel for seamless UI synchronization and robust data querying.*

Explore the `Song02aFilterModel` implementation in the **Related Documentation** for details.
