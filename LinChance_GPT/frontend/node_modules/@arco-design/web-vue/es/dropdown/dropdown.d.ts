import { PropType } from 'vue';
import { DropdownPosition } from './interface';
declare const _default: import("vue").DefineComponent<{
    popupVisible: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultPopupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<"hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[]>;
        default: string;
    };
    position: {
        type: PropType<DropdownPosition>;
        default: string;
    };
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    computedPopupVisible: import("vue").ComputedRef<boolean>;
    handlePopupVisibleChange: (visible: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:popupVisible': (visible: boolean) => true;
    popupVisibleChange: (visible: boolean) => true;
    select: (value: string | number | Record<string, any> | undefined, ev: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    popupVisible?: unknown;
    defaultPopupVisible?: unknown;
    trigger?: unknown;
    position?: unknown;
    popupContainer?: unknown;
    popupMaxHeight?: unknown;
    hideOnSelect?: unknown;
} & {
    defaultPopupVisible: boolean;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    position: DropdownPosition;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
} & {
    popupVisible?: boolean | undefined;
    popupContainer?: string | HTMLElement | undefined;
}> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    onSelect?: ((value: string | number | Record<string, any> | undefined, ev: Event) => any) | undefined;
}, {
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    position: DropdownPosition;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
}>;
export default _default;
