## faColors.input

In the **Surface - Ink - Stroke** architecture, the Input namespace provides a unified, semantic ecosystem for styling form controls, text fields, and data-entry components. By organizing design tokens into strict functional branches (`fill`, `stroke`, and `ink`), FlutterArtist offers a comprehensive "One-Stop Shop" solution that guarantees explicit state feedback and consistent typography contrast across complex enterprise forms.

### 1. Structural Architecture

The input layout ecosystem is divided into three specialized operational sub-namespaces to handle component lifecycles:

<table>
  <thead>
    <tr>
      <th>Sub-Namespace</th>
      <th>Complete Token Name</th>
      <th>Target InputDecoration / TextStyle Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">**`.fill`** (Surfaces)</td>
      <td>`faColors.input.fill.enabled`</td>
      <td>`fillColor` (When `enabled: true`)</td>
    </tr>
    <tr>
      <td>`faColors.input.fill.disabled`</td>
      <td>`fillColor` (When `enabled: false`)</td>
    </tr>
    <tr>
      <td rowspan="5">**`.stroke`** (Boundaries)</td>
      <td>`faColors.input.stroke.enabled`</td>
      <td>`enabledBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.disabled`</td>
      <td>`disabledBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.focused`</td>
      <td>`focusedBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.error`</td>
      <td>`errorBorder`</td>
    </tr>
    <tr>
      <td>`faColors.input.stroke.focusedError`</td>
      <td>`focusedErrorBorder`</td>
    </tr>
    <tr>
      <td rowspan="5">**`.ink`** (Aliases)</td>
      <td>`faColors.input.ink.primary`</td>
      <td>`style: TextStyle(color: ...)` (User input text value)</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.secondary`</td>
      <td>`helperStyle` / Default idle Label text</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.muted`</td>
      <td>`hintStyle` / Disabled read-only text</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.danger`</td>
      <td>`errorStyle` (Validation message text)</td>
    </tr>
    <tr>
      <td>`faColors.input.ink.highlight`</td>
      <td>Mandatory markers (e.g., `*`) / Inline query match highlights</td>
    </tr>
  </tbody>
</table>

### 2. The Core Design Doctrines

<ul>
  <li>**The Architectural Alias Rule (DX Focus):** Tokens inside the `input.ink` scope act as read-only proxies redirecting straight to the global `faColors.ink` system. They do not maintain distinct resolvers. However, developers should strictly implement `faColors.input.ink.*` inside forms instead of global ink tokens. Bounding all parameters within the `faColors.input` scope produces clean, contextual, and highly cohesive source code.</li>
  <li>**The Neutral Canvas Rule:** Fill tokens are bound to low-intensity neutral container baselines. Brand accent colors must never tint the input surface backgrounds, preventing eye strain during intense data entry sessions.</li>
  <li>**Unambiguous State Discipline:** Boundary and font colors remain strictly persistent during error interactions. When an invalid field gains focus, `stroke.focusedError` preserves the urgent error identity, preventing visual ambiguity during data correction.</li>
  <li>**Structural Weight Shifts:** Boundary strokes adapt dynamically. Passive states utilize a crisp 1.0 logical pixel layout, while interactive focus states expand to 2.0 logical pixels to instantly anchor user attention.</li>
</ul>

> **Context Reactivity:** Every token under the `faColors.input` namespace natively inherits theme brightness criteria. During Dark/Light mode hot swaps, contrast scales and opacity layers re-calibrate instantly within the backend FaColorGraph.