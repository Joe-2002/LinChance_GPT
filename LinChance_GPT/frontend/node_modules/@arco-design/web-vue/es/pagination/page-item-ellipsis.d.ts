declare const _default: import("vue").DefineComponent<{
    current: {
        type: NumberConstructor;
        required: true;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    pages: {
        type: NumberConstructor;
        required: true;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<string[]>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    current?: unknown;
    step?: unknown;
    pages?: unknown;
} & {
    current: number;
    step: number;
    pages: number;
} & {}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    step: number;
}>;
export default _default;
