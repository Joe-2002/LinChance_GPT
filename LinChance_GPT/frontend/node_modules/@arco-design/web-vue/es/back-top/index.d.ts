import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _BackTop from './back-top';
declare const BackTop: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            duration: number;
            visibleHeight: number;
            easing: string;
        }> & Omit<Readonly<{
            visibleHeight?: unknown;
            targetContainer?: unknown;
            easing?: unknown;
            duration?: unknown;
        } & {
            duration: number;
            visibleHeight: number;
            easing: string;
        } & {
            targetContainer?: string | HTMLElement | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "duration" | "visibleHeight" | "easing">;
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
            visibleHeight?: unknown;
            targetContainer?: unknown;
            easing?: unknown;
            duration?: unknown;
        } & {
            duration: number;
            visibleHeight: number;
            easing: string;
        } & {
            targetContainer?: string | HTMLElement | undefined;
        }>, {
            prefixCls: string;
            visible: import("vue").Ref<boolean>;
            scrollToTop: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            duration: number;
            visibleHeight: number;
            easing: string;
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
        visibleHeight?: unknown;
        targetContainer?: unknown;
        easing?: unknown;
        duration?: unknown;
    } & {
        duration: number;
        visibleHeight: number;
        easing: string;
    } & {
        targetContainer?: string | HTMLElement | undefined;
    }> & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        visible: import("vue").Ref<boolean>;
        scrollToTop: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    visibleHeight?: unknown;
    targetContainer?: unknown;
    easing?: unknown;
    duration?: unknown;
} & {
    duration: number;
    visibleHeight: number;
    easing: string;
} & {
    targetContainer?: string | HTMLElement | undefined;
}>, {
    prefixCls: string;
    visible: import("vue").Ref<boolean>;
    scrollToTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    duration: number;
    visibleHeight: number;
    easing: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type BackTopInstance = InstanceType<typeof _BackTop>;
export default BackTop;
