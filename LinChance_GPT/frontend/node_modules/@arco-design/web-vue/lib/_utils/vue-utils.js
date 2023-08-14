"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var is = require("./is.js");
exports.ShapeFlags = void 0;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(exports.ShapeFlags || (exports.ShapeFlags = {}));
exports.PatchFlags = void 0;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(exports.PatchFlags || (exports.PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isTextChildren = (child, children) => {
  return Boolean(child && child.shapeFlag & 8);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
const getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (is.isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = is.isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = vue.cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (is.isArray(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
const getAllElements = (children, includeText = false) => {
  var _a, _b;
  const results = [];
  for (const item of children != null ? children : []) {
    if (isElement(item) || isComponent(item) || includeText && isTextChildren(item, item.children)) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements((_b = (_a = item.children).default) == null ? void 0 : _b.call(_a), includeText));
    } else if (is.isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
function unFragment(nodeList) {
  function loop(nodes) {
    const unFragmentNodeList = [];
    nodes.forEach((node) => {
      var _a, _b;
      if (vue.isVNode(node) && node.type === vue.Fragment) {
        if (isSlotsChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(((_b = (_a = node.children).default) == null ? void 0 : _b.call(_a)) || []));
        } else if (isArrayChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(node.children));
        } else if (is.isString(node.children)) {
          unFragmentNodeList.push(node.children);
        }
      } else {
        unFragmentNodeList.push(node);
      }
    });
    return unFragmentNodeList;
  }
  return loop(nodeList);
}
const getSlotFunction = (param) => {
  if (param) {
    if (is.isFunction(param))
      return param;
    return () => param;
  }
  return void 0;
};
const getComponentsFromVNode = (vn, name) => {
  var _a;
  const components = [];
  if (isComponent(vn, vn.type)) {
    if (vn.type.name === name) {
      if (vn.component) {
        components.push(vn.component.uid);
      }
    } else if ((_a = vn.component) == null ? void 0 : _a.subTree) {
      components.push(...getComponentsFromVNode(vn.component.subTree, name));
    }
  } else {
    const children = getChildrenArray(vn);
    if (children) {
      components.push(...getComponentsFromChildren(children, name));
    }
  }
  return components;
};
const getComponentsFromChildren = (children, name) => {
  const components = [];
  if (children && children.length > 0) {
    for (const child of children) {
      components.push(...getComponentsFromVNode(child, name));
    }
  }
  return components;
};
exports.getAllElements = getAllElements;
exports.getChildrenArray = getChildrenArray;
exports.getComponentsFromChildren = getComponentsFromChildren;
exports.getComponentsFromVNode = getComponentsFromVNode;
exports.getFirstComponent = getFirstComponent;
exports.getFirstElementFromChildren = getFirstElementFromChildren;
exports.getFirstElementFromVNode = getFirstElementFromVNode;
exports.getSlotFunction = getSlotFunction;
exports.isArrayChildren = isArrayChildren;
exports.isComponent = isComponent;
exports.isElement = isElement;
exports.isEmptyChildren = isEmptyChildren;
exports.isSlotsChildren = isSlotsChildren;
exports.isTextChildren = isTextChildren;
exports.mergeFirstChild = mergeFirstChild;
exports.unFragment = unFragment;
