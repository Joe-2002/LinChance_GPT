declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    href: StringConstructor;
}, {
    prefixCls: string;
    linkCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    linkRef: import("vue").Ref<HTMLElement | undefined>;
    handleClick: (e: MouseEvent) => void | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    href?: unknown;
} & {} & {
    title?: string | undefined;
    href?: string | undefined;
}>, {}>;
export default _default;
