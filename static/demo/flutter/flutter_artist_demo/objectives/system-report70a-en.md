# Basic Scalar Data Example

This example introduces the **Scalar** model, designed to manage consistent,
  read-only data structures typically used for complex reports or aggregated statistics.

* **Single Immutable Value:** Unlike Blocks, a **Scalar** holds a single,
  atomic data object. This data is consistent and cannot be directly modified
  from the UI, ensuring the integrity of the report.

  * **Complex Data Packaging:** Scalar is perfect for wrapping multifaceted information—such as
  system-wide counts or quarterly sales rankings—into a single, unified data block.

  * **ScalarValueView:** The specialized UI component that observes the Scalar
  and reactively renders its contents whenever the report data is fetched or refreshed.

*Technical Focus: Leveraging Scalar for robust, aggregated reporting without the complexity of item-based state management.*

Refer to `SystemReport70aValueView` in the **Related Documentation** to see the implementation.
