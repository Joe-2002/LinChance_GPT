"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var is = require("./is.js");
function toArray(val) {
  return is.isArray(val) ? val : [val];
}
exports.toArray = toArray;
