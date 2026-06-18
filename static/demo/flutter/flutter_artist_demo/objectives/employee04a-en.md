# Standardizing Custom Tree Widgets

This example demonstrates the foundational technique of wrapping a specialized
  **Tree Widget** to function as a standardized **InputField** within the
  FlutterArtist ecosystem.

* **Custom Input Wrapper:** By utilizing `FormBuilderField`, the
  **CompanyTreeView** is transformed into a standard input component. This allows
  a hierarchical tree structure to be used with the same ease as a `FormBuilderDropdown`.

  * **State Integration:** It highlights the importance of the `field.didChange(item)`
  method, which ensures the internal form state is updated immediately when a user
  selects a node in the tree.

  * **Unified Filtering:** Shows how custom selection components seamlessly provide
  criteria to the **FilterModel**, triggering `queryAll()` to refresh the
  data list in real-time.

*Technical Focus: Mastering the use of FormBuilderField to integrate non-standard UI components into the FilterPanel.*

Refer to the `Employee04aFilterPanel` source code in **Related Documentation** for implementation patterns.
