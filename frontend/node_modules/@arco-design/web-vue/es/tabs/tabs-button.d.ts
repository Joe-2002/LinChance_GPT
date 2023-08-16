import type { PropType } from 'vue';
declare type ButtonTypes = 'previous' | 'next';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: {
        type: PropType<(type: ButtonTypes, ev: Event) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    direction?: unknown;
    disabled?: unknown;
    onClick?: unknown;
} & {
    disabled: boolean;
    type: ButtonTypes;
    direction: "horizontal" | "vertical";
} & {
    onClick?: ((type: ButtonTypes, ev: Event) => void) | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    type: ButtonTypes;
    direction: "horizontal" | "vertical";
}>;
export default _default;
