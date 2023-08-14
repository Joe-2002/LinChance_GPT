import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    sizeOptions: {
        type: ArrayConstructor;
        required: true;
    };
    pageSize: NumberConstructor;
    disabled: BooleanConstructor;
    size: {
        type: StringConstructor;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
    selectProps: {
        type: ObjectConstructor;
    };
}, {
    prefixCls: string;
    options: import("vue").ComputedRef<{
        value: unknown;
        label: string;
    }[]>;
    handleChange: (value: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    sizeOptions?: unknown;
    pageSize?: unknown;
    disabled?: unknown;
    size?: unknown;
    onChange?: unknown;
    selectProps?: unknown;
} & {
    disabled: boolean;
    sizeOptions: unknown[];
} & {
    size?: string | undefined;
    onChange?: ((value: number) => void) | undefined;
    pageSize?: number | undefined;
    selectProps?: Record<string, any> | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _default;
