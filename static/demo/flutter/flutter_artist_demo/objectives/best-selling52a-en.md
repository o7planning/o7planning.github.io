# Advanced Multi-Sorting with BreadCrumbSortPanel

This example demonstrates the **Multi-level Sorting** capability of FlutterArtist, allowing users to organize complex datasets using multiple criteria simultaneously.

* **Multi-Sort Mode:** By setting `SortMode.multi` in the **SortModelBuilder**, the application can handle a chain of sorting rules (e.g., Category > Amount > Product Name).
* **Breadcrumb Navigation:** The **BreadCrumbSortPanel** provides a visual path of active sorting layers. Each "breadcrumb" represents a sorting level that users can individually toggle or remove to refine their data view.
* **Directional Selection Only:** Highlights the `directionalSelectionOnly` configuration, which forces a criterion to always have a sort direction (Asc/Desc) once selected, preventing an "unsorted" state for critical business logic.
* **Complex Comparison Logic:** The `getComparisonValue` method is extensively used to provide precise sorting values for diverse data types like Strings (Product Name) and Numbers (Total Units/Amount).

---

> **Technical Focus:** *Mastering hierarchical multi-sorting logic and utilizing BreadCrumbSortPanel for professional data reporting interfaces.*

Check the `BestSelling52aSortModelBuilder` in **Related Documentation** to see how multi-mode sorting is structured.
