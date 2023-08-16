import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Anchor from './anchor';
import _AnchorLink from './anchor-link';
declare const Anchor: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            smooth: boolean;
            boundary: number | "center" | "end" | "start" | "nearest";
            lineLess: boolean;
            changeHash: boolean;
        }> & Omit<Readonly<{
            boundary?: unknown;
            lineLess?: unknown;
            scrollContainer?: unknown;
            changeHash?: unknown;
            smooth?: unknown;
        } & {
            smooth: boolean;
            boundary: number | "center" | "end" | "start" | "nearest";
            lineLess: boolean;
            changeHash: boolean;
        } & {
            scrollContainer?: string | Window | HTMLElement | undefined;
        }> & {
            onChange?: ((hash: string) => any) | undefined;
            onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "smooth" | "boundary" | "lineLess" | "changeHash">;
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
        $emit: ((event: "select", hash: string | undefined, preHash: string) => void) & ((event: "change", hash: string) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            boundary?: unknown;
            lineLess?: unknown;
            scrollContainer?: unknown;
            changeHash?: unknown;
            smooth?: unknown;
        } & {
            smooth: boolean;
            boundary: number | "center" | "end" | "start" | "nearest";
            lineLess: boolean;
            changeHash: boolean;
        } & {
            scrollContainer?: string | Window | HTMLElement | undefined;
        }> & {
            onChange?: ((hash: string) => any) | undefined;
            onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
        }, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            anchorRef: import("vue").Ref<HTMLElement | undefined>;
            lineSliderRef: import("vue").Ref<HTMLElement | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            select: (hash: string | undefined, preHash: string) => true;
            change: (hash: string) => true;
        }, string, {
            smooth: boolean;
            boundary: number | "center" | "end" | "start" | "nearest";
            lineLess: boolean;
            changeHash: boolean;
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
        boundary?: unknown;
        lineLess?: unknown;
        scrollContainer?: unknown;
        changeHash?: unknown;
        smooth?: unknown;
    } & {
        smooth: boolean;
        boundary: number | "center" | "end" | "start" | "nearest";
        lineLess: boolean;
        changeHash: boolean;
    } & {
        scrollContainer?: string | Window | HTMLElement | undefined;
    }> & {
        onChange?: ((hash: string) => any) | undefined;
        onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        anchorRef: import("vue").Ref<HTMLElement | undefined>;
        lineSliderRef: import("vue").Ref<HTMLElement | undefined>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    boundary?: unknown;
    lineLess?: unknown;
    scrollContainer?: unknown;
    changeHash?: unknown;
    smooth?: unknown;
} & {
    smooth: boolean;
    boundary: number | "center" | "end" | "start" | "nearest";
    lineLess: boolean;
    changeHash: boolean;
} & {
    scrollContainer?: string | Window | HTMLElement | undefined;
}> & {
    onChange?: ((hash: string) => any) | undefined;
    onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    anchorRef: import("vue").Ref<HTMLElement | undefined>;
    lineSliderRef: import("vue").Ref<HTMLElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (hash: string | undefined, preHash: string) => true;
    change: (hash: string) => true;
}, string, {
    smooth: boolean;
    boundary: number | "center" | "end" | "start" | "nearest";
    lineLess: boolean;
    changeHash: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Link: import("vue").DefineComponent<{
        title: StringConstructor;
        href: StringConstructor;
    }, {
        prefixCls: string;
        linkCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        linkRef: import("vue").Ref<HTMLElement | undefined>;
        handleClick: (e: MouseEvent) => void | undefined;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title?: unknown;
        href?: unknown;
    } & {} & {
        title?: string | undefined;
        href?: string | undefined;
    }>, {}>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type AnchorInstance = InstanceType<typeof _Anchor>;
export declare type AnchorLinkInstance = InstanceType<typeof _AnchorLink>;
export { _AnchorLink as AnchorLink };
export default Anchor;
