## faColors.ink

The `faColors.ink` namespace defines the palette for all static content, including typography and iconography, that resides on expansive **Surface** layers. It is the core system responsible for information legibility and hierarchy.

### Architectural Philosophy

Under the **Surface - Ink - Stroke** hierarchy, the Ink namespace is strictly dedicated to content representation. It is architecturally decoupled from interactive "Action Inks" to ensure that the primary information layer remains stable, accessible, and distinct from functional controls.

* **Legibility First:** Every token is mathematically tuned to pass WCAG contrast standards against its corresponding Surface.

  * **Semantic Precision:** Uses color to convey meaning (Success, Danger, Info, Warning) without requiring user interaction.

  * **Structural Hierarchy:** Organizes information from high-emphasis (Primary) to low-emphasis (Muted).

### Key Token Groups


<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Group</th>
      <th>Tokens</th>
      <th>Primary Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Neutral Content**</td>
      <td>`primary`, `secondary`</td>
      <td>Main body text, descriptions, and supporting metadata.</td>
    </tr>
    <tr>
      <td>**Structural**</td>
      <td>`label`, `muted`</td>
      <td>Form headers, table identifiers, and placeholder hints.</td>
    </tr>
    <tr>
      <td>**Semantic**</td>
      <td>`success`, `danger`, `warning`, `info`</td>
      <td>Status indicators, validation messages, and system guidance.</td>
    </tr>
  </tbody>
</table>

> **The Content-Only Boundary:**
> 
>   Tokens in this namespace **must not** be used as background colors (Fills). Furthermore, they are specifically designed for large layout surfaces. For text/icons inside small interactive components like Buttons or Chips, always refer to `faColors.action.ink.xxx`.

### Design Intent

The Ink namespace aims to reduce visual noise by providing a disciplined approach to typography. By separating "Label" from "Value" and "System Info" from "User Data", it creates a professional, organized reading experience essential for complex Enterprise applications.