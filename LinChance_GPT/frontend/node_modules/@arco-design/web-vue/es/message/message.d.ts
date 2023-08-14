import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"normal" | "error" | "loading" | "success" | "warning" | "info">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
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
    resetOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    prefixCls: string;
    handleClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    closable?: unknown;
    showIcon?: unknown;
    duration?: unknown;
    resetOnUpdate?: unknown;
    resetOnHover?: unknown;
} & {
    duration: number;
    type: "normal" | "error" | "loading" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    resetOnHover: boolean;
    resetOnUpdate: boolean;
} & {}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    duration: number;
    type: "normal" | "error" | "loading" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    resetOnHover: boolean;
    resetOnUpdate: boolean;
}>;
export default _default;
