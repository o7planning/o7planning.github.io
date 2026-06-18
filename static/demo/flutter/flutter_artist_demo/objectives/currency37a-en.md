# Interactive Grid Reordering with ReorderableGridView

This example demonstrates advanced **Manual Sorting** within a grid layout,
  leveraging the power of the `reorderable_grid_view` library integrated
  seamlessly with the FlutterArtist **Block**.

* **Grid-Based Drag & Drop:** Extends manual sorting capabilities to 2D layouts.
  Users can freely move items across rows and columns, providing a flexible way to
  organize visually rich content like currency cards.

  * **Manual Sort Strategy:** Reinforces the requirement of `SortStrategy.manual`
  in **BlockConfig**, ensuring the **Block** internal list logic is dedicated
  to user-defined positions rather than automated rules.

  * **State Synchronization:** Every reorder action triggers `block.moveItemByIndexPosition()`,
  instantly updating the data state. The use of `Future.microtask` or precise
  index handling ensures smooth animations and data consistency.

  * **Custom Scroll Control:** Showcases advanced integration by utilizing
  `scrollSpeedController` to fix common timestamp errors in reorderable
  widgets, ensuring a professional and bug-free user experience.

*Technical Focus: Bridging third-party reorderable grid components with Block's manual sorting API for highly interactive and responsive dashboards.*

Check the `onReorder` and `scrollSpeedController` implementation in **Related Documentation** for advanced configuration tips.
