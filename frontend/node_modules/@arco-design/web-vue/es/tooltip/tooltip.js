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
import { defineComponent, ref, computed, resolveComponent, openBlock, createBlock, normalizeClass, withCtx, renderSlot, createTextVNode, toDisplayString } from "vue";
import { getPrefixCls } from "../_utils/global-config.js";
import Trigger from "../trigger/index.js";
import _export_sfc from "../_virtual/plugin-vue_export-helper.js";
const _sfc_main = defineComponent({
  name: "Tooltip",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("tooltip");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [
      `${prefixCls}-content`,
      props.contentClass,
      { [`${prefixCls}-mini`]: props.mini }
    ]);
    const computedContentStyle = computed(() => {
      if (props.backgroundColor || props.contentStyle) {
        return __spreadValues({
          backgroundColor: props.backgroundColor
        }, props.contentStyle);
      }
      return void 0;
    });
    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass
    ]);
    const computedArrowStyle = computed(() => {
      if (props.backgroundColor || props.arrowStyle) {
        return __spreadValues({
          backgroundColor: props.backgroundColor
        }, props.arrowStyle);
      }
      return void 0;
    });
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      computedContentStyle,
      arrowCls,
      computedArrowStyle,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: "hover",
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": _ctx.contentCls,
    "content-style": _ctx.computedContentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.computedArrowStyle,
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    role: "tooltip",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "content", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _Tooltip as default };
