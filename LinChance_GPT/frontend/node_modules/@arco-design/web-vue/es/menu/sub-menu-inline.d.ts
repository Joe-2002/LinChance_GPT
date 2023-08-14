declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    isChildrenSelected: {
        type: BooleanConstructor;
    };
}, {
    prefixCls: import("vue").ComputedRef<string>;
    menuPrefixCls: import("vue").ComputedRef<string | undefined>;
    classNames: import("vue").ComputedRef<string[]>;
    level: import("vue").ComputedRef<number>;
    isSelected: import("vue").ComputedRef<boolean>;
    isOpen: import("vue").ComputedRef<boolean>;
    onHeaderClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    isChildrenSelected?: unknown;
} & {
    isChildrenSelected: boolean;
} & {
    title?: string | undefined;
}>, {
    isChildrenSelected: boolean;
}>;
export default _default;
