"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var raf = require("./raf.js");
function throttleByRaf(cb) {
  let timer = 0;
  const throttle = (...args) => {
    if (timer) {
      raf.caf(timer);
    }
    timer = raf.raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle.cancel = () => {
    raf.caf(timer);
    timer = 0;
  };
  return throttle;
}
exports.throttleByRaf = throttleByRaf;
