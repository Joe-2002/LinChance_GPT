import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Link from './link';
declare const Link: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            icon: boolean;
            loading: boolean;
            status: "normal" | "success" | "warning" | "danger";
            hoverable: boolean;
        }> & Omit<Readonly<{
            href?: unknown;
            status?: unknown;
            hoverable?: unknown;
            icon?: unknown;
            loading?: unknown;
            disabled?: unknown;
        } & {
            disabled: boolean;
            icon: boolean;
            loading: boolean;
            status: "normal" | "success" | "warning" | "danger";
            hoverable: boolean;
        } & {
            href?: string | undefined;
        }> & {
            onClick?: ((ev: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "icon" | "loading" | "status" | "hoverable">;
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
        $emit: (event: "click", ev: MouseEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            href?: unknown;
            status?: unknown;
            hoverable?: unknown;
            icon?: unknown;
            loading?: unknown;
            disabled?: unknown;
        } & {
            disabled: boolean;
            icon: boolean;
            loading: boolean;
            status: "normal" | "success" | "warning" | "danger";
            hoverable: boolean;
        } & {
            href?: string | undefined;
        }> & {
            onClick?: ((ev: MouseEvent) => any) | undefined;
        }, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            prefixCls: string;
            showIcon: import("vue").ComputedRef<boolean>;
            handleClick: (ev: MouseEvent) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (ev: MouseEvent) => true;
        }, string, {
            disabled: boolean;
            icon: boolean;
            loading: boolean;
            status: "normal" | "success" | "warning" | "danger";
            hoverable: boolean;
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
        href?: unknown;
        status?: unknown;
        hoverable?: unknown;
        icon?: unknown;
        loading?: unknown;
        disabled?: unknown;
    } & {
        disabled: boolean;
        icon: boolean;
        loading: boolean;
        status: "normal" | "success" | "warning" | "danger";
        hoverable: boolean;
    } & {
        href?: string | undefined;
    }> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        prefixCls: string;
        showIcon: import("vue").ComputedRef<boolean>;
        handleClick: (ev: MouseEvent) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    href?: unknown;
    status?: unknown;
    hoverable?: unknown;
    icon?: unknown;
    loading?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    icon: boolean;
    loading: boolean;
    status: "normal" | "success" | "warning" | "danger";
    hoverable: boolean;
} & {
    href?: string | undefined;
}> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    prefixCls: string;
    showIcon: import("vue").ComputedRef<boolean>;
    handleClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, {
    disabled: boolean;
    icon: boolean;
    loading: boolean;
    status: "normal" | "success" | "warning" | "danger";
    hoverable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type LinkInstance = InstanceType<typeof _Link>;
export default Link;
