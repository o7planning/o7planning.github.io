## faColors.surface

The `faColors.surface` namespace is the architectural bedrock of the FlutterArtist design system. It defines the background layers, containers, and structural planes upon which all other interactive components reside.

### Architectural Philosophy

In the **Surface - Ink - Stroke** trinity, Surface acts as the ultimate "Fill" for the entire application environment. It is designed to manage **Visual Elevation** and **Content Grouping** without using shadows as the primary signifier, relying instead on subtle tonal shifts to indicate depth.

* **Layering:** Surfaces are organized from "Primary" (the lowest level) to "Emphasized" (the highest attention level).

  * **Neutrality:** These tokens use a neutral or slightly tinted palette to ensure they don't compete with functional Action colors.

  * **Consistency:** Every Surface token has a corresponding `faColors.ink` counterpart to ensure perfect legibility of static content.

### Key Token Groups


<table border="1" style="width:100%; border-collapse: collapse;">
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
      <td>Base application layers.</td>
      <td>Main window backgrounds and sidebar panels.</td>
    </tr>
    <tr>
      <td>**Tertiary / Quaternary**</td>
      <td>Structural nesting.</td>
      <td>Cards, grouped list containers, and inner sections.</td>
    </tr>
    <tr>
      <td>**Emphasized / Dimmed**</td>
      <td>Contrast management.</td>
      <td>Highlighted content zones or modal backdrops.</td>
    </tr>
    <tr>
      <td>**Inverted**</td>
      <td>High-contrast exceptions.</td>
      <td>Dark tooltips on light themes or snackbars.</td>
    </tr>
  </tbody>
</table>

> **The Depth Discipline:**
> 
>   Avoid jumping levels arbitrarily. Always move from `primary` to `secondary` for nested content. This logical progression creates a sense of "physical" structure that guides the user's eye naturally through the data hierarchy.

### Design Intent

Surface tokens are optimized for long-term usage in Enterprise environments. By prioritizing low-fatigue neutrals and clear tonal separation, they ensure that users can focus on complex data for extended periods without visual exhaustion.