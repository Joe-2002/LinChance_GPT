import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"dashed" | "text" | "outline" | "primary" | "secondary">;
    };
    status: {
        type: PropType<"normal" | "success" | "warning" | "danger">;
    };
    shape: {
        type: PropType<"round" | "circle" | "square">;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    disabled: {
        type: BooleanConstructor;
    };
}, {
    prefixCls: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    status?: unknown;
    shape?: unknown;
    size?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
} & {
    size?: "mini" | "medium" | "large" | "small" | undefined;
    type?: "dashed" | "text" | "outline" | "primary" | "secondary" | undefined;
    shape?: "round" | "circle" | "square" | undefined;
    status?: "normal" | "success" | "warning" | "danger" | undefined;
}>, {
    disabled: boolean;
}>;
export default _default;
