import { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Split from './split';
declare const Split: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            size: string | number;
            direction: "horizontal" | "vertical";
            component: string;
            defaultSize: string | number;
        }> & Omit<Readonly<{
            component?: unknown;
            direction?: unknown;
            size?: unknown;
            defaultSize?: unknown;
            min?: unknown;
            max?: unknown;
            disabled?: unknown;
        } & {
            disabled: boolean;
            direction: "horizontal" | "vertical";
            component: string;
            defaultSize: string | number;
        } & {
            size?: string | number | undefined;
            min?: string | number | undefined;
            max?: string | number | undefined;
        }> & {
            onMoving?: ((ev: MouseEvent) => any) | undefined;
            onMoveStart?: ((ev: MouseEvent) => any) | undefined;
            onMoveEnd?: ((ev: MouseEvent) => any) | undefined;
            "onUpdate:size"?: ((size: string | number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "size" | "direction" | "component" | "defaultSize">;
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
        $emit: ((event: "moving", ev: MouseEvent) => void) & ((event: "moveStart", ev: MouseEvent) => void) & ((event: "moveEnd", ev: MouseEvent) => void) & ((event: "update:size", size: string | number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            component?: unknown;
            direction?: unknown;
            size?: unknown;
            defaultSize?: unknown;
            min?: unknown;
            max?: unknown;
            disabled?: unknown;
        } & {
            disabled: boolean;
            direction: "horizontal" | "vertical";
            component: string;
            defaultSize: string | number;
        } & {
            size?: string | number | undefined;
            min?: string | number | undefined;
            max?: string | number | undefined;
        }> & {
            onMoving?: ((ev: MouseEvent) => any) | undefined;
            onMoveStart?: ((ev: MouseEvent) => any) | undefined;
            onMoveEnd?: ((ev: MouseEvent) => any) | undefined;
            "onUpdate:size"?: ((size: string | number) => any) | undefined;
        }, {
            prefixCls: string;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            isHorizontal: import("vue").ComputedRef<boolean>;
            wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
            onMoveStart: (e: MouseEvent) => Promise<void>;
            onTriggerResize: (entry: ResizeObserverEntry) => void;
            firstPaneStyles: import("vue").ComputedRef<{
                flex: string;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            moveStart: (ev: MouseEvent) => true;
            moving: (ev: MouseEvent) => true;
            moveEnd: (ev: MouseEvent) => true;
            'update:size': (size: string | number) => true;
        }, string, {
            disabled: boolean;
            size: string | number;
            direction: "horizontal" | "vertical";
            component: string;
            defaultSize: string | number;
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
        component?: unknown;
        direction?: unknown;
        size?: unknown;
        defaultSize?: unknown;
        min?: unknown;
        max?: unknown;
        disabled?: unknown;
    } & {
        disabled: boolean;
        direction: "horizontal" | "vertical";
        component: string;
        defaultSize: string | number;
    } & {
        size?: string | number | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
    }> & {
        onMoving?: ((ev: MouseEvent) => any) | undefined;
        onMoveStart?: ((ev: MouseEvent) => any) | undefined;
        onMoveEnd?: ((ev: MouseEvent) => any) | undefined;
        "onUpdate:size"?: ((size: string | number) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        isHorizontal: import("vue").ComputedRef<boolean>;
        wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
        onMoveStart: (e: MouseEvent) => Promise<void>;
        onTriggerResize: (entry: ResizeObserverEntry) => void;
        firstPaneStyles: import("vue").ComputedRef<{
            flex: string;
        }>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    component?: unknown;
    direction?: unknown;
    size?: unknown;
    defaultSize?: unknown;
    min?: unknown;
    max?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    direction: "horizontal" | "vertical";
    component: string;
    defaultSize: string | number;
} & {
    size?: string | number | undefined;
    min?: string | number | undefined;
    max?: string | number | undefined;
}> & {
    onMoving?: ((ev: MouseEvent) => any) | undefined;
    onMoveStart?: ((ev: MouseEvent) => any) | undefined;
    onMoveEnd?: ((ev: MouseEvent) => any) | undefined;
    "onUpdate:size"?: ((size: string | number) => any) | undefined;
}, {
    prefixCls: string;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
    onMoveStart: (e: MouseEvent) => Promise<void>;
    onTriggerResize: (entry: ResizeObserverEntry) => void;
    firstPaneStyles: import("vue").ComputedRef<{
        flex: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    moveStart: (ev: MouseEvent) => true;
    moving: (ev: MouseEvent) => true;
    moveEnd: (ev: MouseEvent) => true;
    'update:size': (size: string | number) => true;
}, string, {
    disabled: boolean;
    size: string | number;
    direction: "horizontal" | "vertical";
    component: string;
    defaultSize: string | number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type SplitInstance = InstanceType<typeof _Split>;
export default Split;
