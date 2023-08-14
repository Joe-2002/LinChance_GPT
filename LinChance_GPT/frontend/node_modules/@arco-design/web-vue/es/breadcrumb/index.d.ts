import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Breadcrumb from './breadcrumb';
import _BreadcrumbItem from './breadcrumb-item';
declare const Breadcrumb: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            maxCount: number;
        }> & Omit<Readonly<{
            maxCount?: unknown;
            routes?: unknown;
            separator?: unknown;
            customUrl?: unknown;
        } & {
            maxCount: number;
        } & {
            separator?: string | number | undefined;
            routes?: import("./interface").BreadcrumbRoute[] | undefined;
            customUrl?: ((paths: string[]) => string) | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "maxCount">;
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
            maxCount?: unknown;
            routes?: unknown;
            separator?: unknown;
            customUrl?: unknown;
        } & {
            maxCount: number;
        } & {
            separator?: string | number | undefined;
            routes?: import("./interface").BreadcrumbRoute[] | undefined;
            customUrl?: ((paths: string[]) => string) | undefined;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
        maxCount?: unknown;
        routes?: unknown;
        separator?: unknown;
        customUrl?: unknown;
    } & {
        maxCount: number;
    } & {
        separator?: string | number | undefined;
        routes?: import("./interface").BreadcrumbRoute[] | undefined;
        customUrl?: ((paths: string[]) => string) | undefined;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    maxCount?: unknown;
    routes?: unknown;
    separator?: unknown;
    customUrl?: unknown;
} & {
    maxCount: number;
} & {
    separator?: string | number | undefined;
    routes?: import("./interface").BreadcrumbRoute[] | undefined;
    customUrl?: ((paths: string[]) => string) | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    maxCount: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{
        separator: {
            type: (StringConstructor | NumberConstructor)[];
        };
        droplist: {
            type: import("vue").PropType<{
                label: string;
                path: string;
            }[] | undefined>;
        };
        dropdownProps: {
            type: import("vue").PropType<import("..").DropDownProps>;
        };
        index: {
            type: NumberConstructor;
            default: number;
        };
    }, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        separator?: unknown;
        droplist?: unknown;
        dropdownProps?: unknown;
        index?: unknown;
    } & {
        index: number;
    } & {
        separator?: string | number | undefined;
        droplist?: {
            label: string;
            path: string;
        }[] | undefined;
        dropdownProps?: import("..").DropDownProps | undefined;
    }>, {
        index: number;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>;
export declare type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>;
export type { BreadcrumbRoute } from './interface';
export { _BreadcrumbItem as BreadcrumbItem };
export default Breadcrumb;
