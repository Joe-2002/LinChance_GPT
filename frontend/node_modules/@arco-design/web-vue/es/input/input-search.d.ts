import { PropType } from 'vue';
import { ButtonProps } from '../button';
declare const _default: import("vue").DefineComponent<{
    searchButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    buttonText: {
        type: StringConstructor;
    };
    buttonProps: {
        type: PropType<ButtonProps>;
    };
}, {
    inputRef: import("vue").Ref<any>;
    render: () => JSX.Element;
}, unknown, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (value: string, ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    searchButton?: unknown;
    loading?: unknown;
    disabled?: unknown;
    size?: unknown;
    buttonText?: unknown;
    buttonProps?: unknown;
} & {
    disabled: boolean;
    loading: boolean;
    searchButton: boolean;
} & {
    size?: "mini" | "medium" | "large" | "small" | undefined;
    buttonText?: string | undefined;
    buttonProps?: ButtonProps | undefined;
}> & {
    onSearch?: ((value: string, ev: MouseEvent) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    searchButton: boolean;
}>;
export default _default;
