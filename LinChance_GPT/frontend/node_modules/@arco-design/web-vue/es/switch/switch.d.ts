import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"round" | "circle" | "line">;
        default: string;
    };
    size: {
        type: PropType<"medium" | "small">;
    };
    checkedValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    uncheckedValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    checkedColor: {
        type: StringConstructor;
    };
    uncheckedColor: {
        type: StringConstructor;
    };
    beforeChange: {
        type: PropType<(newValue: string | number | boolean) => Promise<boolean | void> | boolean | void>;
    };
    checkedText: {
        type: StringConstructor;
    };
    uncheckedText: {
        type: StringConstructor;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean | undefined;
    })[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    buttonStyle: import("vue").ComputedRef<{
        '--custom-color': string;
        backgroundColor?: undefined;
    } | {
        backgroundColor: string;
        '--custom-color'?: undefined;
    } | undefined>;
    computedCheck: import("vue").ComputedRef<boolean>;
    computedLoading: import("vue").ComputedRef<boolean>;
    handleClick: (ev: Event) => Promise<void>;
    handleFocus: (ev: FocusEvent) => void;
    handleBlur: (ev: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean | string | number) => true;
    change: (value: boolean | string | number, ev: Event) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    defaultChecked?: unknown;
    disabled?: unknown;
    loading?: unknown;
    type?: unknown;
    size?: unknown;
    checkedValue?: unknown;
    uncheckedValue?: unknown;
    checkedColor?: unknown;
    uncheckedColor?: unknown;
    beforeChange?: unknown;
    checkedText?: unknown;
    uncheckedText?: unknown;
} & {
    disabled: boolean;
    type: "round" | "circle" | "line";
    loading: boolean;
    defaultChecked: boolean;
    checkedValue: string | number | boolean;
    uncheckedValue: string | number | boolean;
} & {
    size?: "medium" | "small" | undefined;
    modelValue?: string | number | boolean | undefined;
    checkedColor?: string | undefined;
    uncheckedColor?: string | undefined;
    beforeChange?: ((newValue: string | number | boolean) => Promise<boolean | void> | boolean | void) | undefined;
    checkedText?: string | undefined;
    uncheckedText?: string | undefined;
}> & {
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}, {
    disabled: boolean;
    type: "round" | "circle" | "line";
    modelValue: string | number | boolean;
    loading: boolean;
    defaultChecked: boolean;
    checkedValue: string | number | boolean;
    uncheckedValue: string | number | boolean;
}>;
export default _default;
