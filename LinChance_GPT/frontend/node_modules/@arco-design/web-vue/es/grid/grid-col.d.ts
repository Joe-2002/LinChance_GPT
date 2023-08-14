import { PropType } from 'vue';
import { FlexType } from './interface';
declare const _default: import("vue").DefineComponent<{
    span: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
    };
    order: {
        type: NumberConstructor;
    };
    xs: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    sm: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    md: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    lg: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    xl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    xxl: {
        type: PropType<number | {
            [key: string]: any;
        }>;
    };
    flex: {
        type: PropType<string | number>;
    };
}, {
    visible: import("vue").ComputedRef<boolean>;
    classNames: import("vue").ComputedRef<string | {
        [x: string]: number | boolean | undefined;
    }>;
    styles: import("vue").ComputedRef<{
        flex?: FlexType | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    span?: unknown;
    offset?: unknown;
    order?: unknown;
    xs?: unknown;
    sm?: unknown;
    md?: unknown;
    lg?: unknown;
    xl?: unknown;
    xxl?: unknown;
    flex?: unknown;
} & {
    span: number;
} & {
    flex?: string | number | undefined;
    offset?: number | undefined;
    order?: number | undefined;
    xxl?: number | {
        [key: string]: any;
    } | undefined;
    xl?: number | {
        [key: string]: any;
    } | undefined;
    lg?: number | {
        [key: string]: any;
    } | undefined;
    md?: number | {
        [key: string]: any;
    } | undefined;
    sm?: number | {
        [key: string]: any;
    } | undefined;
    xs?: number | {
        [key: string]: any;
    } | undefined;
}>, {
    span: number;
}>;
export default _default;
