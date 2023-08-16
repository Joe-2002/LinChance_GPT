"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const toKebabCase = (string) => {
  return string.replace(/\B([A-Z])/g, "-$1").toLowerCase();
};
exports.toKebabCase = toKebabCase;
