import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Divider from './divider';
declare const Divider: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            direction: "horizontal" | "vertical";
            orientation: "left" | "right" | "center";
        }> & Omit<Readonly<{
            direction?: unknown;
            orientation?: unknown;
            type?: unknown;
            size?: unknown;
            margin?: unknown;
        } & {
            direction: "horizontal" | "vertical";
            orientation: "left" | "right" | "center";
        } & {
            size?: number | undefined;
            type?: "dashed" | "dotted" | "double" | "solid" | undefined;
            margin?: string | number | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "orientation">;
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
            direction?: unknown;
            orientation?: unknown;
            type?: unknown;
            size?: unknown;
            margin?: unknown;
        } & {
            direction: "horizontal" | "vertical";
            orientation: "left" | "right" | "center";
        } & {
            size?: number | undefined;
            type?: "dashed" | "dotted" | "double" | "solid" | undefined;
            margin?: string | number | undefined;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            direction: "horizontal" | "vertical";
            orientation: "left" | "right" | "center";
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
        direction?: unknown;
        orientation?: unknown;
        type?: unknown;
        size?: unknown;
        margin?: unknown;
    } & {
        direction: "horizontal" | "vertical";
        orientation: "left" | "right" | "center";
    } & {
        size?: number | undefined;
        type?: "dashed" | "dotted" | "double" | "solid" | undefined;
        margin?: string | number | undefined;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    direction?: unknown;
    orientation?: unknown;
    type?: unknown;
    size?: unknown;
    margin?: unknown;
} & {
    direction: "horizontal" | "vertical";
    orientation: "left" | "right" | "center";
} & {
    size?: number | undefined;
    type?: "dashed" | "dotted" | "double" | "solid" | undefined;
    margin?: string | number | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    direction: "horizontal" | "vertical";
    orientation: "left" | "right" | "center";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type DividerInstance = InstanceType<typeof _Divider>;
export default Divider;
