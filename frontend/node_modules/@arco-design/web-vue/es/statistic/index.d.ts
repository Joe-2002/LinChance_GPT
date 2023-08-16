import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Statistic from './statistic';
import _Countdown from './countdown';
declare const Statistic: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            start: boolean;
            format: string;
            animation: boolean;
            animationDuration: number;
            precision: number;
            showGroupSeparator: boolean;
            valueFrom: number;
        }> & Omit<Readonly<{
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
            valueStyle?: import("vue").CSSProperties | undefined;
            valueFrom?: number | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "start" | "format" | "animation" | "animationDuration" | "precision" | "showGroupSeparator" | "valueFrom">;
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
            valueStyle?: import("vue").CSSProperties | undefined;
            valueFrom?: number | undefined;
        }>, {
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            start: boolean;
            format: string;
            animation: boolean;
            animationDuration: number;
            precision: number;
            showGroupSeparator: boolean;
            valueFrom: number;
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
        valueStyle?: import("vue").CSSProperties | undefined;
        valueFrom?: number | undefined;
    }> & import("vue").ShallowUnwrapRef<{
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
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    valueStyle?: import("vue").CSSProperties | undefined;
    valueFrom?: number | undefined;
}>, {
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    start: boolean;
    format: string;
    animation: boolean;
    animationDuration: number;
    precision: number;
    showGroupSeparator: boolean;
    valueFrom: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Countdown: import("vue").DefineComponent<{
        title: StringConstructor;
        value: {
            type: NumberConstructor;
            default: () => number;
        };
        now: {
            type: NumberConstructor;
            default: () => number;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        start: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }, {
        prefixCls: string;
        displayValue: import("vue").Ref<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: () => true;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title?: unknown;
        value?: unknown;
        now?: unknown;
        format?: unknown;
        start?: unknown;
        valueStyle?: unknown;
    } & {
        start: boolean;
        value: number;
        format: string;
        now: number;
    } & {
        title?: string | undefined;
        valueStyle?: import("vue").CSSProperties | undefined;
    }> & {
        onFinish?: (() => any) | undefined;
    }, {
        start: boolean;
        value: number;
        format: string;
        now: number;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type StatisticInstance = InstanceType<typeof _Statistic>;
export declare type CountdownInstance = InstanceType<typeof _Countdown>;
export { _Countdown as Countdown };
export default Statistic;
