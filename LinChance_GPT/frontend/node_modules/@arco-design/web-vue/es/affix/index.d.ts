import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Affix from './affix';
declare const Affix: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offsetTop: number;
        }> & Omit<Readonly<{
            offsetTop?: unknown;
            offsetBottom?: unknown;
            target?: unknown;
            targetContainer?: unknown;
        } & {
            offsetTop: number;
        } & {
            offsetBottom?: number | undefined;
            target?: string | Window | HTMLElement | undefined;
            targetContainer?: string | Window | HTMLElement | undefined;
        }> & {
            onChange?: ((fixed: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "offsetTop">;
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
        $emit: (event: "change", fixed: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            offsetTop?: unknown;
            offsetBottom?: unknown;
            target?: unknown;
            targetContainer?: unknown;
        } & {
            offsetTop: number;
        } & {
            offsetBottom?: number | undefined;
            target?: string | Window | HTMLElement | undefined;
            targetContainer?: string | Window | HTMLElement | undefined;
        }> & {
            onChange?: ((fixed: boolean) => any) | undefined;
        }, {
            wrapperRef: import("vue").Ref<HTMLElement | undefined>;
            isFixed: import("vue").Ref<boolean>;
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
            placeholderStyles: import("vue").Ref<import("vue").CSSProperties>;
            fixedStyles: import("vue").Ref<import("vue").CSSProperties>;
            updatePositionThrottle: {
                (...args: any[]): void;
                cancel(): void;
            };
        }, unknown, {}, {
            updatePosition(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (fixed: boolean) => true;
        }, string, {
            offsetTop: number;
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
        offsetTop?: unknown;
        offsetBottom?: unknown;
        target?: unknown;
        targetContainer?: unknown;
    } & {
        offsetTop: number;
    } & {
        offsetBottom?: number | undefined;
        target?: string | Window | HTMLElement | undefined;
        targetContainer?: string | Window | HTMLElement | undefined;
    }> & {
        onChange?: ((fixed: boolean) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        wrapperRef: import("vue").Ref<HTMLElement | undefined>;
        isFixed: import("vue").Ref<boolean>;
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        placeholderStyles: import("vue").Ref<import("vue").CSSProperties>;
        fixedStyles: import("vue").Ref<import("vue").CSSProperties>;
        updatePositionThrottle: {
            (...args: any[]): void;
            cancel(): void;
        };
    }> & {} & {} & {
        updatePosition(): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    offsetTop?: unknown;
    offsetBottom?: unknown;
    target?: unknown;
    targetContainer?: unknown;
} & {
    offsetTop: number;
} & {
    offsetBottom?: number | undefined;
    target?: string | Window | HTMLElement | undefined;
    targetContainer?: string | Window | HTMLElement | undefined;
}> & {
    onChange?: ((fixed: boolean) => any) | undefined;
}, {
    wrapperRef: import("vue").Ref<HTMLElement | undefined>;
    isFixed: import("vue").Ref<boolean>;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    placeholderStyles: import("vue").Ref<import("vue").CSSProperties>;
    fixedStyles: import("vue").Ref<import("vue").CSSProperties>;
    updatePositionThrottle: {
        (...args: any[]): void;
        cancel(): void;
    };
}, unknown, {}, {
    updatePosition(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (fixed: boolean) => true;
}, string, {
    offsetTop: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type AffixInstance = InstanceType<typeof _Affix>;
export default Affix;
