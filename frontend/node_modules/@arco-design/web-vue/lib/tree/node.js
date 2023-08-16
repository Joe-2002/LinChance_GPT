"use strict";
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
var vue = require("vue");
var baseNode = require("./base-node.js");
var useNodeKey = require("./hooks/use-node-key.js");
var transitionNodeList = require("./transition-node-list.js");
var TreeNode = vue.defineComponent({
  name: "TreeNode",
  inheritAttrs: false,
  props: __spreadValues({}, baseNode.props),
  setup(props, {
    slots,
    attrs
  }) {
    const key = useNodeKey();
    return () => {
      return vue.createVNode(vue.Fragment, null, [vue.createVNode(baseNode, vue.mergeProps(props, attrs, {
        "key": key.value
      }), slots), vue.createVNode(transitionNodeList, {
        "key": key.value,
        "nodeKey": key.value
      }, null)]);
    };
  }
});
module.exports = TreeNode;
