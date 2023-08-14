import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    blockquote: {
        type: BooleanConstructor;
    };
    spacing: {
        type: PropType<"default" | "close">;
        default: string;
    };
}, {
    component: import("vue").ComputedRef<"div" | "blockquote">;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    blockquote?: unknown;
    spacing?: unknown;
} & {
    blockquote: boolean;
    spacing: "default" | "close";
} & {}>, {
    blockquote: boolean;
    spacing: "default" | "close";
}>;
export default _default;
