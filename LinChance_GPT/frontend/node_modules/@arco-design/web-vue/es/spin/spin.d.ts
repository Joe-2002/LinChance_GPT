declare const _default: import("vue").DefineComponent<{
    size: {
        type: NumberConstructor;
    };
    loading: BooleanConstructor;
    dot: BooleanConstructor;
    tip: StringConstructor;
    hideIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    loading?: unknown;
    dot?: unknown;
    tip?: unknown;
    hideIcon?: unknown;
} & {
    dot: boolean;
    loading: boolean;
    hideIcon: boolean;
} & {
    size?: number | undefined;
    tip?: string | undefined;
}>, {
    dot: boolean;
    loading: boolean;
    hideIcon: boolean;
}>;
export default _default;
