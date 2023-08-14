declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    active: import("vue").ComputedRef<boolean>;
    itemRef: import("vue").Ref<HTMLElement | undefined>;
    mounted: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    disabled?: unknown;
    closable?: unknown;
    destroyOnHide?: unknown;
} & {
    disabled: boolean;
    closable: boolean;
    destroyOnHide: boolean;
} & {
    title?: string | undefined;
}>, {
    disabled: boolean;
    closable: boolean;
    destroyOnHide: boolean;
}>;
export default _default;
