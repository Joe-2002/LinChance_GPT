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
var pad = require("../../../_utils/pad.js");
var globalConfig = require("../../../_utils/global-config.js");
var date = require("../../../_utils/date.js");
var header = require("../header.js");
var body = require("../body.js");
var pluginVue_exportHelper = require("../../../_virtual/plugin-vue_export-helper.js");
const _sfc_main = vue.defineComponent({
  name: "QuarterPanel",
  components: {
    PanelHeader: header,
    PanelBody: body
  },
  props: {
    headerValue: {
      type: Object,
      required: true
    },
    headerOperations: {
      type: Object,
      default: () => ({})
    },
    headerIcons: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object
    },
    disabledDate: {
      type: Function
    },
    rangeValues: {
      type: Array
    },
    dateRender: {
      type: Function
    },
    onHeaderLabelClick: {
      type: Function
    }
  },
  emits: ["select", "cell-mouse-enter"],
  setup(props, { emit }) {
    const { headerValue } = vue.toRefs(props);
    const prefixCls = vue.computed(() => globalConfig.getPrefixCls("panel-quarter"));
    const pickerPrefixCls = globalConfig.getPrefixCls("picker");
    const headerTitle = vue.computed(() => headerValue.value.format("YYYY"));
    const rows = vue.computed(() => {
      const year = headerValue.value.year();
      return [
        [1, 2, 3, 4].map((q) => ({
          label: `Q${q}`,
          value: date.dayjs(`${year}-${pad.padStart((q - 1) * 3 + 1, 2, "0")}-01`)
        }))
      ];
    });
    const isSameTime = (current, target) => current.isSame(target, "month") || current.isSame(target, "year") && Math.floor(current.month() / 3) === Math.floor(target.month() / 3);
    function onCellClick(cellData) {
      emit("select", cellData.value);
    }
    function onCellMouseEnter(cellData) {
      emit("cell-mouse-enter", cellData.value);
    }
    return {
      prefixCls,
      pickerPrefixCls,
      headerTitle,
      rows,
      isSameTime,
      onCellClick,
      onCellMouseEnter
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PanelHeader = vue.resolveComponent("PanelHeader");
  const _component_PanelBody = vue.resolveComponent("PanelBody");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.prefixCls)
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(`${_ctx.prefixCls}-inner`)
    }, [
      vue.createVNode(_component_PanelHeader, vue.mergeProps(__spreadProps(__spreadValues({}, _ctx.headerOperations), {
        icons: _ctx.headerIcons
      }), {
        "prefix-cls": _ctx.pickerPrefixCls,
        title: _ctx.headerTitle,
        mode: "quarter",
        value: _ctx.headerValue,
        "on-label-click": _ctx.onHeaderLabelClick
      }), null, 16, ["prefix-cls", "title", "value", "on-label-click"]),
      vue.createVNode(_component_PanelBody, {
        mode: "quarter",
        "prefix-cls": _ctx.pickerPrefixCls,
        rows: _ctx.rows,
        value: _ctx.value,
        "range-values": _ctx.rangeValues,
        "disabled-date": _ctx.disabledDate,
        "is-same-time": _ctx.isSameTime,
        "date-render": _ctx.dateRender,
        onCellClick: _ctx.onCellClick,
        onCellMouseEnter: _ctx.onCellMouseEnter
      }, null, 8, ["prefix-cls", "rows", "value", "range-values", "disabled-date", "is-same-time", "date-render", "onCellClick", "onCellMouseEnter"])
    ], 2)
  ], 2);
}
var QuarterPanel = /* @__PURE__ */ pluginVue_exportHelper(_sfc_main, [["render", _sfc_render]]);
module.exports = QuarterPanel;
