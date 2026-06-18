# Multi-Selection & Programmatic Filtering with FilterInput

This example demonstrates advanced filtering techniques, featuring **Multi-selection**
  capabilities and the use of **FilterInput** for automated, code-driven data queries.

* **Multi-Selection with Logic:** The **Department** criterion is configured for
  `multiSelection`. This allows users to filter by multiple departments simultaneously,
  leveraging the `inCollection` operator within the **FilterModel**.

  * **Programmatic Control (FilterInput):** Shows how to trigger complex searches using
  `Employee40aFilterInput`. This bypasses manual entry, making it perfect for
  pre-set filter buttons, deep links, or cross-screen search synchronization.

  * **Seamless State Mapping:** Demonstrates how the **FilterModel** automatically
  translates raw codes (like "VINFAST-HR") from **FilterInput** back into full UI objects,
  ensuring the **FilterPanel** reflects the active search state perfectly.

<i>Technical Focus: Mastering the bridge between manual UI interaction and automated
programmatic filtering via FilterInput.</i>

Check the **Related Documentation** to see the `FilterInput` and
`extractUpdateValue` logic in action.
