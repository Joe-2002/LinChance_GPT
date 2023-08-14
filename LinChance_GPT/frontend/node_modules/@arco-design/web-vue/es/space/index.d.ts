import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Space from './space';
declare const Space: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
            wrap: boolean;
            fill: boolean;
            direction: "horizontal" | "vertical";
        }> & Omit<Readonly<{
            align?: unknown;
            direction?: unknown;
            size?: unknown;
            wrap?: unknown;
            fill?: unknown;
        } & {
            size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
            wrap: boolean;
            fill: boolean;
            direction: "horizontal" | "vertical";
        } & {
            align?: "center" | "end" | "start" | "baseline" | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "wrap" | "fill" | "direction">;
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
            align?: unknown;
            direction?: unknown;
            size?: unknown;
            wrap?: unknown;
            fill?: unknown;
        } & {
            size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
            wrap: boolean;
            fill: boolean;
            direction: "horizontal" | "vertical";
        } & {
            align?: "center" | "end" | "start" | "baseline" | undefined;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
            wrap: boolean;
            fill: boolean;
            direction: "horizontal" | "vertical";
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
        align?: unknown;
        direction?: unknown;
        size?: unknown;
        wrap?: unknown;
        fill?: unknown;
    } & {
        size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
        wrap: boolean;
        fill: boolean;
        direction: "horizontal" | "vertical";
    } & {
        align?: "center" | "end" | "start" | "baseline" | undefined;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    align?: unknown;
    direction?: unknown;
    size?: unknown;
    wrap?: unknown;
    fill?: unknown;
} & {
    size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
    wrap: boolean;
    fill: boolean;
    direction: "horizontal" | "vertical";
} & {
    align?: "center" | "end" | "start" | "baseline" | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    size: number | "mini" | "medium" | "large" | "small" | [number | "mini" | "medium" | "large" | "small", number | "mini" | "medium" | "large" | "small"];
    wrap: boolean;
    fill: boolean;
    direction: "horizontal" | "vertical";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type SpaceInstance = InstanceType<typeof _Space>;
export default Space;
