"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const target = typeof window === "undefined" ? global : window;
const raf = target.requestAnimationFrame;
const caf = target.cancelAnimationFrame;
exports.caf = caf;
exports.raf = raf;
