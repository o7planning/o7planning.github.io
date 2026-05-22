## faColors.action

The `faColors.action` namespace is the core engine of interactivity within the FlutterArtist ecosystem. It provides a comprehensive suite of tokens designed to handle every phase of user engagement, from static buttons to complex interactive states.

### Architectural Philosophy

Built on the **Fill - Ink - Stroke** trinity, this namespace ensures that every action is semantically clear and visually consistent:

* **Fill:** Defines the "body" or background of the action (e.g., Primary, Success, Danger).

  * **Ink:** Defines the "soul" or content (Text/Icons) that conveys the message.

  * **Stroke:** Defines the "structure" or borders, ideal for outlined and ghost buttons.

  * **State:** Dynamic overlays (Hover, Pressed, Selected) that provide real-time tactile feedback.

### Key Token Groups

| Group | Purpose | Usage Scenario |
| --- | --- | --- |
| **Primary / Secondary** | Brand-driven interaction. | Main CTAs and auxiliary navigation. |
| **Semantic (Success, Warning, Danger, Info)** | Communication of status and risk. | Confirmations, alerts, and destructive actions. |
| **Muted / Subtle** | Low-priority interaction. | Settings, "Learn More" links, and background tasks. |
| **States** | Interactive feedback. | Mouse hovers, touch presses, and selection persistence. |

> **The Pairwise Rule:**
> 
>   For maximum accessibility and visual integrity, always respect the **onFill** naming convention.
>   If you use `action.fill.primary`, you **must** use `action.ink.onPrimaryFill` for its content. Mixing tokens from different intent groups will break the FaColorGraph logic.

### Design Intent

The Action namespace is designed to reduce cognitive load. By using consistent semantic colors (Red for Danger, Blue for Info), users can navigate complex Enterprise UIs intuitively without reading every label.