import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"error" | "success" | "warning" | "info">;
        default: string;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    resetOnUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    showIcon?: unknown;
    closable?: unknown;
    duration?: unknown;
    resetOnUpdate?: unknown;
} & {
    duration: number;
    type: "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    resetOnUpdate: boolean;
} & {}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    duration: number;
    type: "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    resetOnUpdate: boolean;
}>;
export default _default;
