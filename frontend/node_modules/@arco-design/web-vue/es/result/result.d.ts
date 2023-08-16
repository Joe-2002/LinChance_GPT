import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    status: {
        type: PropType<"error" | "success" | "warning" | "info" | "403" | "404" | "500" | null>;
        default: string;
        validator: (value: any) => boolean;
    };
    title: StringConstructor;
    subtitle: StringConstructor;
}, {
    prefixCls: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    status?: unknown;
    title?: unknown;
    subtitle?: unknown;
} & {
    status: "error" | "success" | "warning" | "info" | "403" | "404" | "500" | null;
} & {
    title?: string | undefined;
    subtitle?: string | undefined;
}>, {
    status: "error" | "success" | "warning" | "info" | "403" | "404" | "500" | null;
}>;
export default _default;
