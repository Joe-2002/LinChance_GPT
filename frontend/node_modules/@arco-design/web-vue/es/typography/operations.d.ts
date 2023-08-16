declare const _default: import("vue").DefineComponent<{
    editable: BooleanConstructor;
    copyable: BooleanConstructor;
    expandable: BooleanConstructor;
    isCopied: BooleanConstructor;
    isEllipsis: BooleanConstructor;
    expanded: BooleanConstructor;
    forceRenderExpand: BooleanConstructor;
    editTooltipProps: ObjectConstructor;
    copyTooltipProps: ObjectConstructor;
}, {
    prefixCls: string;
    showExpand: import("vue").ComputedRef<boolean>;
    t: (key: string, ...args: any[]) => string;
    onEditClick(): void;
    onCopyClick(): void;
    onExpandClick(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    edit: () => true;
    copy: () => true;
    expand: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    editable?: unknown;
    copyable?: unknown;
    expandable?: unknown;
    isCopied?: unknown;
    isEllipsis?: unknown;
    expanded?: unknown;
    forceRenderExpand?: unknown;
    editTooltipProps?: unknown;
    copyTooltipProps?: unknown;
} & {
    expanded: boolean;
    expandable: boolean;
    editable: boolean;
    copyable: boolean;
    isCopied: boolean;
    isEllipsis: boolean;
    forceRenderExpand: boolean;
} & {
    editTooltipProps?: Record<string, any> | undefined;
    copyTooltipProps?: Record<string, any> | undefined;
}> & {
    onCopy?: (() => any) | undefined;
    onExpand?: (() => any) | undefined;
    onEdit?: (() => any) | undefined;
}, {
    expanded: boolean;
    expandable: boolean;
    editable: boolean;
    copyable: boolean;
    isCopied: boolean;
    isEllipsis: boolean;
    forceRenderExpand: boolean;
}>;
export default _default;
