## Stroke Namespace: The Structural Skeleton

In the **Surface - Ink - Stroke** architecture, the Stroke namespace is responsible for defining the boundaries, dividers, and focus indicators. It provides the necessary "friction" and "structure" that prevent the UI from looking flat or disorganized.

### 1. The Hierarchy of Intensity

FlutterArtist categorizes strokes by their visual weight rather than their position, using a three-tier system:

| Token Name | Intensity | Primary Role |
| --- | --- | --- |
| `faColors.stroke.subtle` | Light | Internal separation (List dividers, toolbar splits). |
| `faColors.stroke.medium` | Moderate | Component boundaries (Card outlines, Dialog borders). |
| `faColors.stroke.strong` | High | Active states (Focus borders, selection indicators). |

### 2. Design Principles

* **The 80/20 Rule:** In professional Enterprise UI, 80% of your lines should be `faColors.stroke.subtle`. Reserve `strong` only for critical focus points.

  * **Consistency:** Avoid mixing multiple stroke levels within the same small component (e.g., don't use a bold border with a subtle divider if they are part of the same visual unit).

  * **Accessibility:** Use `faColors.stroke.strong` to ensure users navigating via keyboard can clearly see which element currently has focus.

> **Technical Insight:** All stroke tokens are reactive. When you switch to **Dark Theme**, the system automatically adjusts the contrast ratios to ensure the skeleton of your UI remains visible without being harsh on the eyes.