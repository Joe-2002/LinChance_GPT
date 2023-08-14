import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    onResize: (entry: ResizeObserverEntry) => void;
    isHorizontal: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    direction?: unknown;
} & {
    prefixCls: string;
    direction: "horizontal" | "vertical";
} & {}> & {
    onResize?: ((...args: any[]) => any) | undefined;
}, {
    direction: "horizontal" | "vertical";
}>;
export default _default;
