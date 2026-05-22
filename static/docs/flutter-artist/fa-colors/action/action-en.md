## faColors.action

The `faColors.action` namespace is the core engine of interactivity within the FlutterArtist ecosystem. It provides a comprehensive suite of tokens designed to handle every phase of user engagement, from static buttons to complex interactive states.

### Architectural Philosophy

Built on the **Fill - Ink - Stroke** trinity, this namespace ensures that every action is semantically clear and visually consistent:

<ul>
  <li>**Fill:** Defines the "body" or background of the action (e.g., Primary, Success, Danger).</li>
  <li>**Ink:** Defines the "soul" or content (Text/Icons) that conveys the message.</li>
  <li>**Stroke:** Defines the "structure" or borders, ideal for outlined and ghost buttons.</li>
  <li>**State:** Dynamic overlays (Hover, Pressed, Selected) that provide real-time tactile feedback.</li>
</ul>

### Key Token Groups

<table>
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Group</th>
      <th>Purpose</th>
      <th>Usage Scenario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Primary / Secondary**</td>
      <td>Brand-driven interaction.</td>
      <td>Main CTAs and auxiliary navigation.</td>
    </tr>
    <tr>
      <td>**Semantic (Success, Warning, Danger, Info)**</td>
      <td>Communication of status and risk.</td>
      <td>Confirmations, alerts, and destructive actions.</td>
    </tr>
    <tr>
      <td>**Muted / Subtle**</td>
      <td>Low-priority interaction.</td>
      <td>Settings, "Learn More" links, and background tasks.</td>
    </tr>
    <tr>
      <td>**States**</td>
      <td>Interactive feedback.</td>
      <td>Mouse hovers, touch presses, and selection persistence.</td>
    </tr>
  </tbody>
</table>

> **The Pairwise Rule:**
> 
>   For maximum accessibility and visual integrity, always respect the **onFill** naming convention.
>   If you use `action.fill.primary`, you **must** use `action.ink.onPrimaryFill` for its content. Mixing tokens from different intent groups will break the FaColorGraph logic.

### Design Intent

The Action namespace is designed to reduce cognitive load. By using consistent semantic colors (Red for Danger, Blue for Info), users can navigate complex Enterprise UIs intuitively without reading every label.