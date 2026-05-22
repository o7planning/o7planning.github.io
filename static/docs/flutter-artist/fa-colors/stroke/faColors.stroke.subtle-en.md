## faColors.stroke.subtle

The `faColors.stroke.subtle` token defines the lightest boundary layer. It is designed for low-impact separation, creating a visual rhythm without interrupting the content flow.

### Technical Logic

In the **Surface - Ink - Stroke** architecture, `stroke.subtle` provides a "hint" of structure. It is typically used for internal dividers where the proximity of elements already suggests a relationship, and a bolder line would be visually redundant or cluttered.

> **Best Practices:**
> 
>   <ul>
>     <li>**USE FOR:** Horizontal dividers between list items, vertical separators in toolbars, or idle borders for input fields.</li>
>     <li>**AVOID:** Using this for main container boundaries (like Dialogs or Sidebars) as it may be too faint on some screens or high-brightness environments.</li>
>   </ul>

### Implementation Example

```dart
// Using subtle stroke for list dividers
ListView.separated(
  itemCount: items.length,
  // Using a divider to separate items within a list
  separatorBuilder: (context, index) => Divider(
    color: context.faColors.stroke.subtle,
    height: 1,
  ),
  itemBuilder: (context, index) => ListTile(
    title: Text('Item $index', style: TextStyle(color: context.faColors.ink.primary)),
  ),
)
```

*Note: `faColors.stroke.subtle` is the most used stroke level in high-density data tables to maintain a "breathable" interface.*