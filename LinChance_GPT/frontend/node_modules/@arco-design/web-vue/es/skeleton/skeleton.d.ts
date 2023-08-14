declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loading?: unknown;
    animation?: unknown;
} & {
    loading: boolean;
    animation: boolean;
} & {}>, {
    loading: boolean;
    animation: boolean;
}>;
export default _default;
