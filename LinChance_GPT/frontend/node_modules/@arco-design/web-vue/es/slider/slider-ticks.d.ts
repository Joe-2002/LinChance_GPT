import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<[number, number]>;
        required: true;
    };
    step: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, {
    prefixCls: string;
    steps: import("vue").ComputedRef<{
        key: number;
        isActive: boolean;
    }[]>;
    getStyle: (value: number) => import("vue").CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    step?: unknown;
    min?: unknown;
    max?: unknown;
    direction?: unknown;
} & {
    value: [number, number];
    direction: "horizontal" | "vertical";
    min: number;
    max: number;
    step: number;
} & {}>, {
    direction: "horizontal" | "vertical";
}>;
export default _default;
