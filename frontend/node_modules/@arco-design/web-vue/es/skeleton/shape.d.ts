import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    shape: {
        type: PropType<"circle" | "square">;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    shape?: unknown;
    size?: unknown;
} & {
    size: string;
    shape: "circle" | "square";
} & {}>, {
    size: string;
    shape: "circle" | "square";
}>;
export default _default;
