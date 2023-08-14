import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _PageHeader from './page-header';
declare const PageHeader: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            showBack: boolean;
        }> & Omit<Readonly<{
            title?: unknown;
            subtitle?: unknown;
            showBack?: unknown;
        } & {
            showBack: boolean;
        } & {
            title?: string | undefined;
            subtitle?: string | undefined;
        }> & {
            onBack?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "showBack">;
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
        $emit: (event: "back", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            title?: unknown;
            subtitle?: unknown;
            showBack?: unknown;
        } & {
            showBack: boolean;
        } & {
            title?: string | undefined;
            subtitle?: string | undefined;
        }> & {
            onBack?: ((...args: any[]) => any) | undefined;
        }, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            handleBack: (e: Event) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], string, {
            showBack: boolean;
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
        subtitle?: unknown;
        showBack?: unknown;
    } & {
        showBack: boolean;
    } & {
        title?: string | undefined;
        subtitle?: string | undefined;
    }> & {
        onBack?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleBack: (e: Event) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    title?: unknown;
    subtitle?: unknown;
    showBack?: unknown;
} & {
    showBack: boolean;
} & {
    title?: string | undefined;
    subtitle?: string | undefined;
}> & {
    onBack?: ((...args: any[]) => any) | undefined;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    handleBack: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", {
    showBack: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type PageHeaderInstance = InstanceType<typeof _PageHeader>;
export default PageHeader;
