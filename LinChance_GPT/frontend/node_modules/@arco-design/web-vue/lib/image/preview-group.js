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
var previewGroup_vue_vue_type_script_lang = require("./preview-group.vue_vue&type=script&lang.js");
var vue = require("vue");
var pluginVue_exportHelper = require("../_virtual/plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImagePreview = vue.resolveComponent("ImagePreview");
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.renderSlot(_ctx.$slots, "default"),
    vue.createVNode(_component_ImagePreview, vue.mergeProps(__spreadProps(__spreadValues({}, _ctx.$attrs), { groupArrowProps: _ctx.groupArrowProps }), {
      "in-group": "",
      src: _ctx.currentUrl,
      visible: _ctx.mergedVisible,
      "mask-closable": _ctx.maskClosable,
      closable: _ctx.closable,
      "actions-layout": _ctx.actionsLayout,
      "popup-container": _ctx.popupContainer,
      "render-to-body": _ctx.renderToBody,
      onClose: _ctx.onClose
    }), vue.createSlots({ _: 2 }, [
      _ctx.$slots.actions ? {
        name: "actions",
        fn: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "actions", { url: _ctx.currentUrl })
        ])
      } : void 0
    ]), 1040, ["src", "visible", "mask-closable", "closable", "actions-layout", "popup-container", "render-to-body", "onClose"])
  ], 64);
}
var ImagePreviewGroup = /* @__PURE__ */ pluginVue_exportHelper(previewGroup_vue_vue_type_script_lang, [["render", _sfc_render]]);
module.exports = ImagePreviewGroup;
