import { PropType } from 'vue';
declare type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large';
declare const _default: import("vue").DefineComponent<{
    align: {
        type: PropType<"center" | "end" | "start" | "baseline">;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: PropType<number | "mini" | "medium" | "large" | "small" | [SpaceSize, SpaceSize]>;
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
    };
    fill: {
        type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align?: unknown;
    direction?: unknown;
    size?: unknown;
    wrap?: unknown;
    fill?: unknown;
} & {
    size: number | "mini" | "medium" | "large" | "small" | [SpaceSize, SpaceSize];
    wrap: boolean;
    fill: boolean;
    direction: "horizontal" | "vertical";
} & {
    align?: "center" | "end" | "start" | "baseline" | undefined;
}>, {
    size: number | "mini" | "medium" | "large" | "small" | [SpaceSize, SpaceSize];
    wrap: boolean;
    fill: boolean;
    direction: "horizontal" | "vertical";
}>;
export default _default;
