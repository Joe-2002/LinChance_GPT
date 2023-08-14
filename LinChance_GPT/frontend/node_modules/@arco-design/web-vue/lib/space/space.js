"use strict";
var vue = require("vue");
var is = require("../_utils/is.js");
var vueUtils = require("../_utils/vue-utils.js");
var globalConfig = require("../_utils/global-config.js");
var _Space = vue.defineComponent({
  name: "Space",
  props: {
    align: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean
    },
    fill: {
      type: Boolean
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = globalConfig.getPrefixCls("space");
    const mergedAlign = vue.computed(() => {
      var _a;
      return (_a = props.align) != null ? _a : props.direction === "horizontal" ? "center" : "";
    });
    const cls = vue.computed(() => [prefixCls, {
      [`${prefixCls}-${props.direction}`]: props.direction,
      [`${prefixCls}-align-${mergedAlign.value}`]: mergedAlign.value,
      [`${prefixCls}-wrap`]: props.wrap,
      [`${prefixCls}-fill`]: props.fill
    }]);
    function getMargin(size) {
      if (is.isNumber(size)) {
        return size;
      }
      switch (size) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }
    const getMarginStyle = (isLast) => {
      const style = {};
      const marginRight = `${getMargin(is.isArray(props.size) ? props.size[0] : props.size)}px`;
      const marginBottom = `${getMargin(is.isArray(props.size) ? props.size[1] : props.size)}px`;
      if (isLast) {
        return props.wrap ? {
          marginBottom
        } : {};
      }
      if (props.direction === "horizontal") {
        style.marginRight = marginRight;
      }
      if (props.direction === "vertical" || props.wrap) {
        style.marginBottom = marginBottom;
      }
      return style;
    };
    return () => {
      var _a;
      const children = vueUtils.getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== vue.Comment);
      return vue.createVNode("div", {
        "class": cls.value
      }, [children.map((child, index) => {
        var _a2, _b;
        const shouldRenderSplit = slots.split && index > 0;
        return vue.createVNode(vue.Fragment, {
          "key": (_a2 = child.key) != null ? _a2 : `item-${index}`
        }, [shouldRenderSplit && vue.createVNode("div", {
          "class": `${prefixCls}-item-split`,
          "style": getMarginStyle(false)
        }, [(_b = slots.split) == null ? void 0 : _b.call(slots)]), vue.createVNode("div", {
          "class": `${prefixCls}-item`,
          "style": getMarginStyle(index === children.length - 1)
        }, [child])]);
      })]);
    };
  }
});
module.exports = _Space;
