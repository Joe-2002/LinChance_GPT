declare const _default: import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    showArrow: {
        type: StringConstructor;
        default: string;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    onPreviousClick: (ev: MouseEvent) => void;
    onNextClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("previousClick" | "nextClick")[], "previousClick" | "nextClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction?: unknown;
    showArrow?: unknown;
} & {
    showArrow: string;
    direction: string;
} & {}> & {
    onPreviousClick?: ((...args: any[]) => any) | undefined;
    onNextClick?: ((...args: any[]) => any) | undefined;
}, {
    showArrow: string;
    direction: string;
}>;
export default _default;
