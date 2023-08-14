declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
    };
    max: {
        type: NumberConstructor;
    };
    step: {
        type: NumberConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    range: {
        type: BooleanConstructor;
    };
}, {
    prefixCls: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("startChange" | "endChange")[], "startChange" | "endChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    disabled?: unknown;
    range?: unknown;
} & {
    disabled: boolean;
    range: boolean;
    modelValue: unknown[];
} & {
    min?: number | undefined;
    max?: number | undefined;
    step?: number | undefined;
}> & {
    onStartChange?: ((...args: any[]) => any) | undefined;
    onEndChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    range: boolean;
}>;
export default _default;
