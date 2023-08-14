"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
function hasPropOrSlot(props, slots, propName) {
  return vue.computed(() => Boolean(props[propName] || slots[propName]));
}
exports.hasPropOrSlot = hasPropOrSlot;
