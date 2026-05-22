## faColors.input

In the **Surface - Ink - Stroke** architecture, the Input namespace provides a unified, semantic ecosystem for styling form controls, text fields, and data-entry components. By organizing design tokens into strict functional branches (`fill`, `stroke`, and `ink`), FlutterArtist offers a comprehensive "One-Stop Shop" solution that guarantees explicit state feedback and consistent typography contrast across complex enterprise forms.

### 1. Structural Architecture

The input layout ecosystem is divided into three specialized operational sub-namespaces to handle component lifecycles:

| Sub-Namespace | Complete Token Name | Target InputDecoration / TextStyle Property |
| --- | --- | --- |
| **`.fill`** (Surfaces) | `faColors.input.fill.enabled` | `fillColor` (When `enabled: true`) |
| `faColors.input.fill.disabled` | `fillColor` (When `enabled: false`) |
| **`.stroke`** (Boundaries) | `faColors.input.stroke.enabled` | `enabledBorder` |
| `faColors.input.stroke.disabled` | `disabledBorder` |
| `faColors.input.stroke.focused` | `focusedBorder` |
| `faColors.input.stroke.error` | `errorBorder` |
| `faColors.input.stroke.focusedError` | `focusedErrorBorder` |
| **`.ink`** (Aliases) | `faColors.input.ink.primary` | `style: TextStyle(color: ...)` (User input text value) |
| `faColors.input.ink.secondary` | `helperStyle` / Default idle Label text |
| `faColors.input.ink.muted` | `hintStyle` / Disabled read-only text |
| `faColors.input.ink.danger` | `errorStyle` (Validation message text) |
| `faColors.input.ink.highlight` | Mandatory markers (e.g., `*`) / Inline query match highlights |

### 2. The Core Design Doctrines

* **The Architectural Alias Rule (DX Focus):** Tokens inside the `input.ink` scope act as read-only proxies redirecting straight to the global `faColors.ink` system. They do not maintain distinct resolvers. However, developers should strictly implement `faColors.input.ink.*` inside forms instead of global ink tokens. Bounding all parameters within the `faColors.input` scope produces clean, contextual, and highly cohesive source code.

  * **The Neutral Canvas Rule:** Fill tokens are bound to low-intensity neutral container baselines. Brand accent colors must never tint the input surface backgrounds, preventing eye strain during intense data entry sessions.

  * **Unambiguous State Discipline:** Boundary and font colors remain strictly persistent during error interactions. When an invalid field gains focus, `stroke.focusedError` preserves the urgent error identity, preventing visual ambiguity during data correction.

  * **Structural Weight Shifts:** Boundary strokes adapt dynamically. Passive states utilize a crisp 1.0 logical pixel layout, while interactive focus states expand to 2.0 logical pixels to instantly anchor user attention.

> **Context Reactivity:** Every token under the `faColors.input` namespace natively inherits theme brightness criteria. During Dark/Light mode hot swaps, contrast scales and opacity layers re-calibrate instantly within the backend FaColorGraph.