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
var globalConfig = require("../_utils/global-config.js");
var is = require("../_utils/is.js");
var context = require("./context.js");
var vueUtils = require("../_utils/vue-utils.js");
var useResponsiveState = require("../grid/hook/use-responsive-state.js");
var useSize = require("../_hooks/use-size.js");
const getTotalSpan = (renderData) => {
  return renderData ? renderData.reduce((total, data) => total + data.span, 0) : 0;
};
var _Descriptions = vue.defineComponent({
  name: "Descriptions",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    column: {
      type: [Number, Object],
      default: 3
    },
    title: String,
    layout: {
      type: String,
      default: "horizontal"
    },
    align: {
      type: [String, Object],
      default: "left"
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: false
    },
    labelStyle: {
      type: Object
    },
    valueStyle: {
      type: Object
    },
    tableLayout: {
      type: String,
      default: "auto"
    }
  },
  setup(props, {
    slots
  }) {
    const {
      column,
      size
    } = vue.toRefs(props);
    const prefixCls = globalConfig.getPrefixCls("descriptions");
    const {
      mergedSize
    } = useSize.useSize(size);
    const computedColumn = useResponsiveState.useResponsiveState(column, 3, true);
    const labelAlign = vue.computed(() => {
      var _a;
      return (_a = is.isObject(props.align) ? props.align.label : props.align) != null ? _a : "left";
    });
    const valueAlign = vue.computed(() => {
      var _a;
      return (_a = is.isObject(props.align) ? props.align.value : props.align) != null ? _a : "left";
    });
    const labelStyle = vue.computed(() => __spreadValues({
      textAlign: labelAlign.value
    }, props.labelStyle));
    const valueStyle = vue.computed(() => __spreadValues({
      textAlign: valueAlign.value
    }, props.valueStyle));
    const descItemMap = vue.reactive(new Map());
    const sortedSpans = vue.computed(() => Array.from(descItemMap.values()).sort((a, b) => a.index - b.index).map((data) => data.span));
    const addItem = (id, data) => {
      descItemMap.set(id, data);
    };
    const removeItem = (id) => {
      descItemMap.delete(id);
    };
    vue.provide(context.descriptionsInjectionKey, vue.reactive({
      addItem,
      removeItem
    }));
    const getGroupedData = (data) => {
      const groupedData2 = [];
      data.forEach((item, index) => {
        var _a;
        const itemSpan = Math.min((_a = vue.isVNode(item) ? sortedSpans.value[index] : item.span) != null ? _a : 1, computedColumn.value);
        const lastData = groupedData2[groupedData2.length - 1];
        const lastDataTotalSpan = getTotalSpan(lastData);
        if (lastDataTotalSpan === 0 || lastDataTotalSpan >= computedColumn.value) {
          groupedData2.push([{
            data: item,
            span: itemSpan
          }]);
        } else {
          lastData.push({
            data: item,
            span: itemSpan + lastDataTotalSpan > computedColumn.value ? computedColumn.value - lastDataTotalSpan : itemSpan
          });
        }
      });
      if (groupedData2.length) {
        const lastData = groupedData2[groupedData2.length - 1];
        const lastDataTotalSpan = getTotalSpan(lastData);
        if (lastDataTotalSpan < computedColumn.value) {
          lastData[lastData.length - 1].span += computedColumn.value - lastDataTotalSpan;
        }
      }
      return groupedData2;
    };
    const groupedData = vue.computed(() => {
      var _a;
      return getGroupedData((_a = props.data) != null ? _a : []);
    });
    const renderLabel = (item, index) => {
      var _a, _b, _c, _d, _e;
      if (vue.isVNode(item)) {
        return vueUtils.isSlotsChildren(item, item.children) && ((_b = (_a = item.children).label) == null ? void 0 : _b.call(_a)) || ((_c = item.props) == null ? void 0 : _c.label);
      }
      return (_e = (_d = slots.label) == null ? void 0 : _d.call(slots, {
        label: item.label,
        index,
        data: item
      })) != null ? _e : is.isFunction(item.label) ? item.label() : item.label;
    };
    const renderValue = (item, index) => {
      var _a, _b;
      if (vue.isVNode(item)) {
        return item;
      }
      return (_b = (_a = slots.value) == null ? void 0 : _a.call(slots, {
        value: item.value,
        index,
        data: item
      })) != null ? _b : is.isFunction(item.value) ? item.value() : item.value;
    };
    const renderVerticalItems = (data) => vue.createVNode(vue.Fragment, null, [vue.createVNode("tr", {
      "class": `${prefixCls}-row`
    }, [data.map((item, index) => vue.createVNode("td", {
      "key": `label-${index}`,
      "class": [`${prefixCls}-item-label`, `${prefixCls}-item-label-block`],
      "style": labelStyle.value,
      "colspan": item.span
    }, [renderLabel(item.data, index)]))]), vue.createVNode("tr", {
      "class": `${prefixCls}-row`
    }, [data.map((item, index) => vue.createVNode("td", {
      "key": `value-${index}`,
      "class": [`${prefixCls}-item-value`, `${prefixCls}-item-value-block`],
      "style": valueStyle.value,
      "colspan": item.span
    }, [renderValue(item.data, index)]))])]);
    const renderHorizontalItems = (data, index) => vue.createVNode("tr", {
      "class": `${prefixCls}-row`,
      "key": `tr-${index}`
    }, [data.map((item) => vue.createVNode(vue.Fragment, null, [vue.createVNode("td", {
      "class": [`${prefixCls}-item-label`, `${prefixCls}-item-label-block`],
      "style": labelStyle.value
    }, [renderLabel(item.data, index)]), vue.createVNode("td", {
      "class": [`${prefixCls}-item-value`, `${prefixCls}-item-value-block`],
      "style": valueStyle.value,
      "colspan": item.span * 2 - 1
    }, [renderValue(item.data, index)])]))]);
    const renderInlineItems = (data, index) => vue.createVNode("tr", {
      "class": `${prefixCls}-row`,
      "key": `inline-${index}`
    }, [data.map((item, index2) => vue.createVNode("td", {
      "key": `item-${index2}`,
      "class": `${prefixCls}-item`,
      "colspan": item.span
    }, [vue.createVNode("div", {
      "class": [`${prefixCls}-item-label`, `${prefixCls}-item-label-inline`],
      "style": labelStyle.value
    }, [renderLabel(item.data, index2)]), vue.createVNode("div", {
      "class": [`${prefixCls}-item-value`, `${prefixCls}-item-value-inline`],
      "style": valueStyle.value
    }, [renderValue(item.data, index2)])]))]);
    const renderItems = (data, index) => {
      if (["inline-horizontal", "inline-vertical"].includes(props.layout)) {
        return renderInlineItems(data, index);
      }
      if (props.layout === "vertical") {
        return renderVerticalItems(data);
      }
      return renderHorizontalItems(data, index);
    };
    const cls = vue.computed(() => [prefixCls, `${prefixCls}-layout-${props.layout}`, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-border`]: props.bordered
    }, {
      [`${prefixCls}-table-layout-fixed`]: props.tableLayout === "fixed"
    }]);
    const renderTitle = () => {
      var _a, _b;
      const title = (_b = (_a = slots.title) == null ? void 0 : _a.call(slots)) != null ? _b : props.title;
      if (title) {
        return vue.createVNode("div", {
          "class": `${prefixCls}-title`
        }, [title]);
      }
      return null;
    };
    return () => {
      const _groupedData = slots.default ? getGroupedData(vueUtils.getAllElements(slots.default())) : groupedData.value;
      return vue.createVNode("div", {
        "class": cls.value
      }, [renderTitle(), vue.createVNode("div", {
        "class": `${prefixCls}-body`
      }, [vue.createVNode("table", {
        "class": `${prefixCls}-table`
      }, [vue.createVNode("tbody", null, [_groupedData.map((data, index) => renderItems(data, index))])])])]);
    };
  }
});
module.exports = _Descriptions;
