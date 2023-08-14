import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _GridRow from './grid-row';
import _GridCol from './grid-col';
import _Grid from './grid';
import _GridItem from './grid-item';
declare const Grid: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            rowGap: number | import("./interface").ResponsiveValue;
            cols: number | import("./interface").ResponsiveValue;
            colGap: number | import("./interface").ResponsiveValue;
            collapsed: boolean;
            collapsedRows: number;
        }> & Omit<Readonly<{
            cols?: unknown;
            rowGap?: unknown;
            colGap?: unknown;
            collapsed?: unknown;
            collapsedRows?: unknown;
        } & {
            rowGap: number | import("./interface").ResponsiveValue;
            cols: number | import("./interface").ResponsiveValue;
            colGap: number | import("./interface").ResponsiveValue;
            collapsed: boolean;
            collapsedRows: number;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rowGap" | "cols" | "colGap" | "collapsed" | "collapsedRows">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            cols?: unknown;
            rowGap?: unknown;
            colGap?: unknown;
            collapsed?: unknown;
            collapsedRows?: unknown;
        } & {
            rowGap: number | import("./interface").ResponsiveValue;
            cols: number | import("./interface").ResponsiveValue;
            colGap: number | import("./interface").ResponsiveValue;
            collapsed: boolean;
            collapsedRows: number;
        } & {}>, {
            classNames: import("vue").ComputedRef<string[]>;
            style: import("vue").ComputedRef<{
                gap: string;
                'grid-template-columns': string;
            }[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            rowGap: number | import("./interface").ResponsiveValue;
            cols: number | import("./interface").ResponsiveValue;
            colGap: number | import("./interface").ResponsiveValue;
            collapsed: boolean;
            collapsedRows: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        cols?: unknown;
        rowGap?: unknown;
        colGap?: unknown;
        collapsed?: unknown;
        collapsedRows?: unknown;
    } & {
        rowGap: number | import("./interface").ResponsiveValue;
        cols: number | import("./interface").ResponsiveValue;
        colGap: number | import("./interface").ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
    } & {}> & import("vue").ShallowUnwrapRef<{
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<{
            gap: string;
            'grid-template-columns': string;
        }[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    cols?: unknown;
    rowGap?: unknown;
    colGap?: unknown;
    collapsed?: unknown;
    collapsedRows?: unknown;
} & {
    rowGap: number | import("./interface").ResponsiveValue;
    cols: number | import("./interface").ResponsiveValue;
    colGap: number | import("./interface").ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
} & {}>, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        gap: string;
        'grid-template-columns': string;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    rowGap: number | import("./interface").ResponsiveValue;
    cols: number | import("./interface").ResponsiveValue;
    colGap: number | import("./interface").ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Row: import("vue").DefineComponent<{
        gutter: {
            type: import("vue").PropType<number | import("./interface").ResponsiveValue | [number | import("./interface").ResponsiveValue, number | import("./interface").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"stretch" | "center" | "end" | "start">;
            default: string;
        };
        div: {
            type: BooleanConstructor;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean | "space-around" | "space-between" | "stretch" | "center" | "end" | "start";
        }>;
        styles: import("vue").ComputedRef<{
            marginTop?: string | undefined;
            marginBottom?: string | undefined;
            marginLeft?: string | undefined;
            marginRight?: string | undefined;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        gutter?: unknown;
        justify?: unknown;
        align?: unknown;
        div?: unknown;
        wrap?: unknown;
    } & {
        wrap: boolean;
        justify: "space-around" | "space-between" | "center" | "end" | "start";
        div: boolean;
        align: "stretch" | "center" | "end" | "start";
        gutter: number | import("./interface").ResponsiveValue | [number | import("./interface").ResponsiveValue, number | import("./interface").ResponsiveValue];
    } & {}>, {
        wrap: boolean;
        justify: "space-around" | "space-between" | "center" | "end" | "start";
        div: boolean;
        align: "stretch" | "center" | "end" | "start";
        gutter: number | import("./interface").ResponsiveValue | [number | import("./interface").ResponsiveValue, number | import("./interface").ResponsiveValue];
    }>;
    Col: import("vue").DefineComponent<{
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
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: import("vue").PropType<string | number>;
        };
    }, {
        visible: import("vue").ComputedRef<boolean>;
        classNames: import("vue").ComputedRef<string | {
            [x: string]: number | boolean | undefined;
        }>;
        styles: import("vue").ComputedRef<{
            flex?: import("./interface").FlexType | undefined;
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
    Item: import("vue").DefineComponent<{
        span: {
            type: import("vue").PropType<number | import("./interface").ResponsiveValue>;
            default: number;
        };
        offset: {
            type: import("vue").PropType<number | import("./interface").ResponsiveValue>;
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
        span: number | import("./interface").ResponsiveValue;
        offset: number | import("./interface").ResponsiveValue;
        suffix: boolean;
    } & {}>, {
        span: number | import("./interface").ResponsiveValue;
        offset: number | import("./interface").ResponsiveValue;
        suffix: boolean;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type GridRowInstance = InstanceType<typeof _GridRow>;
export declare type GridColInstance = InstanceType<typeof _GridCol>;
export declare type GridInstance = InstanceType<typeof _Grid>;
export declare type GridItemInstance = InstanceType<typeof _GridItem>;
export type { ResponsiveValue, RowProps, ColProps, GridProps, GridItemProps, } from './interface';
export { _GridRow as Row, _GridCol as Col, _GridItem as GridItem };
export default Grid;
