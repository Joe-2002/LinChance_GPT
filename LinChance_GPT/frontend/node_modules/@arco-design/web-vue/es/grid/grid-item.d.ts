import { PropType } from 'vue';
import { ResponsiveValue } from './interface';
declare const _default: import("vue").DefineComponent<{
    span: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    offset: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    suffix: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<({
        'margin-left': string;
    } | {
        'margin-left'?: undefined;
    } | {
        'grid-column': string;
        display?: undefined;
    } | {
        display: string;
        'grid-column'?: undefined;
    })[]>;
    domRef: import("vue").Ref<HTMLDivElement | undefined>;
    overflow: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    span?: unknown;
    offset?: unknown;
    suffix?: unknown;
} & {
    span: number | ResponsiveValue;
    offset: number | ResponsiveValue;
    suffix: boolean;
} & {}>, {
    span: number | ResponsiveValue;
    offset: number | ResponsiveValue;
    suffix: boolean;
}>;
export default _default;
