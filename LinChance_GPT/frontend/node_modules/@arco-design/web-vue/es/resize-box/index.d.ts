import { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _ResizeBox from './resize-box';
declare const ResizeBox: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            component: string;
            directions: ("top" | "bottom" | "left" | "right")[];
        }> & Omit<Readonly<{
            width?: unknown;
            height?: unknown;
            component?: unknown;
            directions?: unknown;
        } & {
            component: string;
            directions: ("top" | "bottom" | "left" | "right")[];
        } & {
            height?: number | undefined;
            width?: number | undefined;
        }> & {
            "onUpdate:width"?: ((width: number) => any) | undefined;
            "onUpdate:height"?: ((height: number) => any) | undefined;
            onMovingStart?: ((ev: MouseEvent) => any) | undefined;
            onMoving?: ((size: {
                width: number;
                height: number;
            }, ev: MouseEvent) => any) | undefined;
            onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "component" | "directions">;
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
        $emit: ((event: "update:width", width: number) => void) & ((event: "update:height", height: number) => void) & ((event: "movingStart", ev: MouseEvent) => void) & ((event: "moving", size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => void) & ((event: "movingEnd", ev: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            width?: unknown;
            height?: unknown;
            component?: unknown;
            directions?: unknown;
        } & {
            component: string;
            directions: ("top" | "bottom" | "left" | "right")[];
        } & {
            height?: number | undefined;
            width?: number | undefined;
        }> & {
            "onUpdate:width"?: ((width: number) => any) | undefined;
            "onUpdate:height"?: ((height: number) => any) | undefined;
            onMovingStart?: ((ev: MouseEvent) => any) | undefined;
            onMoving?: ((size: {
                width: number;
                height: number;
            }, ev: MouseEvent) => any) | undefined;
            onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
        }, {
            prefixCls: string;
            classNames: import("vue").ComputedRef<string[]>;
            styles: import("vue").ComputedRef<{
                "padding-left"?: string | undefined;
                "padding-right"?: string | undefined;
                "padding-top"?: string | undefined;
                "padding-bottom"?: string | undefined;
                height?: string | undefined;
                width?: string | undefined;
            }>;
            wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
            onMoveStart: (direction: import("./resize-box").DirectionType, e: MouseEvent) => void;
            isHorizontal: (direction: import("./resize-box").DirectionType) => boolean;
            allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
            onTiggerResize: (direction: import("./resize-box").DirectionType, entry: ResizeObserverEntry) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:width': (width: number) => true;
            'update:height': (height: number) => true;
            movingStart: (ev: MouseEvent) => true;
            moving: (size: {
                width: number;
                height: number;
            }, ev: MouseEvent) => true;
            movingEnd: (ev: MouseEvent) => true;
        }, string, {
            component: string;
            directions: ("top" | "bottom" | "left" | "right")[];
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
        width?: unknown;
        height?: unknown;
        component?: unknown;
        directions?: unknown;
    } & {
        component: string;
        directions: ("top" | "bottom" | "left" | "right")[];
    } & {
        height?: number | undefined;
        width?: number | undefined;
    }> & {
        "onUpdate:width"?: ((width: number) => any) | undefined;
        "onUpdate:height"?: ((height: number) => any) | undefined;
        onMovingStart?: ((ev: MouseEvent) => any) | undefined;
        onMoving?: ((size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => any) | undefined;
        onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        classNames: import("vue").ComputedRef<string[]>;
        styles: import("vue").ComputedRef<{
            "padding-left"?: string | undefined;
            "padding-right"?: string | undefined;
            "padding-top"?: string | undefined;
            "padding-bottom"?: string | undefined;
            height?: string | undefined;
            width?: string | undefined;
        }>;
        wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
        onMoveStart: (direction: import("./resize-box").DirectionType, e: MouseEvent) => void;
        isHorizontal: (direction: import("./resize-box").DirectionType) => boolean;
        allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
        onTiggerResize: (direction: import("./resize-box").DirectionType, entry: ResizeObserverEntry) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    width?: unknown;
    height?: unknown;
    component?: unknown;
    directions?: unknown;
} & {
    component: string;
    directions: ("top" | "bottom" | "left" | "right")[];
} & {
    height?: number | undefined;
    width?: number | undefined;
}> & {
    "onUpdate:width"?: ((width: number) => any) | undefined;
    "onUpdate:height"?: ((height: number) => any) | undefined;
    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
    onMoving?: ((size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any) | undefined;
    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
}, {
    prefixCls: string;
    classNames: import("vue").ComputedRef<string[]>;
    styles: import("vue").ComputedRef<{
        "padding-left"?: string | undefined;
        "padding-right"?: string | undefined;
        "padding-top"?: string | undefined;
        "padding-bottom"?: string | undefined;
        height?: string | undefined;
        width?: string | undefined;
    }>;
    wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
    onMoveStart: (direction: import("./resize-box").DirectionType, e: MouseEvent) => void;
    isHorizontal: (direction: import("./resize-box").DirectionType) => boolean;
    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
    onTiggerResize: (direction: import("./resize-box").DirectionType, entry: ResizeObserverEntry) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:width': (width: number) => true;
    'update:height': (height: number) => true;
    movingStart: (ev: MouseEvent) => true;
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => true;
    movingEnd: (ev: MouseEvent) => true;
}, string, {
    component: string;
    directions: ("top" | "bottom" | "left" | "right")[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type ResizeBoxInstance = InstanceType<typeof _ResizeBox>;
export default ResizeBox;
