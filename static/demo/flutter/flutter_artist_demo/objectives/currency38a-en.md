# Custom Layout with WaterfallFlow

This example highlights the high flexibility of **BlockItemsView**, showing that
  FlutterArtist does not restrict you to specific UI widgets for data presentation.

* **Custom WaterfallFlow:** Instead of a standard list, this view uses a
  **WaterfallFlow** layout to display currency items in a dynamic, multi-column grid.

  * **Widget Agnostic:** FlutterArtist is designed to work seamlessly with any
  scrollable widget, including `ListView`, `GridView`, or
  specialized third-party packages.

  * **State Persistence:** Despite the custom layout, the **Block** continues
  to manage the **Current Item** state correctly, ensuring the selected item is
  properly highlighted across the grid.

*Technical Focus: Integrating third-party layout engines with BlockItemsView for unique UI experiences.*

See the `buildContent` implementation in **Related Documentation** for details.
