import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    orientation: {
        type: PropType<"left" | "right" | "center">;
        default: string;
    };
    type: {
        type: PropType<"dashed" | "dotted" | "double" | "solid">;
    };
    size: {
        type: NumberConstructor;
    };
    margin: {
        type: PropType<string | number>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction?: unknown;
    orientation?: unknown;
    type?: unknown;
    size?: unknown;
    margin?: unknown;
} & {
    direction: "horizontal" | "vertical";
    orientation: "left" | "right" | "center";
} & {
    size?: number | undefined;
    type?: "dashed" | "dotted" | "double" | "solid" | undefined;
    margin?: string | number | undefined;
}>, {
    direction: "horizontal" | "vertical";
    orientation: "left" | "right" | "center";
}>;
export default _default;
