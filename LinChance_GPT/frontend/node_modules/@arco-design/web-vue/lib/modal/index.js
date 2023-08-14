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
var globalConfig = require("../_utils/global-config.js");
var constant = require("../_utils/constant.js");
var dom = require("../_utils/dom.js");
var is = require("../_utils/is.js");
var modal$1 = require("./modal.js");
var omit = require("../_utils/omit.js");
var vueUtils = require("../_utils/vue-utils.js");
const open = (config, appContext) => {
  let container = dom.getOverlay("modal");
  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (is.isFunction(config.onOk)) {
      config.onOk();
    }
  };
  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (is.isFunction(config.onCancel)) {
      config.onCancel();
    }
  };
  const handleClose = async () => {
    await vue.nextTick();
    if (container) {
      vue.render(null, container);
      document.body.removeChild(container);
    }
    container = null;
    if (is.isFunction(config.onClose)) {
      config.onClose();
    }
  };
  const handleReturnClose = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
  };
  const handleUpdateConfig = (config2) => {
    if (vm.component) {
      Object.entries(config2).forEach(([key, value]) => {
        vm.component.props[key] = value;
      });
    }
  };
  const defaultConfig = {
    visible: true,
    renderToBody: false,
    unmountOnClose: true,
    onOk: handleOk,
    onCancel: handleCancel,
    onClose: handleClose
  };
  const vm = vue.createVNode(modal$1, __spreadValues(__spreadValues(__spreadValues({}, defaultConfig), omit.omit(config, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), {
    footer: typeof config.footer === "boolean" ? config.footer : void 0
  }), {
    default: vueUtils.getSlotFunction(config.content),
    title: vueUtils.getSlotFunction(config.title),
    footer: typeof config.footer !== "boolean" ? vueUtils.getSlotFunction(config.footer) : void 0
  });
  if (appContext != null ? appContext : Modal._context) {
    vm.appContext = appContext != null ? appContext : Modal._context;
  }
  vue.render(vm, container);
  document.body.appendChild(container);
  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};
const modal = __spreadValues({
  open,
  confirm: (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      messageType: "warning"
    }, config);
    return open(_config, appContext);
  }
}, constant.MESSAGE_TYPES.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      hideCancel: true,
      messageType: value
    }, config);
    return open(_config, appContext);
  };
  return pre;
}, {}));
const Modal = Object.assign(modal$1, __spreadProps(__spreadValues({}, modal), {
  install: (app, options) => {
    globalConfig.setGlobalConfig(app, options);
    const componentPrefix = globalConfig.getComponentPrefix(options);
    app.component(componentPrefix + modal$1.name, modal$1);
    const modalWithContext = {};
    for (const key of Object.keys(modal)) {
      modalWithContext[key] = (config, appContext = app._context) => modal[key](config, appContext);
    }
    app.config.globalProperties.$modal = modalWithContext;
  },
  _context: null
}));
module.exports = Modal;
