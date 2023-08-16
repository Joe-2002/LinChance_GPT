import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Scrollbar from './scrollbar';
declare const Scrollbar: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hide: boolean;
            type: "embed" | "track";
            disableHorizontal: boolean;
            disableVertical: boolean;
        }> & Omit<Readonly<{
            type?: unknown;
            outerClass?: unknown;
            outerStyle?: unknown;
            hide?: unknown;
            disableHorizontal?: unknown;
            disableVertical?: unknown;
        } & {
            hide: boolean;
            type: "embed" | "track";
            disableHorizontal: boolean;
            disableVertical: boolean;
        } & {
            outerStyle?: import("vue").StyleValue | undefined;
            outerClass?: string | unknown[] | Record<string, any> | undefined;
        }> & {
            onScroll?: ((ev: Event) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hide" | "type" | "disableHorizontal" | "disableVertical">;
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
        $emit: (event: "scroll", ev: Event) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            outerClass?: unknown;
            outerStyle?: unknown;
            hide?: unknown;
            disableHorizontal?: unknown;
            disableVertical?: unknown;
        } & {
            hide: boolean;
            type: "embed" | "track";
            disableHorizontal: boolean;
            disableVertical: boolean;
        } & {
            outerStyle?: import("vue").StyleValue | undefined;
            outerClass?: string | unknown[] | Record<string, any> | undefined;
        }> & {
            onScroll?: ((ev: Event) => any) | undefined;
        }, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | Record<string, any> | undefined)[]>;
            style: import("vue").ComputedRef<(import("vue").StyleValue | undefined)[]>;
            containerRef: import("vue").Ref<HTMLElement | undefined>;
            horizontalThumbRef: import("vue").Ref<any>;
            verticalThumbRef: import("vue").Ref<any>;
            horizontalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
            verticalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
            isBoth: import("vue").Ref<boolean>;
            hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
            hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
            handleResize: () => void;
            handleScroll: (ev: Event) => void;
            handleHorizontalScroll: (offset: number) => void;
            handleVerticalScroll: (offset: number) => void;
        }, unknown, {}, {
            scrollTo(options?: number | {
                left?: number | undefined;
                top?: number | undefined;
            } | undefined, y?: number | undefined): void;
            scrollTop(top: number): void;
            scrollLeft(left: number): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (ev: Event) => true;
        }, string, {
            hide: boolean;
            type: "embed" | "track";
            disableHorizontal: boolean;
            disableVertical: boolean;
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
        outerClass?: unknown;
        outerStyle?: unknown;
        hide?: unknown;
        disableHorizontal?: unknown;
        disableVertical?: unknown;
    } & {
        hide: boolean;
        type: "embed" | "track";
        disableHorizontal: boolean;
        disableVertical: boolean;
    } & {
        outerStyle?: import("vue").StyleValue | undefined;
        outerClass?: string | unknown[] | Record<string, any> | undefined;
    }> & {
        onScroll?: ((ev: Event) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | Record<string, any> | undefined)[]>;
        style: import("vue").ComputedRef<(import("vue").StyleValue | undefined)[]>;
        containerRef: import("vue").Ref<HTMLElement | undefined>;
        horizontalThumbRef: import("vue").Ref<any>;
        verticalThumbRef: import("vue").Ref<any>;
        horizontalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
        verticalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
        isBoth: import("vue").Ref<boolean>;
        hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
        hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
        handleResize: () => void;
        handleScroll: (ev: Event) => void;
        handleHorizontalScroll: (offset: number) => void;
        handleVerticalScroll: (offset: number) => void;
    }> & {} & {} & {
        scrollTo(options?: number | {
            left?: number | undefined;
            top?: number | undefined;
        } | undefined, y?: number | undefined): void;
        scrollTop(top: number): void;
        scrollLeft(left: number): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    outerClass?: unknown;
    outerStyle?: unknown;
    hide?: unknown;
    disableHorizontal?: unknown;
    disableVertical?: unknown;
} & {
    hide: boolean;
    type: "embed" | "track";
    disableHorizontal: boolean;
    disableVertical: boolean;
} & {
    outerStyle?: import("vue").StyleValue | undefined;
    outerClass?: string | unknown[] | Record<string, any> | undefined;
}> & {
    onScroll?: ((ev: Event) => any) | undefined;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | Record<string, any> | undefined)[]>;
    style: import("vue").ComputedRef<(import("vue").StyleValue | undefined)[]>;
    containerRef: import("vue").Ref<HTMLElement | undefined>;
    horizontalThumbRef: import("vue").Ref<any>;
    verticalThumbRef: import("vue").Ref<any>;
    horizontalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
    verticalData: import("vue").Ref<import("./interface").ThumbData | undefined>;
    isBoth: import("vue").Ref<boolean>;
    hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
    hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
    handleResize: () => void;
    handleScroll: (ev: Event) => void;
    handleHorizontalScroll: (offset: number) => void;
    handleVerticalScroll: (offset: number) => void;
}, unknown, {}, {
    scrollTo(options?: number | {
        left?: number | undefined;
        top?: number | undefined;
    } | undefined, y?: number | undefined): void;
    scrollTop(top: number): void;
    scrollLeft(left: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (ev: Event) => true;
}, string, {
    hide: boolean;
    type: "embed" | "track";
    disableHorizontal: boolean;
    disableVertical: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type ScrollbarInstance = InstanceType<typeof _Scrollbar>;
export type { ScrollbarProps } from './interface';
export default Scrollbar;
