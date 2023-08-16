"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
function getStyle(element, prop) {
  if (!element || !prop)
    return null;
  let styleName = prop;
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    if (document.defaultView) {
      const computed = document.defaultView.getComputedStyle(element, "");
      return element.style[styleName] || computed ? computed[styleName] : "";
    }
  } catch (e) {
    return element.style[styleName];
  }
  return null;
}
exports.getStyle = getStyle;
