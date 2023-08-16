"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var responsiveObserve = require("../_utils/responsive-observe.js");
function useResponsive(breakpoint, callback) {
  const resultBreakpoint = vue.computed(() => vue.isRef(breakpoint) ? breakpoint.value : breakpoint);
  let subscribeToken = "";
  vue.onMounted(() => {
    subscribeToken = responsiveObserve["default"].subscribe((screens, breakpointChecked) => {
      if (!resultBreakpoint.value)
        return;
      if (!breakpointChecked || breakpointChecked === resultBreakpoint.value) {
        callback(!!screens[resultBreakpoint.value]);
      }
    });
  });
  vue.onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve["default"].unsubscribe(subscribeToken);
    }
  });
}
exports.useResponsive = useResponsive;
