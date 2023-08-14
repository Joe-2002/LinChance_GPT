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
import { defineComponent, toRefs, computed, createVNode } from "vue";
import { getPrefixCls } from "../_utils/global-config.js";
const COLORS = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"];
const BADGE_STATUSES = ["normal", "processing", "success", "warning", "danger"];
var _Badge = defineComponent({
  name: "Badge",
  props: {
    text: {
      type: String
    },
    dot: {
      type: Boolean
    },
    dotStyle: {
      type: Object
    },
    maxCount: {
      type: Number,
      default: 99
    },
    offset: {
      type: Array,
      default: () => []
    },
    color: {
      type: String
    },
    status: {
      type: String,
      validator: (value) => {
        return BADGE_STATUSES.includes(value);
      }
    },
    count: {
      type: Number
    }
  },
  setup(props, {
    slots
  }) {
    const {
      status,
      color,
      dotStyle,
      offset,
      text,
      dot,
      maxCount,
      count
    } = toRefs(props);
    const prefixCls = getPrefixCls("badge");
    const wrapperClassName = useWrapperClass(prefixCls, status == null ? void 0 : status.value, slots == null ? void 0 : slots.default);
    const computedStyleRef = computed(() => {
      const computedDotStyle = __spreadValues({}, (dotStyle == null ? void 0 : dotStyle.value) || {});
      const [leftOffset, topOffset] = (offset == null ? void 0 : offset.value) || [];
      if (leftOffset) {
        computedDotStyle.marginRight = `${-leftOffset}px`;
      }
      if (topOffset) {
        computedDotStyle.marginTop = `${topOffset}px`;
      }
      const computedColorStyle = !(color == null ? void 0 : color.value) || COLORS.includes(color == null ? void 0 : color.value) ? {} : {
        backgroundColor: color.value
      };
      const mergedStyle = __spreadValues(__spreadValues({}, computedColorStyle), computedDotStyle);
      return {
        mergedStyle,
        computedDotStyle,
        computedColorStyle
      };
    });
    const getDot = () => {
      const textValue = text == null ? void 0 : text.value;
      const colorValue = color == null ? void 0 : color.value;
      const statusValue = status == null ? void 0 : status.value;
      const dotValue = dot == null ? void 0 : dot.value;
      const countValue = Number(count == null ? void 0 : count.value);
      const hasCount = (count == null ? void 0 : count.value) != null;
      const {
        computedDotStyle,
        mergedStyle
      } = computedStyleRef.value;
      if (slots.content) {
        return createVNode("span", {
          "class": `${prefixCls}-custom-dot`,
          "style": computedDotStyle
        }, [slots.content()]);
      }
      if (textValue && !colorValue && !statusValue) {
        return createVNode("span", {
          "class": `${prefixCls}-text`,
          "style": computedDotStyle
        }, [textValue]);
      }
      if (statusValue || colorValue && !hasCount) {
        return createVNode("span", {
          "class": `${prefixCls}-status-wrapper`
        }, [createVNode("span", {
          "class": [`${prefixCls}-status-dot`, {
            [`${prefixCls}-status-${statusValue}`]: statusValue,
            [`${prefixCls}-color-${colorValue}`]: colorValue
          }],
          "style": mergedStyle
        }, null), textValue && createVNode("span", {
          "class": `${prefixCls}-status-text`
        }, [textValue])]);
      }
      if ((dotValue || colorValue) && countValue > 0) {
        return createVNode("span", {
          "class": [`${prefixCls}-dot`, {
            [`${prefixCls}-color-${colorValue}`]: colorValue
          }],
          "style": mergedStyle
        }, null);
      }
      if (countValue === 0) {
        return null;
      }
      return createVNode("span", {
        "class": `${prefixCls}-number`,
        "style": mergedStyle
      }, [createVNode("span", null, [maxCount.value && countValue > maxCount.value ? `${maxCount.value}+` : countValue])]);
    };
    return () => {
      return createVNode("span", {
        "class": wrapperClassName.value
      }, [slots.default && slots.default(), getDot()]);
    };
  }
});
const useWrapperClass = (prefixCls, status, children) => {
  return computed(() => [prefixCls, {
    [`${prefixCls}-status`]: status,
    [`${prefixCls}-no-children`]: !children
  }]);
};
export { BADGE_STATUSES, COLORS, _Badge as default };
