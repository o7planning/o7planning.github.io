## faColors.bar

The `faColors.bar` namespace defines the background layers for structural and functional navigation components. It is the "command center" of the layout, providing distinct zones for headers, toolbars, and navigation rails.

### Architectural Philosophy

Under the **Surface - Ink - Stroke** architecture, the Bar namespace serves as a bridge between the static `surface` and active `action` components. Its primary goal is to provide **Environmental Context**—letting the user know exactly where the tools end and the data begins.

<ul>
  <li>**Consistency:** Bars provide a stable horizontal or vertical anchor that persists while content scrolls.</li>
  <li>**Functional Hierarchy:** Uses varying levels of contrast (Subtle → Standard → Strong) to categorize the importance of the tools hosted within.</li>
  <li>**Overlay Integration:** Designed to work seamlessly with `faColors.action.state.xxx` for interactive elements like navigation icons or tab items.</li>
</ul>

### Key Token Groups

<table border="1" style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Token</th>
      <th>Visual Weight</th>
      <th>Primary Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**bar.subtle**</td>
      <td>Low</td>
      <td>Contextual filter bars, status indicators, and secondary bottom bars.</td>
    </tr>
    <tr>
      <td>**bar.standard**</td>
      <td>Medium</td>
      <td>Main Application Bars (AppBars) and primary header navigation.</td>
    </tr>
    <tr>
      <td>**bar.strong**</td>
      <td>High</td>
      <td>Side navigation rails and footer bars that ground the layout.</td>
    </tr>
  </tbody>
</table>

> **The Contrast Anchor:**
> 
>   Bars often act as the boundary between different surfaces. When using `faColors.bar`, ensure that the **Ink** color used for labels and icons is chosen based on the bar's specific luminance to meet high accessibility standards.

### Design Intent

The Bar namespace is crafted to eliminate visual clutter in dense enterprise applications. By providing a dedicated set of backgrounds for navigation, it ensures that functional controls are never "lost" in the sea of data surfaces.