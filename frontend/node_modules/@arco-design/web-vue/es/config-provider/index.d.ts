import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _ConfigProvider from './config-provider';
declare const ConfigProvider: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            updateAtScroll: boolean;
            scrollToClose: boolean;
            prefixCls: string;
            exchangeTime: boolean;
            global: boolean;
        }> & Omit<Readonly<{
            prefixCls?: unknown;
            locale?: unknown;
            size?: unknown;
            global?: unknown;
            updateAtScroll?: unknown;
            scrollToClose?: unknown;
            exchangeTime?: unknown;
        } & {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            prefixCls: string;
            exchangeTime: boolean;
            global: boolean;
        } & {
            size?: "mini" | "medium" | "large" | "small" | undefined;
            locale?: import("../locale/interface").ArcoLang | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "updateAtScroll" | "scrollToClose" | "prefixCls" | "exchangeTime" | "global">;
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
            prefixCls?: unknown;
            locale?: unknown;
            size?: unknown;
            global?: unknown;
            updateAtScroll?: unknown;
            scrollToClose?: unknown;
            exchangeTime?: unknown;
        } & {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            prefixCls: string;
            exchangeTime: boolean;
            global: boolean;
        } & {
            size?: "mini" | "medium" | "large" | "small" | undefined;
            locale?: import("../locale/interface").ArcoLang | undefined;
        }>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            prefixCls: string;
            exchangeTime: boolean;
            global: boolean;
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
        prefixCls?: unknown;
        locale?: unknown;
        size?: unknown;
        global?: unknown;
        updateAtScroll?: unknown;
        scrollToClose?: unknown;
        exchangeTime?: unknown;
    } & {
        updateAtScroll: boolean;
        scrollToClose: boolean;
        prefixCls: string;
        exchangeTime: boolean;
        global: boolean;
    } & {
        size?: "mini" | "medium" | "large" | "small" | undefined;
        locale?: import("../locale/interface").ArcoLang | undefined;
    }> & import("vue").ShallowUnwrapRef<{}> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    prefixCls?: unknown;
    locale?: unknown;
    size?: unknown;
    global?: unknown;
    updateAtScroll?: unknown;
    scrollToClose?: unknown;
    exchangeTime?: unknown;
} & {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    prefixCls: string;
    exchangeTime: boolean;
    global: boolean;
} & {
    size?: "mini" | "medium" | "large" | "small" | undefined;
    locale?: import("../locale/interface").ArcoLang | undefined;
}>, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    prefixCls: string;
    exchangeTime: boolean;
    global: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>;
export default ConfigProvider;
