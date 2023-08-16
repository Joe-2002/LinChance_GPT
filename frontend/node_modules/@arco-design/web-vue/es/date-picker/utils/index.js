import { isDayjs, isUndefined, isArray } from "../../_utils/is.js";
function newArray(length) {
  return [...Array(length)];
}
function normalizeRangeValue(value) {
  if (isUndefined(value)) {
    return void 0;
  }
  return isArray(value) ? value : [value, void 0];
}
function isCompleteRangeValue(value) {
  return !!value && isDayjs(value[0]) && isDayjs(value[1]);
}
function isValidRangeValue(value) {
  return isUndefined(value) || value.length === 0 || isCompleteRangeValue(value);
}
function mergeValueWithTime(defaultValue, dateValue, timeValue) {
  const dateVal = dateValue || defaultValue;
  const timeVal = timeValue || defaultValue;
  return timeVal.set("year", dateVal.year()).set("month", dateVal.month()).set("date", dateVal.date());
}
export { isCompleteRangeValue, isValidRangeValue, mergeValueWithTime, newArray, normalizeRangeValue };
