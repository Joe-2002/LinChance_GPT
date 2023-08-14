declare const _default: import("vue").DefineComponent<{
    pages: {
        type: NumberConstructor;
        required: true;
    };
    current: {
        type: NumberConstructor;
        required: true;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    isNext: boolean;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pages?: unknown;
    current?: unknown;
    type?: unknown;
    disabled?: unknown;
    simple?: unknown;
} & {
    disabled: boolean;
    type: string;
    current: number;
    simple: boolean;
    pages: number;
} & {}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    simple: boolean;
}>;
export default _default;
