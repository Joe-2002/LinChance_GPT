"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var is = require("../../_utils/is.js");
function newArray(length) {
  return [...Array(length)];
}
function normalizeRangeValue(value) {
  if (is.isUndefined(value)) {
    return void 0;
  }
  return is.isArray(value) ? value : [value, void 0];
}
function isCompleteRangeValue(value) {
  return !!value && is.isDayjs(value[0]) && is.isDayjs(value[1]);
}
function isValidRangeValue(value) {
  return is.isUndefined(value) || value.length === 0 || isCompleteRangeValue(value);
}
function mergeValueWithTime(defaultValue, dateValue, timeValue) {
  const dateVal = dateValue || defaultValue;
  const timeVal = timeValue || defaultValue;
  return timeVal.set("year", dateVal.year()).set("month", dateVal.month()).set("date", dateVal.date());
}
exports.isCompleteRangeValue = isCompleteRangeValue;
exports.isValidRangeValue = isValidRangeValue;
exports.mergeValueWithTime = mergeValueWithTime;
exports.newArray = newArray;
exports.normalizeRangeValue = normalizeRangeValue;
