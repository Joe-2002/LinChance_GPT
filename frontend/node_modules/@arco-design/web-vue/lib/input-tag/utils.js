"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var is = require("../_utils/is.js");
const getValueData = (value, fieldNames) => {
  const result = [];
  for (const item of value) {
    if (is.isObject(item)) {
      result.push({
        raw: item,
        value: item[fieldNames.value],
        label: item[fieldNames.label],
        closable: item[fieldNames.closable],
        tagProps: item[fieldNames.tagProps]
      });
    } else if (value || is.isNumber(value)) {
      const raw = {
        value: item,
        label: String(item),
        closable: true
      };
      result.push(__spreadValues({
        raw
      }, raw));
    }
  }
  return result;
};
exports.getValueData = getValueData;
