"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const target = typeof window === "undefined" ? global : window;
function debounce(callback, delay) {
  let timer = 0;
  return (...args) => {
    if (timer) {
      target.clearTimeout(timer);
    }
    timer = target.setTimeout(() => {
      timer = 0;
      callback(...args);
    }, delay);
  };
}
exports.debounce = debounce;
