import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Layout from './layout';
import _LayoutHeader from './header';
import _LayoutContent from './content';
import _LayoutFooter from './footer';
import _LayoutSider from './sider';
declare const Layout: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hasSider: boolean;
        }> & Omit<Readonly<{
            hasSider?: unknown;
        } & {
            hasSider: boolean;
        } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hasSider">;
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
            hasSider?: unknown;
        } & {
            hasSider: boolean;
        } & {}>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: number | true;
            })[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            hasSider: boolean;
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
        hasSider?: unknown;
    } & {
        hasSider: boolean;
    } & {}> & import("vue").ShallowUnwrapRef<{
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: number | true;
        })[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    hasSider?: unknown;
} & {
    hasSider: boolean;
} & {}>, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: number | true;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    hasSider: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Header: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    Content: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    Footer: import("vue").DefineComponent<{}, {
        classNames: string[];
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    Sider: import("vue").DefineComponent<{
        theme: {
            type: import("vue").PropType<"dark" | "light">;
            default: string;
        };
        collapsed: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultCollapsed: {
            type: BooleanConstructor;
        };
        collapsible: {
            type: BooleanConstructor;
        };
        width: {
            type: NumberConstructor;
            default: number;
        };
        collapsedWidth: {
            type: NumberConstructor;
            default: number;
        };
        reverseArrow: {
            type: BooleanConstructor;
        };
        breakpoint: {
            type: import("vue").PropType<"xxl" | "xl" | "lg" | "md" | "sm" | "xs">;
        };
        resizeDirections: {
            type: import("vue").PropType<("top" | "bottom" | "left" | "right")[]>;
            default: undefined;
        };
        hideTrigger: {
            type: BooleanConstructor;
        };
    }, {
        componentTag: import("vue").ComputedRef<"div" | "ResizeBox">;
        prefixCls: string;
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | undefined;
        })[]>;
        triggerClassNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        localCollapsed: import("vue").ComputedRef<boolean>;
        siderWidth: import("vue").ComputedRef<string>;
        showTrigger: import("vue").ComputedRef<boolean>;
        toggleTrigger: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "update:collapsed" | "breakpoint")[], "collapse" | "update:collapsed" | "breakpoint", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        theme?: unknown;
        collapsed?: unknown;
        defaultCollapsed?: unknown;
        collapsible?: unknown;
        width?: unknown;
        collapsedWidth?: unknown;
        reverseArrow?: unknown;
        breakpoint?: unknown;
        resizeDirections?: unknown;
        hideTrigger?: unknown;
    } & {
        width: number;
        theme: "dark" | "light";
        defaultCollapsed: boolean;
        collapsible: boolean;
        collapsedWidth: number;
        reverseArrow: boolean;
        hideTrigger: boolean;
    } & {
        collapsed?: boolean | undefined;
        breakpoint?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | undefined;
        resizeDirections?: ("top" | "bottom" | "left" | "right")[] | undefined;
    }> & {
        onCollapse?: ((...args: any[]) => any) | undefined;
        "onUpdate:collapsed"?: ((...args: any[]) => any) | undefined;
        onBreakpoint?: ((...args: any[]) => any) | undefined;
    }, {
        width: number;
        collapsed: boolean;
        theme: "dark" | "light";
        defaultCollapsed: boolean;
        collapsible: boolean;
        collapsedWidth: number;
        reverseArrow: boolean;
        resizeDirections: ("top" | "bottom" | "left" | "right")[];
        hideTrigger: boolean;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type LayoutInstance = InstanceType<typeof _Layout>;
export declare type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export declare type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export declare type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export declare type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;
export type { LayoutProps, SiderProps } from './interface';
export { _LayoutHeader as LayoutHeader, _LayoutContent as LayoutContent, _LayoutFooter as LayoutFooter, _LayoutSider as LayoutSider, };
export default Layout;
