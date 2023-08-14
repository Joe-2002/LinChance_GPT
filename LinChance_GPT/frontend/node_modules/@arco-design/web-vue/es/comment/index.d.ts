import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Comment from './comment';
declare const Comment: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            align: string | Record<string, any>;
        }> & Omit<Readonly<{
            author?: unknown;
            avatar?: unknown;
            content?: unknown;
            datetime?: unknown;
            align?: unknown;
        } & {
            align: string | Record<string, any>;
        } & {
            content?: string | undefined;
            author?: string | undefined;
            avatar?: string | undefined;
            datetime?: string | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "align">;
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
            author?: unknown;
            avatar?: unknown;
            content?: unknown;
            datetime?: unknown;
            align?: unknown;
        } & {
            align: string | Record<string, any>;
        } & {
            content?: string | undefined;
            author?: string | undefined;
            avatar?: string | undefined;
            datetime?: string | undefined;
        }>, {
            prefixCls: string;
            hasAuthor: import("vue").ComputedRef<boolean>;
            hasAvatar: import("vue").ComputedRef<boolean>;
            hasContent: import("vue").ComputedRef<boolean>;
            hasDatetime: import("vue").ComputedRef<boolean>;
            computedAlign: import("vue").ComputedRef<{
                [x: string]: any;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            align: string | Record<string, any>;
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
        author?: unknown;
        avatar?: unknown;
        content?: unknown;
        datetime?: unknown;
        align?: unknown;
    } & {
        align: string | Record<string, any>;
    } & {
        content?: string | undefined;
        author?: string | undefined;
        avatar?: string | undefined;
        datetime?: string | undefined;
    }> & import("vue").ShallowUnwrapRef<{
        prefixCls: string;
        hasAuthor: import("vue").ComputedRef<boolean>;
        hasAvatar: import("vue").ComputedRef<boolean>;
        hasContent: import("vue").ComputedRef<boolean>;
        hasDatetime: import("vue").ComputedRef<boolean>;
        computedAlign: import("vue").ComputedRef<{
            [x: string]: any;
        }>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    author?: unknown;
    avatar?: unknown;
    content?: unknown;
    datetime?: unknown;
    align?: unknown;
} & {
    align: string | Record<string, any>;
} & {
    content?: string | undefined;
    author?: string | undefined;
    avatar?: string | undefined;
    datetime?: string | undefined;
}>, {
    prefixCls: string;
    hasAuthor: import("vue").ComputedRef<boolean>;
    hasAvatar: import("vue").ComputedRef<boolean>;
    hasContent: import("vue").ComputedRef<boolean>;
    hasDatetime: import("vue").ComputedRef<boolean>;
    computedAlign: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    align: string | Record<string, any>;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type CommentInstance = InstanceType<typeof _Comment>;
export default Comment;
