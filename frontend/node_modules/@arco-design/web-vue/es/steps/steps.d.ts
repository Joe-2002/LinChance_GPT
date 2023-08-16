import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"default" | "dot" | "arrow" | "navigation">;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    labelPlacement: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: PropType<"wait" | "error" | "finish" | "process">;
        default: string;
    };
    lineLess: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (step: number) => true;
    change: (step: number, ev: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    direction?: unknown;
    labelPlacement?: unknown;
    current?: unknown;
    defaultCurrent?: unknown;
    status?: unknown;
    lineLess?: unknown;
    small?: unknown;
    changeable?: unknown;
} & {
    small: boolean;
    type: "default" | "dot" | "arrow" | "navigation";
    direction: "horizontal" | "vertical";
    lineLess: boolean;
    status: "wait" | "error" | "finish" | "process";
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
} & {
    current?: number | undefined;
}> & {
    onChange?: ((step: number, ev: Event) => any) | undefined;
    "onUpdate:current"?: ((step: number) => any) | undefined;
}, {
    small: boolean;
    type: "default" | "dot" | "arrow" | "navigation";
    direction: "horizontal" | "vertical";
    lineLess: boolean;
    status: "wait" | "error" | "finish" | "process";
    current: number;
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
}>;
export default _default;
