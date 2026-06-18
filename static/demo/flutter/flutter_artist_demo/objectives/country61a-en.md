# Infinite Scroll Integration with Davi Table

This example demonstrates the versatility of FlutterArtist by integrating **Infinite Scroll**
  into **DAVI**, a highly customizable and efficient table library for Flutter.

* **Third-Party Table Integration:** Shows how to bind `block.items` directly
  to **FaDaviTable**, maintaining full synchronization between the Block's data state
  and the table's row rendering.

  * **Triggering via Trailing Widget:** Utilizes Davi's specialized `trailingWidget`
  and `onTrailingWidget` callback to detect when the user scrolls to the end
  of the table, triggering `block.queryMore()` automatically.

  * **High-Density Data Display:** Highlights the capability of handling large,
  paginated datasets within a structured grid format, complete with formatted columns
  (Population, Area) and image rendering.

*Technical Focus: Bridging Block's pagination lifecycle with third-party table controllers to build professional, data-intensive admin consoles.*

Refer to `_onTrailingWidget` in **Related Documentation** to see the manual
paging trigger for the Davi model.
