import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    formatTooltip: {
        type: FunctionConstructor;
    };
    value: (StringConstructor | NumberConstructor)[];
    tooltipPosition: {
        type: StringConstructor;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<string[]>;
    tooltipContent: import("vue").ComputedRef<any>;
    mergedTooltipPosition: import("vue").ComputedRef<"top" | "right">;
    popupVisible: import("vue").ComputedRef<boolean | undefined>;
    handleMouseDown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("moving" | "movestart" | "moveend")[], "moving" | "movestart" | "moveend", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction?: unknown;
    disabled?: unknown;
    min?: unknown;
    max?: unknown;
    formatTooltip?: unknown;
    value?: unknown;
    tooltipPosition?: unknown;
    showTooltip?: unknown;
} & {
    disabled: boolean;
    direction: "horizontal" | "vertical";
    min: number;
    max: number;
    showTooltip: boolean;
} & {
    value?: string | number | undefined;
    formatTooltip?: Function | undefined;
    tooltipPosition?: string | undefined;
}> & {
    onMoving?: ((...args: any[]) => any) | undefined;
    onMovestart?: ((...args: any[]) => any) | undefined;
    onMoveend?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    direction: "horizontal" | "vertical";
    showTooltip: boolean;
}>;
export default _default;
