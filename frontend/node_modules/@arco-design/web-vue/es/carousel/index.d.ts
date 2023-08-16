import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Carousel from './carousel';
import _CarouselItem from './carousel-item';
declare const Carousel: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            trigger: import("./interface").CarouselTriggerEvent;
            showArrow: import("./interface").CarouselArrowType;
            arrowClass: string;
            animationName: "slide" | "fade" | "card";
            direction: "horizontal" | "vertical";
            transitionTimingFunction: string;
            defaultCurrent: number;
            autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
            moveSpeed: number;
            indicatorType: import("./interface").CarouselIndicatorType;
            indicatorPosition: import("./interface").CarouselIndicatorPosition;
            indicatorClass: string;
        }> & Omit<Readonly<{
            current?: unknown;
            defaultCurrent?: unknown;
            autoPlay?: unknown;
            moveSpeed?: unknown;
            animationName?: unknown;
            trigger?: unknown;
            direction?: unknown;
            showArrow?: unknown;
            arrowClass?: unknown;
            indicatorType?: unknown;
            indicatorPosition?: unknown;
            indicatorClass?: unknown;
            transitionTimingFunction?: unknown;
        } & {
            trigger: import("./interface").CarouselTriggerEvent;
            showArrow: import("./interface").CarouselArrowType;
            arrowClass: string;
            animationName: "slide" | "fade" | "card";
            direction: "horizontal" | "vertical";
            transitionTimingFunction: string;
            defaultCurrent: number;
            autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
            moveSpeed: number;
            indicatorType: import("./interface").CarouselIndicatorType;
            indicatorPosition: import("./interface").CarouselIndicatorPosition;
            indicatorClass: string;
        } & {
            current?: number | undefined;
        }> & {
            onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
            "onUpdate:current"?: ((index: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "trigger" | "showArrow" | "arrowClass" | "animationName" | "direction" | "transitionTimingFunction" | "defaultCurrent" | "autoPlay" | "moveSpeed" | "indicatorType" | "indicatorPosition" | "indicatorClass">;
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
        $emit: ((event: "change", index: number, prevIndex: number, isManual: boolean) => void) & ((event: "update:current", index: number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            current?: unknown;
            defaultCurrent?: unknown;
            autoPlay?: unknown;
            moveSpeed?: unknown;
            animationName?: unknown;
            trigger?: unknown;
            direction?: unknown;
            showArrow?: unknown;
            arrowClass?: unknown;
            indicatorType?: unknown;
            indicatorPosition?: unknown;
            indicatorClass?: unknown;
            transitionTimingFunction?: unknown;
        } & {
            trigger: import("./interface").CarouselTriggerEvent;
            showArrow: import("./interface").CarouselArrowType;
            arrowClass: string;
            animationName: "slide" | "fade" | "card";
            direction: "horizontal" | "vertical";
            transitionTimingFunction: string;
            defaultCurrent: number;
            autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
            moveSpeed: number;
            indicatorType: import("./interface").CarouselIndicatorType;
            indicatorPosition: import("./interface").CarouselIndicatorPosition;
            indicatorClass: string;
        } & {
            current?: number | undefined;
        }> & {
            onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
            "onUpdate:current"?: ((index: number) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:current': (index: number) => true;
            change: (index: number, prevIndex: number, isManual: boolean) => true;
        }, string, {
            trigger: import("./interface").CarouselTriggerEvent;
            showArrow: import("./interface").CarouselArrowType;
            arrowClass: string;
            animationName: "slide" | "fade" | "card";
            direction: "horizontal" | "vertical";
            transitionTimingFunction: string;
            defaultCurrent: number;
            autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
            moveSpeed: number;
            indicatorType: import("./interface").CarouselIndicatorType;
            indicatorPosition: import("./interface").CarouselIndicatorPosition;
            indicatorClass: string;
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
        current?: unknown;
        defaultCurrent?: unknown;
        autoPlay?: unknown;
        moveSpeed?: unknown;
        animationName?: unknown;
        trigger?: unknown;
        direction?: unknown;
        showArrow?: unknown;
        arrowClass?: unknown;
        indicatorType?: unknown;
        indicatorPosition?: unknown;
        indicatorClass?: unknown;
        transitionTimingFunction?: unknown;
    } & {
        trigger: import("./interface").CarouselTriggerEvent;
        showArrow: import("./interface").CarouselArrowType;
        arrowClass: string;
        animationName: "slide" | "fade" | "card";
        direction: "horizontal" | "vertical";
        transitionTimingFunction: string;
        defaultCurrent: number;
        autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
        moveSpeed: number;
        indicatorType: import("./interface").CarouselIndicatorType;
        indicatorPosition: import("./interface").CarouselIndicatorPosition;
        indicatorClass: string;
    } & {
        current?: number | undefined;
    }> & {
        onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
        "onUpdate:current"?: ((index: number) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    current?: unknown;
    defaultCurrent?: unknown;
    autoPlay?: unknown;
    moveSpeed?: unknown;
    animationName?: unknown;
    trigger?: unknown;
    direction?: unknown;
    showArrow?: unknown;
    arrowClass?: unknown;
    indicatorType?: unknown;
    indicatorPosition?: unknown;
    indicatorClass?: unknown;
    transitionTimingFunction?: unknown;
} & {
    trigger: import("./interface").CarouselTriggerEvent;
    showArrow: import("./interface").CarouselArrowType;
    arrowClass: string;
    animationName: "slide" | "fade" | "card";
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    defaultCurrent: number;
    autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
    moveSpeed: number;
    indicatorType: import("./interface").CarouselIndicatorType;
    indicatorPosition: import("./interface").CarouselIndicatorPosition;
    indicatorClass: string;
} & {
    current?: number | undefined;
}> & {
    onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
    "onUpdate:current"?: ((index: number) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (index: number) => true;
    change: (index: number, prevIndex: number, isManual: boolean) => true;
}, string, {
    trigger: import("./interface").CarouselTriggerEvent;
    showArrow: import("./interface").CarouselArrowType;
    arrowClass: string;
    animationName: "slide" | "fade" | "card";
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    defaultCurrent: number;
    autoPlay: boolean | import("./interface").CarouselAutoPlayConfig;
    moveSpeed: number;
    indicatorType: import("./interface").CarouselIndicatorType;
    indicatorPosition: import("./interface").CarouselIndicatorPosition;
    indicatorClass: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{}, {
        cls: import("vue").ComputedRef<{
            [x: string]: boolean | "" | undefined;
        }>;
        animationStyle: import("vue").ComputedRef<{
            transitionTimingFunction: string | undefined;
            transitionDuration: string;
            animationTimingFunction: string | undefined;
            animationDuration: string;
        }>;
        isCurrent: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type CarouselInstance = InstanceType<typeof _Carousel>;
export declare type CarouselItemInstance = InstanceType<typeof _CarouselItem>;
export { _CarouselItem as CarouselItem };
export default Carousel;
