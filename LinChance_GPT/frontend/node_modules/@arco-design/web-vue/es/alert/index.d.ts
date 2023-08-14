import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Alert from './alert';
declare const Alert: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            center: boolean;
            type: "normal" | "error" | "success" | "warning" | "info";
            closable: boolean;
            showIcon: boolean;
            banner: boolean;
        }> & Omit<Readonly<{
            type?: unknown;
            showIcon?: unknown;
            closable?: unknown;
            title?: unknown;
            banner?: unknown;
            center?: unknown;
        } & {
            center: boolean;
            type: "normal" | "error" | "success" | "warning" | "info";
            closable: boolean;
            showIcon: boolean;
            banner: boolean;
        } & {
            title?: string | undefined;
        }> & {
            onClose?: ((ev: MouseEvent) => any) | undefined;
            onAfterClose?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "center" | "type" | "closable" | "showIcon" | "banner">;
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
        $emit: ((event: "close", ev: MouseEvent) => void) & ((event: "afterClose") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            showIcon?: unknown;
            closable?: unknown;
            title?: unknown;
            banner?: unknown;
            center?: unknown;
        } & {
            center: boolean;
            type: "normal" | "error" | "success" | "warning" | "info";
            closable: boolean;
            showIcon: boolean;
            banner: boolean;
        } & {
            title?: string | undefined;
        }> & {
            onClose?: ((ev: MouseEvent) => any) | undefined;
            onAfterClose?: (() => any) | undefined;
        }, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            visible: import("vue").Ref<boolean>;
            handleClose: (ev: MouseEvent) => void;
            handleAfterLeave: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            close: (ev: MouseEvent) => true;
            afterClose: () => true;
        }, string, {
            center: boolean;
            type: "normal" | "error" | "success" | "warning" | "info";
            closable: boolean;
            showIcon: boolean;
            banner: boolean;
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
        type?: unknown;
        showIcon?: unknown;
        closable?: unknown;
        title?: unknown;
        banner?: unknown;
        center?: unknown;
    } & {
        center: boolean;
        type: "normal" | "error" | "success" | "warning" | "info";
        closable: boolean;
        showIcon: boolean;
        banner: boolean;
    } & {
        title?: string | undefined;
    }> & {
        onClose?: ((ev: MouseEvent) => any) | undefined;
        onAfterClose?: (() => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        visible: import("vue").Ref<boolean>;
        handleClose: (ev: MouseEvent) => void;
        handleAfterLeave: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    showIcon?: unknown;
    closable?: unknown;
    title?: unknown;
    banner?: unknown;
    center?: unknown;
} & {
    center: boolean;
    type: "normal" | "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
} & {
    title?: string | undefined;
}> & {
    onClose?: ((ev: MouseEvent) => any) | undefined;
    onAfterClose?: (() => any) | undefined;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    visible: import("vue").Ref<boolean>;
    handleClose: (ev: MouseEvent) => void;
    handleAfterLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (ev: MouseEvent) => true;
    afterClose: () => true;
}, string, {
    center: boolean;
    type: "normal" | "error" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type AlertInstance = InstanceType<typeof _Alert>;
export default Alert;
