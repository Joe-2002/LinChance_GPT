"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const getLegalPage = (page, { min, max }) => {
  if (page < min) {
    return min;
  }
  if (page > max) {
    return max;
  }
  return page;
};
exports.getLegalPage = getLegalPage;
