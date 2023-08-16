import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Badge from './badge';
declare const Badge: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            dot: boolean;
            offset: number[];
            maxCount: number;
        }> & Omit<Readonly<{
            text?: unknown;
            dot?: unknown;
            dotStyle?: unknown;
            maxCount?: unknown;
            offset?: unknown;
            color?: unknown;
            status?: unknown;
            count?: unknown;
        } & {
            dot: boolean;
            offset: number[];
            maxCount: number;
        } & {
            color?: string | undefined;
            text?: string | undefined;
            status?: "normal" | "success" | "warning" | "danger" | "processing" | undefined;
            dotStyle?: Record<string, any> | undefined;
            count?: number | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dot" | "offset" | "maxCount">;
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
            text?: unknown;
            dot?: unknown;
            dotStyle?: unknown;
            maxCount?: unknown;
            offset?: unknown;
            color?: unknown;
            status?: unknown;
            count?: unknown;
        } & {
            dot: boolean;
            offset: number[];
            maxCount: number;
        } & {
            color?: string | undefined;
            text?: string | undefined;
            status?: "normal" | "success" | "warning" | "danger" | "processing" | undefined;
            dotStyle?: Record<string, any> | undefined;
            count?: number | undefined;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            dot: boolean;
            offset: number[];
            maxCount: number;
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
        text?: unknown;
        dot?: unknown;
        dotStyle?: unknown;
        maxCount?: unknown;
        offset?: unknown;
        color?: unknown;
        status?: unknown;
        count?: unknown;
    } & {
        dot: boolean;
        offset: number[];
        maxCount: number;
    } & {
        color?: string | undefined;
        text?: string | undefined;
        status?: "normal" | "success" | "warning" | "danger" | "processing" | undefined;
        dotStyle?: Record<string, any> | undefined;
        count?: number | undefined;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    text?: unknown;
    dot?: unknown;
    dotStyle?: unknown;
    maxCount?: unknown;
    offset?: unknown;
    color?: unknown;
    status?: unknown;
    count?: unknown;
} & {
    dot: boolean;
    offset: number[];
    maxCount: number;
} & {
    color?: string | undefined;
    text?: string | undefined;
    status?: "normal" | "success" | "warning" | "danger" | "processing" | undefined;
    dotStyle?: Record<string, any> | undefined;
    count?: number | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    dot: boolean;
    offset: number[];
    maxCount: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type BadgeInstance = InstanceType<typeof _Badge>;
export default Badge;
