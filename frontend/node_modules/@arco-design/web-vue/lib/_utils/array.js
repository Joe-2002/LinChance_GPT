"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const union = (target, source, difference = false) => {
  return difference ? target.filter((item) => !source.includes(item)) : Array.from(new Set(target.concat(source)));
};
const getReverse = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - 1 - i];
  }
  return result;
};
exports.getReverse = getReverse;
exports.union = union;
