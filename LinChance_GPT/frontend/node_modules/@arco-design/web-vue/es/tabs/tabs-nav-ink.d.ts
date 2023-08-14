import type { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    activeTabRef: {
        type: PropType<HTMLElement>;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
    };
    disabled: BooleanConstructor;
    animation: BooleanConstructor;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    style: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    activeTabRef?: unknown;
    direction?: unknown;
    disabled?: unknown;
    animation?: unknown;
} & {
    disabled: boolean;
    animation: boolean;
} & {
    direction?: "horizontal" | "vertical" | undefined;
    activeTabRef?: HTMLElement | undefined;
}>, {
    disabled: boolean;
    animation: boolean;
}>;
export default _default;
