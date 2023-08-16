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
import { defineComponent, createVNode, Fragment, mergeProps } from "vue";
import BaseTreeNode from "./base-node.js";
import useNodeKey from "./hooks/use-node-key.js";
import TransitionNodeList from "./transition-node-list.js";
var TreeNode = defineComponent({
  name: "TreeNode",
  inheritAttrs: false,
  props: __spreadValues({}, BaseTreeNode.props),
  setup(props, {
    slots,
    attrs
  }) {
    const key = useNodeKey();
    return () => {
      return createVNode(Fragment, null, [createVNode(BaseTreeNode, mergeProps(props, attrs, {
        "key": key.value
      }), slots), createVNode(TransitionNodeList, {
        "key": key.value,
        "nodeKey": key.value
      }, null)]);
    };
  }
});
export { TreeNode as default };
