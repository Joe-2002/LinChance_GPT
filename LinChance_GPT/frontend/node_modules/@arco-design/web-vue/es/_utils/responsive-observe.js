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
const responsiveArray = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
const responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let subscribers = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap, breakpointChecked) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func
    });
    func(screens, null);
    return token;
  },
  unsubscribe(token) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const handler = this.matchHandlers[matchMediaQuery];
      if (handler && handler.mql && handler.listener) {
        if (handler.mql.removeEventListener) {
          handler.mql.removeEventListener("change", handler.listener);
        } else {
          handler.mql.removeListener(handler.listener);
        }
      }
    });
  },
  register() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const listener = ({ matches }) => {
        this.dispatch(__spreadProps(__spreadValues({}, screens), {
          [screen]: matches
        }), screen);
      };
      const mql = window.matchMedia(matchMediaQuery);
      if (mql.addEventListener) {
        mql.addEventListener("change", listener);
      } else {
        mql.addListener(listener);
      }
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  }
};
export { responsiveObserve as default, responsiveArray, responsiveMap };
