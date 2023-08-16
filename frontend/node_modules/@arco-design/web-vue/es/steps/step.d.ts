import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    description: StringConstructor;
    status: {
        type: PropType<"wait" | "error" | "finish" | "process">;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    iconCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    itemRef: import("vue").Ref<HTMLElement | undefined>;
    showTail: import("vue").ComputedRef<boolean>;
    stepNumber: import("vue").ComputedRef<number>;
    computedStatus: import("vue").ComputedRef<"wait" | "error" | "finish" | "process">;
    type: import("vue").ComputedRef<"default" | "dot" | "arrow" | "navigation">;
    handleClick: (ev: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    description?: unknown;
    status?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
} & {
    title?: string | undefined;
    description?: string | undefined;
    status?: "wait" | "error" | "finish" | "process" | undefined;
}>, {
    disabled: boolean;
}>;
export default _default;
