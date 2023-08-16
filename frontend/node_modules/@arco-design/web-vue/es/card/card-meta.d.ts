export declare const SIZES: readonly ["default", "small"];
export declare type SizeType = typeof SIZES[number];
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    description?: unknown;
} & {} & {
    title?: string | undefined;
    description?: string | undefined;
}>, {}>;
export default _default;
