# Range Filtering with Field-Based JSON

This example demonstrates how to implement **Range Filtering** (Min-Max) by utilizing multiple
  Tilde criteria derived from a single base criterion.

* **Criterion Aliasing (Suffixes):** The base `price` criterion is split into two independent
  Tilde instances: `price~min` and `price~max`. This allows the UI to capture two
  distinct values for a single data field.

  * **Logical Range Mapping:** In the `FilterConditionStructure`, `price~min` is
  mapped to the `greaterThan` operator, while `price~max` uses `lessThan`,
  creating a perfect functional price range.

  * **Pre-defined Defaults:** The example shows how to use `specifyDefaultValuesForSimpleTildeCriteria`
  to automatically fill the price range (e.g., 1000 to 20000) upon initialization, guiding the user's
  first search experience.

*Technical Focus: Mastering Tilde suffix naming conventions to handle Range-based queries within Field-Based JSON.*

Check the `conditionStructure` in **Related Documentation** to see the Min-Max operator mapping.
