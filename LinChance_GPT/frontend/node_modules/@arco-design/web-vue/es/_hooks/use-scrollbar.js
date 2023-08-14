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
import { computed } from "vue";
import { isBoolean } from "../_utils/is.js";
const useScrollbar = (scrollbar) => {
  const displayScrollbar = computed(() => Boolean(scrollbar.value));
  const scrollbarProps = computed(() => {
    if (!scrollbar.value)
      return void 0;
    return __spreadValues({
      type: "embed"
    }, isBoolean(scrollbar.value) ? void 0 : scrollbar.value);
  });
  return {
    displayScrollbar,
    scrollbarProps
  };
};
export { useScrollbar };
