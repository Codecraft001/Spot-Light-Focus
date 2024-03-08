 /*!
Spotlight - focus
 - blur effect
@wakana-k
https://codepen.io/wakana-k/pen/ZEwWWmV
*/
"use strict";
console.clear();

var root = document.querySelector(":root");
function spotlight(e) {
  root.style.setProperty("--x", e.pageX + "px");
  root.style.setProperty("--y", e.pageY + "px");
}
window.addEventListener("pointermove", spotlight);
window.addEventListener("pointerdown", spotlight);
