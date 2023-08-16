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
import { createVNode, render, nextTick } from "vue";
import { getOverlay } from "../_utils/dom.js";
import { setGlobalConfig, getComponentPrefix } from "../_utils/global-config.js";
import { isFunction } from "../_utils/is.js";
import { omit } from "../_utils/omit.js";
import { getSlotFunction } from "../_utils/vue-utils.js";
import _Drawer from "./drawer.js";
const open = (config, appContext) => {
  let container = getOverlay("drawer");
  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction(config.onOk)) {
      config.onOk();
    }
  };
  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction(config.onCancel)) {
      config.onCancel();
    }
  };
  const handleClose = async () => {
    await nextTick();
    if (container) {
      render(null, container);
      document.body.removeChild(container);
    }
    container = null;
    if (isFunction(config.onClose)) {
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
  const vm = createVNode(_Drawer, __spreadValues(__spreadValues(__spreadValues({}, defaultConfig), omit(config, [
    "content",
    "title",
    "footer",
    "visible",
    "unmountOnClose",
    "onOk",
    "onCancel",
    "onClose"
  ])), {
    header: typeof config.header === "boolean" ? config.header : void 0,
    footer: typeof config.footer === "boolean" ? config.footer : void 0
  }), {
    default: getSlotFunction(config.content),
    header: typeof config.header !== "boolean" ? getSlotFunction(config.header) : void 0,
    title: getSlotFunction(config.title),
    footer: typeof config.footer !== "boolean" ? getSlotFunction(config.footer) : void 0
  });
  if (appContext != null ? appContext : Drawer._context) {
    vm.appContext = appContext != null ? appContext : Drawer._context;
  }
  render(vm, container);
  document.body.appendChild(container);
  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};
const Drawer = Object.assign(_Drawer, {
  open,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Drawer.name, _Drawer);
    const drawerWithContext = {
      open: (config, appContext = app._context) => open(config, appContext)
    };
    app.config.globalProperties.$drawer = drawerWithContext;
  },
  _context: null
});
export { Drawer as default };
