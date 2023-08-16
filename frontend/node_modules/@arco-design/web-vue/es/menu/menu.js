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
import { defineComponent, toRefs, inject, computed, provide, createVNode, mergeProps } from "vue";
import { SiderInjectionKey } from "../layout/context.js";
import { MenuInjectionKey, LevelInjectionKey } from "./context.js";
import BaseMenu from "./base-menu.js";
import OverflowWrap from "./overflow-wrap.js";
var _Menu = defineComponent({
  name: "Menu",
  components: {
    BaseMenu
  },
  inheritAttrs: false,
  props: {
    theme: {
      type: String
    },
    mode: {
      type: String,
      default: "vertical"
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const {
      theme: propTheme,
      mode
    } = toRefs(props);
    const siderContext = inject(SiderInjectionKey, void 0);
    const siderCollapsed = computed(() => (siderContext == null ? void 0 : siderContext.collapsed) || false);
    const theme = computed(() => (propTheme == null ? void 0 : propTheme.value) || (siderContext == null ? void 0 : siderContext.theme) || "light");
    provide(MenuInjectionKey, void 0);
    provide(LevelInjectionKey, void 0);
    return () => createVNode(BaseMenu, mergeProps(props, attrs, {
      "theme": theme.value,
      "inTrigger": false,
      "siderCollapsed": siderCollapsed.value,
      "isRoot": true
    }), __spreadProps(__spreadValues({}, slots), {
      default: mode.value === "horizontal" && slots.default ? () => createVNode(OverflowWrap, null, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      }) : slots.default
    }));
  }
});
export { _Menu as default };
