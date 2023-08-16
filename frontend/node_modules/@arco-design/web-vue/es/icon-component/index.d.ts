import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Icon from './icon';
declare const Icon: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            spin: boolean;
        }> & Omit<Readonly<{
            type?: unknown;
            size?: unknown;
            rotate?: unknown;
            spin?: unknown;
        } & {
            spin: boolean;
        } & {
            size?: string | number | undefined;
            type?: string | undefined;
            rotate?: number | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "spin">;
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
            type?: unknown;
            size?: unknown;
            rotate?: unknown;
            spin?: unknown;
        } & {
            spin: boolean;
        } & {
            size?: string | number | undefined;
            type?: string | undefined;
            rotate?: number | undefined;
        }>, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            } | undefined)[]>;
            innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            spin: boolean;
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
        size?: unknown;
        rotate?: unknown;
        spin?: unknown;
    } & {
        spin: boolean;
    } & {
        size?: string | number | undefined;
        type?: string | undefined;
        rotate?: number | undefined;
    }> & import("vue").ShallowUnwrapRef<{
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        } | undefined)[]>;
        innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    size?: unknown;
    rotate?: unknown;
    spin?: unknown;
} & {
    spin: boolean;
} & {
    size?: string | number | undefined;
    type?: string | undefined;
    rotate?: number | undefined;
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    } | undefined)[]>;
    innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    spin: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    addFromIconFontCn: (options: import("./add-from-icon-font-cn").IconFontOptions) => import("vue").DefineComponent<{
        type: StringConstructor;
        size: (StringConstructor | NumberConstructor)[];
        rotate: NumberConstructor;
        spin: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        type?: unknown;
        size?: unknown;
        rotate?: unknown;
        spin?: unknown;
    } & {
        spin: boolean;
    } & {
        size?: string | number | undefined;
        type?: string | undefined;
        rotate?: number | undefined;
    }>, {
        spin: boolean;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type IconInstance = InstanceType<typeof _Icon>;
export declare type IconProps = IconInstance['$props'];
export default Icon;
