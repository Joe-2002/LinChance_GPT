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
import { computed, reactive, watch, ref } from "vue";
import { getOptionInfos, getValidOptions, isValidOption } from "../utils.js";
import { isNumber } from "../../_utils/is.js";
const DEFAULT_FIELD_NAMES = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
const useOptions = ({
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  valueKey,
  fieldNames
}) => {
  const mergedFieldNames = computed(() => __spreadValues(__spreadValues({}, DEFAULT_FIELD_NAMES), fieldNames == null ? void 0 : fieldNames.value));
  const slotOptionInfoMap = reactive(new Map());
  const sortedSlotOptionInfos = computed(() => Array.from(slotOptionInfoMap.values()).sort((a, b) => {
    if (isNumber(a.index) && isNumber(b.index)) {
      return a.index - b.index;
    }
    return 0;
  }));
  const propOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = new Map();
    const optionInfos = getOptionInfos((_a = options == null ? void 0 : options.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "options",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const extraOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = new Map();
    const optionInfos = getOptionInfos((_a = extraOptions == null ? void 0 : extraOptions.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "extraOptions",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const optionInfoMap = reactive(new Map());
  watch([
    sortedSlotOptionInfos,
    options != null ? options : ref([]),
    extraOptions != null ? extraOptions : ref([]),
    valueKey != null ? valueKey : ref("value")
  ], () => {
    optionInfoMap.clear();
    sortedSlotOptionInfos.value.forEach((info, index) => {
      optionInfoMap.set(info.key, __spreadProps(__spreadValues({}, info), { index }));
    });
    propOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
    extraOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
  }, { immediate: true, deep: true });
  const validOptions = computed(() => {
    var _a;
    const options2 = getValidOptions(propOptionData.value.optionInfos, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
    if ((_a = showExtraOptions == null ? void 0 : showExtraOptions.value) != null ? _a : true) {
      options2.push(...getValidOptions(extraOptionData.value.optionInfos, {
        inputValue: inputValue == null ? void 0 : inputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      }));
    }
    return options2;
  });
  const validOptionInfos = computed(() => Array.from(optionInfoMap.values()).filter((optionInfo) => {
    if (optionInfo.origin === "extraOptions" && (showExtraOptions == null ? void 0 : showExtraOptions.value) === false) {
      return false;
    }
    return isValidOption(optionInfo, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
  }));
  const enabledOptionKeys = computed(() => validOptionInfos.value.filter((optionInfo) => !optionInfo.disabled).map((info) => info.key));
  const getNextSlotOptionIndex = () => slotOptionInfoMap.size;
  const addSlotOptionInfo = (id, optionInfo) => {
    slotOptionInfoMap.set(id, optionInfo);
  };
  const removeSlotOptionInfo = (id) => {
    slotOptionInfoMap.delete(id);
  };
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  };
};
export { useOptions };
