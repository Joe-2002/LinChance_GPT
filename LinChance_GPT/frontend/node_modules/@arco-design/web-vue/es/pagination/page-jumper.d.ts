import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    current: {
        type: NumberConstructor;
        required: true;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    pages: {
        type: NumberConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    t: (key: string, ...args: any[]) => string;
    inputValue: import("vue").Ref<number | undefined>;
    handleChange: (value: number) => void;
    handleFormatter: (value: number) => string | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    current?: unknown;
    simple?: unknown;
    disabled?: unknown;
    pages?: unknown;
    size?: unknown;
    onChange?: unknown;
} & {
    disabled: boolean;
    current: number;
    simple: boolean;
    pages: number;
} & {
    size?: string | undefined;
    onChange?: ((value: number) => void) | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    simple: boolean;
}>;
export default _default;
