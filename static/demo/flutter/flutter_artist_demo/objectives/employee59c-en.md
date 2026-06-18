# Field-Based JSON: One Parent, Multiple Dependent Children

This example demonstrates a sophisticated **Parent-Child** mapping where multiple
  independent child criteria share and react to a single parent criterion.

* **Shared Parent Context:** By using `parentMatchSuffix: "~"`, both
  `department~1` and `department~2` are linked to the same
  `company~`. Any change in the Company selection triggers a simultaneous
  refresh for both Department inputs.

  * **Divergent Default Policies:** The example showcases mixed behaviors:
    <ul>
      <li>**department~1 (onEveryLoad):** Automatically re-selects the first available
      department every time the Company changes, maintaining a continuous valid selection.

      * **department~2 (onInitialOnly):** Only sets a default value during the
      first load. Subsequent Company changes will clear this input, prompting the user for a manual choice.


  </li>
  * **Optimized Data Flow:** All three criteria are bundled into a single
  **Field-Based JSON**, allowing the server to process the complex "AND (OR)"
  conditional logic defined in the `FilterConditionStructure`.

</ul>


<i>Technical Focus: Mastering `parentMatchSuffix` for shared dependencies and
blending `DefaultSettingPolicy` for varied UX requirements.</i>

Refer to `TildeCriterionConfig` in **Related Documentation** to see how
the shared mapping is configured.
