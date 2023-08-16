import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Skeleton from './skeleton';
import _SkeletonLine from './line';
import _SkeletonShape from './shape';
declare const Skeleton: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            loading: boolean;
            animation: boolean;
        }> & Omit<Readonly<{
            loading?: unknown;
            animation?: unknown;
        } & {
            loading: boolean;
            animation: boolean;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "loading" | "animation">;
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
            loading?: unknown;
            animation?: unknown;
        } & {
            loading: boolean;
            animation: boolean;
        } & {}>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            loading: boolean;
            animation: boolean;
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
        loading?: unknown;
        animation?: unknown;
    } & {
        loading: boolean;
        animation: boolean;
    } & {}> & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    loading?: unknown;
    animation?: unknown;
} & {
    loading: boolean;
    animation: boolean;
} & {}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    loading: boolean;
    animation: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Line: import("vue").DefineComponent<{
        rows: {
            type: NumberConstructor;
            default: number;
        };
        widths: {
            type: import("vue").PropType<(string | number)[]>;
            default: () => never[];
        };
        lineHeight: {
            type: NumberConstructor;
            default: number;
        };
        lineSpacing: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        prefixCls: string;
        lines: import("vue").CSSProperties[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        rows?: unknown;
        widths?: unknown;
        lineHeight?: unknown;
        lineSpacing?: unknown;
    } & {
        lineHeight: number;
        rows: number;
        widths: (string | number)[];
        lineSpacing: number;
    } & {}>, {
        lineHeight: number;
        rows: number;
        widths: (string | number)[];
        lineSpacing: number;
    }>;
    Shape: import("vue").DefineComponent<{
        shape: {
            type: import("vue").PropType<"circle" | "square">;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }, {
        prefixCls: string;
        cls: import("vue").ComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        shape?: unknown;
        size?: unknown;
    } & {
        size: string;
        shape: "circle" | "square";
    } & {}>, {
        size: string;
        shape: "circle" | "square";
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type SkeletonInstance = InstanceType<typeof _Skeleton>;
export declare type SkeletonLineInstance = InstanceType<typeof _SkeletonLine>;
export declare type SkeletonShapeInstance = InstanceType<typeof _SkeletonShape>;
export { _SkeletonLine as SkeletonLine, _SkeletonShape as SkeletonShape };
export default Skeleton;
