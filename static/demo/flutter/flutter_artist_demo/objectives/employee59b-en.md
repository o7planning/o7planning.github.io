# Advanced Field-Based JSON: Control Default Policies

This example extends the **Field-Based JSON** architecture by demonstrating how to
  finely control default value behavior using `DefaultSettingPolicy` across
  independent cascading pairs.

* **Independent Cascading Logic:** Like example 59a, it maintains two isolated
  Parent-Child pairs (`company~1/department~1` and `company~2/department~2`)
  within a single model.

  * **Dynamic Re-initialization (~1):** For the first pair, `DefaultSettingPolicy.onEveryLoad`
  is applied. Whenever **company~1** changes, **department~1** is automatically
  re-assigned its first available value, ensuring a continuous valid state.

  * **Initial-Only Initialization (~2):** The second pair demonstrates the default
  behavior (`onInitialOnly`). Default values are set only when the example starts.
  If **company~2** changes later, **department~2** will remain empty, allowing
  the user to make a fresh choice.

*Technical Focus: Mastering `DefaultSettingPolicy` within `TildeCriterionConfig` to customize the reset behavior of dependent filters.*

Check `defineFilterModelStructure` in **Related Documentation** to compare the Tilde configs.
