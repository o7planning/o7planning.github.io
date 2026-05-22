## faColors.common

In the **Surface - Ink - Stroke** engine architecture, the Common namespace hosts the immutable primitive constants of the design system. Unlike semantic tokens that dynamically shift based on device brightness contexts, variables within the `common` branch are absolute, theme-agnostic vectors reserved for technical paints, core graphics, or uncompromised high-contrast boundaries.

### 1. Architecture Breakdown

The common ecosystem establishes a strict trio of zero-resolver primitive anchors:

<table>
  <thead>
    <tr>
      <th>Complete Token Name</th>
      <th>HEX Color Value</th>
      <th>Core Technical Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`faColors.common.white`</td>
      <td>`0xFFFFFFFF`</td>
      <td>Fixed white overlays, canvas stencil masks, graphic badge backgrounds.</td>
    </tr>
    <tr>
      <td>`faColors.common.black`</td>
      <td>`0xFF000000`</td>
      <td>Hard backdrop filters, unattenuated dropshadow baselines, stencil shapes.</td>
    </tr>
    <tr>
      <td>`faColors.common.transparent`</td>
      <td>`0x00000000`</td>
      <td>Invisible gesture hit-test spots, border erasures, spacer targets.</td>
    </tr>
  </tbody>
</table>

### 2. The Core Design Doctrines

<ul>
  <li>**The Context-Free Mandate:** Every token inside the `faColors.common` scope completely bypasses the semantic theme evaluation loops of the backend FaColorGraph. A pure white or jet-black vector is maintained identically across both deep-density Dark modes and crisp Light layouts.</li>
  <li>**The Unified Namespace Principle (DX):** While these variables evaluate to the exact same memory primitives as Flutter's core `Colors.*` layer, engineers should exclusively call `faColors.common.*` inside the ecosystem. Keeping all baseline primitives contained within a predictable namespace drastically enhances source code cohesion and IDE auto-complete performance.</li>
  <li>**The Anti-Surface Rule:** Never misuse common primitives to style standard responsive surfaces or primary typography layers. Dynamic components must consistently map to context-aware branches (such as `faColors.surface.standard` or `faColors.ink.primary`) to shield the application from broken visual contrast rules during runtime theme hot-swaps.</li>
</ul>

> **System Architecture Notice:** Because the `faColors.common` tokens carry zero rendering overhead and operate completely decoupled from theme notification trees, they act as the safest, most performant inputs for heavy drawing procedures like custom painters or clipping paths.