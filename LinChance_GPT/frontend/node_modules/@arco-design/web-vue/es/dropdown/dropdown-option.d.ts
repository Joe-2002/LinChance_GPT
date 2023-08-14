declare const _default: import("vue").DefineComponent<{
    value: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: BooleanConstructor;
    uninjectContext: BooleanConstructor;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    liRef: import("vue").Ref<HTMLElement | undefined>;
    handleClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    disabled?: unknown;
    active?: unknown;
    uninjectContext?: unknown;
} & {
    disabled: boolean;
    active: boolean;
    uninjectContext: boolean;
} & {
    value?: string | number | Record<string, any> | undefined;
}> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    disabled: boolean;
    active: boolean;
    uninjectContext: boolean;
}>;
export default _default;
