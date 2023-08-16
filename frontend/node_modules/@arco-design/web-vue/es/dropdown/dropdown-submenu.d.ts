import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<"hover" | "click" | ("hover" | "click")[]>;
        default: string;
    };
    position: {
        type: PropType<"lt" | "rt">;
        default: string;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultPopupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    optionProps: {
        type: ObjectConstructor;
    };
}, {
    prefixCls: string;
    computedPopupVisible: import("vue").ComputedRef<boolean>;
    handlePopupVisibleChange: (visible: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:popupVisible': (visible: boolean) => true;
    popupVisibleChange: (visible: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    disabled?: unknown;
    trigger?: unknown;
    position?: unknown;
    popupVisible?: unknown;
    defaultPopupVisible?: unknown;
    optionProps?: unknown;
} & {
    defaultPopupVisible: boolean;
    trigger: "hover" | "click" | ("hover" | "click")[];
    position: "lt" | "rt";
    disabled: boolean;
} & {
    popupVisible?: boolean | undefined;
    value?: string | number | undefined;
    optionProps?: Record<string, any> | undefined;
}> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
}, {
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    trigger: "hover" | "click" | ("hover" | "click")[];
    position: "lt" | "rt";
    disabled: boolean;
}>;
export default _default;
