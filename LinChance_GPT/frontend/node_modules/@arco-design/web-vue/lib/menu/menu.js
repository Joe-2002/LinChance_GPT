"use strict";
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
var vue = require("vue");
var context = require("../layout/context.js");
var context$1 = require("./context.js");
var baseMenu = require("./base-menu.js");
var overflowWrap = require("./overflow-wrap.js");
var _Menu = vue.defineComponent({
  name: "Menu",
  components: {
    BaseMenu: baseMenu
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
    } = vue.toRefs(props);
    const siderContext = vue.inject(context.SiderInjectionKey, void 0);
    const siderCollapsed = vue.computed(() => (siderContext == null ? void 0 : siderContext.collapsed) || false);
    const theme = vue.computed(() => (propTheme == null ? void 0 : propTheme.value) || (siderContext == null ? void 0 : siderContext.theme) || "light");
    vue.provide(context$1.MenuInjectionKey, void 0);
    vue.provide(context$1.LevelInjectionKey, void 0);
    return () => vue.createVNode(baseMenu, vue.mergeProps(props, attrs, {
      "theme": theme.value,
      "inTrigger": false,
      "siderCollapsed": siderCollapsed.value,
      "isRoot": true
    }), __spreadProps(__spreadValues({}, slots), {
      default: mode.value === "horizontal" && slots.default ? () => vue.createVNode(overflowWrap, null, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      }) : slots.default
    }));
  }
});
module.exports = _Menu;
