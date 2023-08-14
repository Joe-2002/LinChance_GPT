import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Popconfirm from './popconfirm';
declare const Popconfirm: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            type: "error" | "success" | "warning" | "info";
            okLoading: boolean;
        }> & Omit<Readonly<{
            content?: unknown;
            position?: unknown;
            popupVisible?: unknown;
            defaultPopupVisible?: unknown;
            type?: unknown;
            okText?: unknown;
            cancelText?: unknown;
            okLoading?: unknown;
            okButtonProps?: unknown;
            cancelButtonProps?: unknown;
            contentClass?: unknown;
            contentStyle?: unknown;
            arrowClass?: unknown;
            arrowStyle?: unknown;
            popupContainer?: unknown;
            onBeforeOk?: unknown;
            onBeforeCancel?: unknown;
        } & {
            defaultPopupVisible: boolean;
            position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            type: "error" | "success" | "warning" | "info";
            okLoading: boolean;
        } & {
            popupVisible?: boolean | undefined;
            contentClass?: import("../_utils/types").ClassName | undefined;
            contentStyle?: import("vue").CSSProperties | undefined;
            arrowClass?: import("../_utils/types").ClassName | undefined;
            arrowStyle?: import("vue").CSSProperties | undefined;
            popupContainer?: string | HTMLElement | undefined;
            content?: string | undefined;
            okText?: string | undefined;
            cancelText?: string | undefined;
            okButtonProps?: import("..").ButtonProps | undefined;
            cancelButtonProps?: import("..").ButtonProps | undefined;
            onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
            onBeforeCancel?: (() => boolean) | undefined;
        }> & {
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            onOk?: (() => any) | undefined;
            onCancel?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "popupVisible" | "defaultPopupVisible" | "position" | "type" | "okLoading">;
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
        $emit: ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void) & ((event: "cancel") => void) & ((event: "ok") => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            content?: unknown;
            position?: unknown;
            popupVisible?: unknown;
            defaultPopupVisible?: unknown;
            type?: unknown;
            okText?: unknown;
            cancelText?: unknown;
            okLoading?: unknown;
            okButtonProps?: unknown;
            cancelButtonProps?: unknown;
            contentClass?: unknown;
            contentStyle?: unknown;
            arrowClass?: unknown;
            arrowStyle?: unknown;
            popupContainer?: unknown;
            onBeforeOk?: unknown;
            onBeforeCancel?: unknown;
        } & {
            defaultPopupVisible: boolean;
            position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            type: "error" | "success" | "warning" | "info";
            okLoading: boolean;
        } & {
            popupVisible?: boolean | undefined;
            contentClass?: import("../_utils/types").ClassName | undefined;
            contentStyle?: import("vue").CSSProperties | undefined;
            arrowClass?: import("../_utils/types").ClassName | undefined;
            arrowStyle?: import("vue").CSSProperties | undefined;
            popupContainer?: string | HTMLElement | undefined;
            content?: string | undefined;
            okText?: string | undefined;
            cancelText?: string | undefined;
            okButtonProps?: import("..").ButtonProps | undefined;
            cancelButtonProps?: import("..").ButtonProps | undefined;
            onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
            onBeforeCancel?: (() => boolean) | undefined;
        }> & {
            "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
            onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
            onOk?: (() => any) | undefined;
            onCancel?: (() => any) | undefined;
        }, {
            prefixCls: string;
            contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
            computedPopupVisible: import("vue").ComputedRef<boolean>;
            mergedOkLoading: import("vue").ComputedRef<boolean>;
            handlePopupVisibleChange: (visible: boolean) => void;
            handleOk: () => Promise<void>;
            handleCancel: () => void;
            t: (key: string, ...args: any[]) => string;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:popupVisible': (visible: boolean) => true;
            popupVisibleChange: (visible: boolean) => true;
            ok: () => true;
            cancel: () => true;
        }, string, {
            popupVisible: boolean;
            defaultPopupVisible: boolean;
            position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            type: "error" | "success" | "warning" | "info";
            okLoading: boolean;
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
        content?: unknown;
        position?: unknown;
        popupVisible?: unknown;
        defaultPopupVisible?: unknown;
        type?: unknown;
        okText?: unknown;
        cancelText?: unknown;
        okLoading?: unknown;
        okButtonProps?: unknown;
        cancelButtonProps?: unknown;
        contentClass?: unknown;
        contentStyle?: unknown;
        arrowClass?: unknown;
        arrowStyle?: unknown;
        popupContainer?: unknown;
        onBeforeOk?: unknown;
        onBeforeCancel?: unknown;
    } & {
        defaultPopupVisible: boolean;
        position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
        type: "error" | "success" | "warning" | "info";
        okLoading: boolean;
    } & {
        popupVisible?: boolean | undefined;
        contentClass?: import("../_utils/types").ClassName | undefined;
        contentStyle?: import("vue").CSSProperties | undefined;
        arrowClass?: import("../_utils/types").ClassName | undefined;
        arrowStyle?: import("vue").CSSProperties | undefined;
        popupContainer?: string | HTMLElement | undefined;
        content?: string | undefined;
        okText?: string | undefined;
        cancelText?: string | undefined;
        okButtonProps?: import("..").ButtonProps | undefined;
        cancelButtonProps?: import("..").ButtonProps | undefined;
        onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
        onBeforeCancel?: (() => boolean) | undefined;
    }> & {
        "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
        onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
        onOk?: (() => any) | undefined;
        onCancel?: (() => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
        arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
        computedPopupVisible: import("vue").ComputedRef<boolean>;
        mergedOkLoading: import("vue").ComputedRef<boolean>;
        handlePopupVisibleChange: (visible: boolean) => void;
        handleOk: () => Promise<void>;
        handleCancel: () => void;
        t: (key: string, ...args: any[]) => string;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    content?: unknown;
    position?: unknown;
    popupVisible?: unknown;
    defaultPopupVisible?: unknown;
    type?: unknown;
    okText?: unknown;
    cancelText?: unknown;
    okLoading?: unknown;
    okButtonProps?: unknown;
    cancelButtonProps?: unknown;
    contentClass?: unknown;
    contentStyle?: unknown;
    arrowClass?: unknown;
    arrowStyle?: unknown;
    popupContainer?: unknown;
    onBeforeOk?: unknown;
    onBeforeCancel?: unknown;
} & {
    defaultPopupVisible: boolean;
    position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
    type: "error" | "success" | "warning" | "info";
    okLoading: boolean;
} & {
    popupVisible?: boolean | undefined;
    contentClass?: import("../_utils/types").ClassName | undefined;
    contentStyle?: import("vue").CSSProperties | undefined;
    arrowClass?: import("../_utils/types").ClassName | undefined;
    arrowStyle?: import("vue").CSSProperties | undefined;
    popupContainer?: string | HTMLElement | undefined;
    content?: string | undefined;
    okText?: string | undefined;
    cancelText?: string | undefined;
    okButtonProps?: import("..").ButtonProps | undefined;
    cancelButtonProps?: import("..").ButtonProps | undefined;
    onBeforeOk?: ((done: (closed: boolean) => void) => boolean | void | Promise<boolean | void>) | undefined;
    onBeforeCancel?: (() => boolean) | undefined;
}> & {
    "onUpdate:popupVisible"?: ((visible: boolean) => any) | undefined;
    onPopupVisibleChange?: ((visible: boolean) => any) | undefined;
    onOk?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}, {
    prefixCls: string;
    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
    computedPopupVisible: import("vue").ComputedRef<boolean>;
    mergedOkLoading: import("vue").ComputedRef<boolean>;
    handlePopupVisibleChange: (visible: boolean) => void;
    handleOk: () => Promise<void>;
    handleCancel: () => void;
    t: (key: string, ...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:popupVisible': (visible: boolean) => true;
    popupVisibleChange: (visible: boolean) => true;
    ok: () => true;
    cancel: () => true;
}, string, {
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    position: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
    type: "error" | "success" | "warning" | "info";
    okLoading: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type PopconfirmInstance = InstanceType<typeof _Popconfirm>;
export default Popconfirm;
