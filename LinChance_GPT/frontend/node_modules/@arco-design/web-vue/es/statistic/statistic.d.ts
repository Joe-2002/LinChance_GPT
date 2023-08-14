import { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    value: {
        type: PropType<number | Date>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    extra: StringConstructor;
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    separator: StringConstructor;
    showGroupSeparator: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    valueFrom: {
        type: NumberConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
    };
    valueStyle: {
        type: PropType<CSSProperties>;
    };
}, {
    prefixCls: string;
    showPlaceholder: import("vue").ComputedRef<boolean>;
    formatValue: import("vue").ComputedRef<{
        isNumber: boolean;
        integer: string;
        decimal: string;
        value?: undefined;
    } | {
        isNumber: boolean;
        value: string | Date | undefined;
        integer?: undefined;
        decimal?: undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    value?: unknown;
    format?: unknown;
    extra?: unknown;
    start?: unknown;
    precision?: unknown;
    separator?: unknown;
    showGroupSeparator?: unknown;
    animation?: unknown;
    animationDuration?: unknown;
    valueFrom?: unknown;
    placeholder?: unknown;
    valueStyle?: unknown;
} & {
    start: boolean;
    format: string;
    animation: boolean;
    animationDuration: number;
    precision: number;
    showGroupSeparator: boolean;
} & {
    separator?: string | undefined;
    title?: string | undefined;
    placeholder?: string | undefined;
    value?: number | Date | undefined;
    extra?: string | undefined;
    valueStyle?: CSSProperties | undefined;
    valueFrom?: number | undefined;
}>, {
    start: boolean;
    format: string;
    animation: boolean;
    animationDuration: number;
    precision: number;
    showGroupSeparator: boolean;
    valueFrom: number;
}>;
export default _default;
