# Manual Item Reordering with SortStrategy.manual

This example demonstrates how to empower users with **Manual Sorting** capabilities,
  allowing them to directly define the order of items through intuitive **Drag & Drop** interactions.

* **Manual Strategy Configuration:** To enable user-driven reordering, the **BlockConfig**
  must be explicitly set to `SortStrategy.manual`. This disables automatic sorting
  and hands over full control of the item sequence to the client-side logic.

  * **Drag & Drop Integration:** Shows the seamless integration with Flutter's
  `ReorderableListView`. The UI captures the movement, and the **Block**
  synchronizes its internal state via the `moveItemByIndexPosition()` method.

  * **Persistent State Consistency:** Even after reordering, the **Block** maintains
  the correct "Current Item" context. Using `refreshItemAndSetAsCurrent()`
  ensures that selecting an item remains accurate regardless of its new position in the list.

*Technical Focus: Implementing interactive reordering by bridging ReorderableListView events with Block's manual sort management.*

Check the `_onReorder` implementation in **Related Documentation** to see the index calculation and movement logic.
