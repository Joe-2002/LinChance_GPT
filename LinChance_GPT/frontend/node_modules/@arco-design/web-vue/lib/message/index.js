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
var constant = require("../_utils/constant.js");
var dom = require("../_utils/dom.js");
var is = require("../_utils/is.js");
var messageList = require("./message-list.js");
class MessageManger {
  constructor(config, appContext) {
    this.messageCount = 0;
    this.add = (config2) => {
      var _a;
      this.messageCount++;
      const id = (_a = config2.id) != null ? _a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(id)) {
        return this.update(id, config2);
      }
      const message2 = vue.reactive(__spreadValues({ id }, config2));
      this.messages.value.push(message2);
      this.messageIds.add(id);
      return {
        close: () => this.remove(id)
      };
    };
    this.update = (id, config2) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        if (this.messages.value[i].id === id) {
          const resetOnUpdate = !is.isUndefined(config2.duration);
          Object.assign(this.messages.value[i], __spreadProps(__spreadValues({}, config2), { id, resetOnUpdate }));
          break;
        }
      }
      return {
        close: () => this.remove(id)
      };
    };
    this.remove = (id) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        const item = this.messages.value[i];
        if (item.id === id) {
          if (is.isFunction(item.onClose)) {
            item.onClose(id);
          }
          this.messages.value.splice(i, 1);
          this.messageIds.delete(id);
          break;
        }
      }
    };
    this.clear = () => {
      this.messages.value.splice(0);
    };
    this.destroy = () => {
      if (this.messages.value.length === 0 && this.container) {
        vue.render(null, this.container);
        document.body.removeChild(this.container);
        this.container = null;
        messageInstance[this.position] = void 0;
      }
    };
    const { position = "top" } = config;
    this.container = dom.getOverlay("message");
    this.messageIds = new Set();
    this.messages = vue.ref([]);
    this.position = position;
    const vm = vue.createVNode(messageList, {
      messages: this.messages.value,
      position,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    if (appContext != null ? appContext : Message._context) {
      vm.appContext = appContext != null ? appContext : Message._context;
    }
    vue.render(vm, this.container);
    document.body.appendChild(this.container);
  }
}
const messageInstance = {};
const types = [...constant.MESSAGE_TYPES, "loading", "normal"];
const message = types.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    if (is.isString(config)) {
      config = { content: config };
    }
    const _config = __spreadValues({ type: value }, config);
    const { position = "top" } = _config;
    if (!messageInstance[position]) {
      messageInstance[position] = new MessageManger(_config, appContext);
    }
    return messageInstance[position].add(_config);
  };
  return pre;
}, {});
message.clear = (position) => {
  var _a;
  if (position) {
    (_a = messageInstance[position]) == null ? void 0 : _a.clear();
  } else {
    Object.values(messageInstance).forEach((item) => item == null ? void 0 : item.clear());
  }
};
const Message = __spreadProps(__spreadValues({}, message), {
  install: (app) => {
    const _message = {
      clear: message.clear
    };
    for (const key of types) {
      _message[key] = (config, appContext = app._context) => message[key](config, appContext);
    }
    app.config.globalProperties.$message = _message;
  },
  _context: null
});
module.exports = Message;
