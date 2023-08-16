import type { PropType, CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    rows: {
        type: NumberConstructor;
        default: number;
    };
    widths: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    lineHeight: {
        type: NumberConstructor;
        default: number;
    };
    lineSpacing: {
        type: NumberConstructor;
        default: number;
    };
}, {
    prefixCls: string;
    lines: CSSProperties[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rows?: unknown;
    widths?: unknown;
    lineHeight?: unknown;
    lineSpacing?: unknown;
} & {
    lineHeight: number;
    rows: number;
    widths: (string | number)[];
    lineSpacing: number;
} & {}>, {
    lineHeight: number;
    rows: number;
    widths: (string | number)[];
    lineSpacing: number;
}>;
export default _default;
