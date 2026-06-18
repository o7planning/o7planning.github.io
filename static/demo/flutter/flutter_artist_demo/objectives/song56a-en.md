# Field-Based JSON: Value Transformation with toFieldValue

This example demonstrates how to extract specific data from complex objects for server-side
  querying using the `toFieldValue()` method within **FilterModel**.

* **Object-to-Value Mapping:** While the UI interacts with full `AlbumInfo`
  objects (to display names, covers, etc.), the `toFieldValue()` function ensures
  that only the necessary `albumId` is extracted and sent to the server.

  * **Multi-Instance Filtering:** It reinforces the "Tilde" concept by creating two
  independent album selection criteria (`album~1` and `album~2`)
  linked via an **OR** connector in the `FilterConditionStructure`.

  * **Initial State Logic:** Demonstrates how to set divergent default values for
  multiple instances—selecting the first album for the first input and the last album for
  the second—providing a rich initial data set.

*Technical Focus: Mastering data transformation logic to ensure backend compatibility while maintaining a rich frontend object model.*

Check the `multiOptCriterionDefs` in **Related Documentation** to see the `toFieldValue` implementation.
