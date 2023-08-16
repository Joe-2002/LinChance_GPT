declare const _default: import("vue").DefineComponent<{
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    showColon: {
        type: BooleanConstructor;
        default: boolean;
    };
    component: {
        type: StringConstructor;
        default: string;
    };
    asteriskPosition: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
    };
    attrs: ObjectConstructor;
}, {
    prefixCls: string;
    labelRef: import("vue").Ref<HTMLElement | undefined>;
    handleResize: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required?: unknown;
    showColon?: unknown;
    component?: unknown;
    asteriskPosition?: unknown;
    tooltip?: unknown;
    attrs?: unknown;
} & {
    required: boolean;
    component: string;
    showColon: boolean;
    asteriskPosition: string;
} & {
    attrs?: Record<string, any> | undefined;
    tooltip?: string | undefined;
}>, {
    required: boolean;
    component: string;
    showColon: boolean;
    asteriskPosition: string;
}>;
export default _default;
