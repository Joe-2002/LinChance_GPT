import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    theme: {
        type: PropType<"dark" | "light">;
    };
    mode: {
        type: PropType<"horizontal" | "vertical" | "pop" | "popButton">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    theme?: unknown;
    mode?: unknown;
} & {
    mode: "horizontal" | "vertical" | "pop" | "popButton";
} & {
    theme?: "dark" | "light" | undefined;
}>, {
    mode: "horizontal" | "vertical" | "pop" | "popButton";
}>;
export default _default;
