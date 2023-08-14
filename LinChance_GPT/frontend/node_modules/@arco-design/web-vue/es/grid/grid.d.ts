import { PropType } from 'vue';
import { ResponsiveValue } from './interface';
declare const _default: import("vue").DefineComponent<{
    cols: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    rowGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    colGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
}, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        gap: string;
        'grid-template-columns': string;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    cols?: unknown;
    rowGap?: unknown;
    colGap?: unknown;
    collapsed?: unknown;
    collapsedRows?: unknown;
} & {
    rowGap: number | ResponsiveValue;
    cols: number | ResponsiveValue;
    colGap: number | ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
} & {}>, {
    rowGap: number | ResponsiveValue;
    cols: number | ResponsiveValue;
    colGap: number | ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
}>;
export default _default;
