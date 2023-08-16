import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    theme: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    collapsed: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
    };
    collapsible: {
        type: BooleanConstructor;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    collapsedWidth: {
        type: NumberConstructor;
        default: number;
    };
    reverseArrow: {
        type: BooleanConstructor;
    };
    breakpoint: {
        type: PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
    };
    resizeDirections: {
        type: PropType<("top" | "bottom" | "left" | "right")[]>;
        default: undefined;
    };
    hideTrigger: {
        type: BooleanConstructor;
    };
}, {
    componentTag: import("vue").ComputedRef<"div" | "ResizeBox">;
    prefixCls: string;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    triggerClassNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    localCollapsed: import("vue").ComputedRef<boolean>;
    siderWidth: import("vue").ComputedRef<string>;
    showTrigger: import("vue").ComputedRef<boolean>;
    toggleTrigger: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "breakpoint")[], "collapse" | "update:collapsed" | "breakpoint", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    theme?: unknown;
    collapsed?: unknown;
    defaultCollapsed?: unknown;
    collapsible?: unknown;
    width?: unknown;
    collapsedWidth?: unknown;
    reverseArrow?: unknown;
    breakpoint?: unknown;
    resizeDirections?: unknown;
    hideTrigger?: unknown;
} & {
    width: number;
    theme: "dark" | "light";
    defaultCollapsed: boolean;
    collapsible: boolean;
    collapsedWidth: number;
    reverseArrow: boolean;
    hideTrigger: boolean;
} & {
    collapsed?: boolean | undefined;
    breakpoint?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | undefined;
    resizeDirections?: ("top" | "bottom" | "left" | "right")[] | undefined;
}> & {
    onCollapse?: ((...args: any[]) => any) | undefined;
    "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
    onBreakpoint?: ((...args: any[]) => any) | undefined;
}, {
    width: number;
    collapsed: boolean;
    theme: "dark" | "light";
    defaultCollapsed: boolean;
    collapsible: boolean;
    collapsedWidth: number;
    reverseArrow: boolean;
    resizeDirections: ("top" | "bottom" | "left" | "right")[];
    hideTrigger: boolean;
}>;
export default _default;
