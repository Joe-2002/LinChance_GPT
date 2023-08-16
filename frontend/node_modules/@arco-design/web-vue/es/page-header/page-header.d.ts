declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showBack: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    handleBack: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    subtitle?: unknown;
    showBack?: unknown;
} & {
    showBack: boolean;
} & {
    title?: string | undefined;
    subtitle?: string | undefined;
}> & {
    onBack?: ((...args: any[]) => any) | undefined;
}, {
    showBack: boolean;
}>;
export default _default;
