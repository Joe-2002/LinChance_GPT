import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"normal" | "error" | "success" | "warning" | "info">;
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
    title: StringConstructor;
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    visible: import("vue").Ref<boolean>;
    handleClose: (ev: MouseEvent) => void;
    handleAfterLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (ev: MouseEvent) => true;
    afterClose: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    showIcon?: unknown;
    closable?: unknown;
    title?: unknown;
    banner?: unknown;
    center?: unknown;
} & {
    center: boolean;
    type: "normal" | "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
} & {
    title?: string | undefined;
}> & {
    onClose?: ((ev: MouseEvent) => any) | undefined;
    onAfterClose?: (() => any) | undefined;
}, {
    center: boolean;
    type: "normal" | "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
}>;
export default _default;
