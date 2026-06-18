# Field-Based JSON & Independent Cascading Filters

This example demonstrates an advanced filtering architecture using **Field-Based JSON**,
  allowing multiple independent instances of parent-child relationships within a single filter model.

* **Template-Based Independence:** Although **Company** and **Department** relationships
  are defined once in the template, they are instantiated as independent pairs (e.g., `company~1/department~1`
  and `company~2/department~2`) on the UI.

  * **Isolated Reactivity:** Changing the selection on `company~1` triggers a data
  reload for `department~1` only. This isolation ensures that interacting with one
  cascading pair does not affect the state or data of another, even if they share the same base logic.

  * **Unified Server Query:** All independent criteria are bundled into a **Field-Based JSON**
  structure and sent to the server. This allows the backend to handle complex, multi-layered
  filtering logic in a single request via the `performQuery()` method.

<i>Technical Focus: Mastering isolated cascading logic and Field-Based JSON for high-density,
complex filtering interfaces.</i>

Check the `defineFilterModelStructure` in **Related Documentation** to see how
these independent tilde-criteria are mapped.
