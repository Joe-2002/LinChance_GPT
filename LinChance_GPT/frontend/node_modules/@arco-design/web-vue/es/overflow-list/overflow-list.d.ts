import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
    from: {
        type: PropType<"end" | "start">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    min?: unknown;
    margin?: unknown;
    from?: unknown;
} & {
    margin: number;
    min: number;
    from: "end" | "start";
} & {}> & {
    onChange?: ((value: number) => any) | undefined;
}, {
    margin: number;
    min: number;
    from: "end" | "start";
}>;
export default _default;
