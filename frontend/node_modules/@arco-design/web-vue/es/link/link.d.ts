import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    href: StringConstructor;
    status: {
        type: PropType<"normal" | "success" | "warning" | "danger">;
        default: string;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    prefixCls: string;
    showIcon: import("vue").ComputedRef<boolean>;
    handleClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    href?: unknown;
    status?: unknown;
    hoverable?: unknown;
    icon?: unknown;
    loading?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    icon: boolean;
    loading: boolean;
    status: "normal" | "success" | "warning" | "danger";
    hoverable: boolean;
} & {
    href?: string | undefined;
}> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    disabled: boolean;
    icon: boolean;
    loading: boolean;
    status: "normal" | "success" | "warning" | "danger";
    hoverable: boolean;
}>;
export default _default;
