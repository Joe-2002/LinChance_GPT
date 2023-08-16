import type { PropType, CSSProperties } from 'vue';
import { SelectProps } from '../select';
declare const _default: import("vue").DefineComponent<{
    total: {
        type: NumberConstructor;
        required: true;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnSinglePage: {
        type: BooleanConstructor;
        default: boolean;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTotal: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    showJumper: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPageSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSizeOptions: {
        type: PropType<number[]>;
        default: () => number[];
    };
    pageSizeProps: {
        type: PropType<SelectProps>;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    pageItemStyle: {
        type: PropType<CSSProperties>;
    };
    activePageItemStyle: {
        type: PropType<CSSProperties>;
    };
    baseSize: {
        type: NumberConstructor;
        default: number;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (current: number) => true;
    'update:pageSize': (pageSize: number) => true;
    change: (current: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    total?: unknown;
    current?: unknown;
    defaultCurrent?: unknown;
    pageSize?: unknown;
    defaultPageSize?: unknown;
    disabled?: unknown;
    hideOnSinglePage?: unknown;
    simple?: unknown;
    showTotal?: unknown;
    showMore?: unknown;
    showJumper?: unknown;
    showPageSize?: unknown;
    pageSizeOptions?: unknown;
    pageSizeProps?: unknown;
    size?: unknown;
    pageItemStyle?: unknown;
    activePageItemStyle?: unknown;
    baseSize?: unknown;
    bufferSize?: unknown;
    autoAdjust?: unknown;
} & {
    disabled: boolean;
    defaultCurrent: number;
    total: number;
    simple: boolean;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
} & {
    size?: "mini" | "medium" | "large" | "small" | undefined;
    current?: number | undefined;
    pageSize?: number | undefined;
    pageSizeProps?: SelectProps | undefined;
    pageItemStyle?: CSSProperties | undefined;
    activePageItemStyle?: CSSProperties | undefined;
}> & {
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
}, {
    disabled: boolean;
    defaultCurrent: number;
    simple: boolean;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
}>;
export default _default;
