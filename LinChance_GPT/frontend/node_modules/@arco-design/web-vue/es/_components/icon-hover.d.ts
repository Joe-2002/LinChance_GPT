import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefix: {
        type: StringConstructor;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefix?: unknown;
    size?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    size: "mini" | "medium" | "large" | "small";
} & {
    prefix?: string | undefined;
}>, {
    disabled: boolean;
    size: "mini" | "medium" | "large" | "small";
}>;
export default _default;
