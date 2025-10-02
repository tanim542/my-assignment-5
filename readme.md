# My Assignment 5
**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
- getElementById grabs the single element with a given ID.
- getElementsByClassName returns an HTMLCollection of elements sharing a class.
- querySelector finds the first match for a CSS selector—like “.button” or “#nav”—while.
- querySelectorAll returns a NodeList of every match.

 
**2. How do you create and insert a new element into the DOM?**
- To add a new element, first create it with `document.createElement()`
- Fill it with content using `child.innerText`, then grab the parent via `getElementById(id)`
- Finally, attach the child with `parent.appendChild(child)`


**3. What is Event Bubbling and how does it work?**

When an event fires on a child element, it travels upward through each parent in the DOM—like ripples climbing from a pebble dropped in water until it reaches the document object.

**4. What is Event Delegation in JavaScript? Why is it useful?**

Event delegation lets you place one listener on a parent element so it catches events from its children no need to wire each one individually and it automatically works with new elements, even those added after the page loads.

**5. What is the difference between preventDefault() and stopPropagation() methods?**
- `preventDefault()` stops an event from doing its usual thing—like following a link when you click it.
- `stopPropagation()` keeps the event from bubbling up to other elements.



