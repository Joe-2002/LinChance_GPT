import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<{
            key: number;
            content: string;
        }[]>;
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
    getStyle: (value: number) => import("vue").CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    min?: unknown;
    max?: unknown;
    direction?: unknown;
} & {
    data: {
        key: number;
        content: string;
    }[];
    direction: "horizontal" | "vertical";
    min: number;
    max: number;
} & {}>, {
    direction: "horizontal" | "vertical";
}>;
export default _default;
