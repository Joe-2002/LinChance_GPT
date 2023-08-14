var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { toRefs, computed, reactive } from "vue";
import { isArray } from "../../_utils/is.js";
import useTimePickerValue from "./use-time-picker-value.js";
function useRangeTimePickerValue(props) {
  const { timePickerProps, selectedValue } = toRefs(props);
  const startValue = computed(() => {
    var _a;
    return (_a = selectedValue == null ? void 0 : selectedValue.value) == null ? void 0 : _a[0];
  });
  const endValue = computed(() => {
    var _a;
    return (_a = selectedValue == null ? void 0 : selectedValue.value) == null ? void 0 : _a[1];
  });
  const timePickerDefaultValue = computed(() => {
    var _a;
    return (_a = timePickerProps == null ? void 0 : timePickerProps.value) == null ? void 0 : _a.defaultValue;
  });
  const startTimePickerProps = computed(() => isArray(timePickerDefaultValue.value) ? __spreadProps(__spreadValues({}, timePickerProps == null ? void 0 : timePickerProps.value), {
    defaultValue: timePickerDefaultValue.value[0]
  }) : timePickerProps == null ? void 0 : timePickerProps.value);
  const endTimePickerProps = computed(() => isArray(timePickerDefaultValue.value) ? __spreadProps(__spreadValues({}, timePickerProps == null ? void 0 : timePickerProps.value), {
    defaultValue: timePickerDefaultValue.value[1]
  }) : timePickerProps == null ? void 0 : timePickerProps.value);
  const [startTimeValue, setStartTimeValue, resetStartTimeValue] = useTimePickerValue(reactive({
    timePickerProps: startTimePickerProps,
    selectedValue: startValue
  }));
  const [endTimeValue, setEndTimeValue, resetEndTimeValue] = useTimePickerValue(reactive({
    timePickerProps: endTimePickerProps,
    selectedValue: endValue
  }));
  const rangeTimePickerValue = computed(() => [
    startTimeValue.value,
    endTimeValue.value
  ]);
  function setTimeValue(val) {
    if (!val)
      return;
    setStartTimeValue(val[0]);
    setEndTimeValue(val[1]);
  }
  function resetTimeValue() {
    resetStartTimeValue();
    resetEndTimeValue();
  }
  return [rangeTimePickerValue, setTimeValue, resetTimeValue];
}
export { useRangeTimePickerValue as default };
