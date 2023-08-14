import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Steps from './steps';
import _StepsStep from './step';
declare const Steps: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            small: boolean;
            type: "default" | "dot" | "arrow" | "navigation";
            direction: "horizontal" | "vertical";
            lineLess: boolean;
            status: "wait" | "error" | "finish" | "process";
            current: number;
            defaultCurrent: number;
            labelPlacement: "horizontal" | "vertical";
            changeable: boolean;
        }> & Omit<Readonly<{
            type?: unknown;
            direction?: unknown;
            labelPlacement?: unknown;
            current?: unknown;
            defaultCurrent?: unknown;
            status?: unknown;
            lineLess?: unknown;
            small?: unknown;
            changeable?: unknown;
        } & {
            small: boolean;
            type: "default" | "dot" | "arrow" | "navigation";
            direction: "horizontal" | "vertical";
            lineLess: boolean;
            status: "wait" | "error" | "finish" | "process";
            defaultCurrent: number;
            labelPlacement: "horizontal" | "vertical";
            changeable: boolean;
        } & {
            current?: number | undefined;
        }> & {
            onChange?: ((step: number, ev: Event) => any) | undefined;
            "onUpdate:current"?: ((step: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "small" | "type" | "direction" | "lineLess" | "status" | "current" | "defaultCurrent" | "labelPlacement" | "changeable">;
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
        $emit: ((event: "change", step: number, ev: Event) => void) & ((event: "update:current", step: number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            direction?: unknown;
            labelPlacement?: unknown;
            current?: unknown;
            defaultCurrent?: unknown;
            status?: unknown;
            lineLess?: unknown;
            small?: unknown;
            changeable?: unknown;
        } & {
            small: boolean;
            type: "default" | "dot" | "arrow" | "navigation";
            direction: "horizontal" | "vertical";
            lineLess: boolean;
            status: "wait" | "error" | "finish" | "process";
            defaultCurrent: number;
            labelPlacement: "horizontal" | "vertical";
            changeable: boolean;
        } & {
            current?: number | undefined;
        }> & {
            onChange?: ((step: number, ev: Event) => any) | undefined;
            "onUpdate:current"?: ((step: number) => any) | undefined;
        }, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:current': (step: number) => true;
            change: (step: number, ev: Event) => true;
        }, string, {
            small: boolean;
            type: "default" | "dot" | "arrow" | "navigation";
            direction: "horizontal" | "vertical";
            lineLess: boolean;
            status: "wait" | "error" | "finish" | "process";
            current: number;
            defaultCurrent: number;
            labelPlacement: "horizontal" | "vertical";
            changeable: boolean;
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
        direction?: unknown;
        labelPlacement?: unknown;
        current?: unknown;
        defaultCurrent?: unknown;
        status?: unknown;
        lineLess?: unknown;
        small?: unknown;
        changeable?: unknown;
    } & {
        small: boolean;
        type: "default" | "dot" | "arrow" | "navigation";
        direction: "horizontal" | "vertical";
        lineLess: boolean;
        status: "wait" | "error" | "finish" | "process";
        defaultCurrent: number;
        labelPlacement: "horizontal" | "vertical";
        changeable: boolean;
    } & {
        current?: number | undefined;
    }> & {
        onChange?: ((step: number, ev: Event) => any) | undefined;
        "onUpdate:current"?: ((step: number) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    direction?: unknown;
    labelPlacement?: unknown;
    current?: unknown;
    defaultCurrent?: unknown;
    status?: unknown;
    lineLess?: unknown;
    small?: unknown;
    changeable?: unknown;
} & {
    small: boolean;
    type: "default" | "dot" | "arrow" | "navigation";
    direction: "horizontal" | "vertical";
    lineLess: boolean;
    status: "wait" | "error" | "finish" | "process";
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
} & {
    current?: number | undefined;
}> & {
    onChange?: ((step: number, ev: Event) => any) | undefined;
    "onUpdate:current"?: ((step: number) => any) | undefined;
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (step: number) => true;
    change: (step: number, ev: Event) => true;
}, string, {
    small: boolean;
    type: "default" | "dot" | "arrow" | "navigation";
    direction: "horizontal" | "vertical";
    lineLess: boolean;
    status: "wait" | "error" | "finish" | "process";
    current: number;
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Step: import("vue").DefineComponent<{
        title: StringConstructor;
        description: StringConstructor;
        status: {
            type: import("vue").PropType<"wait" | "error" | "finish" | "process">;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        prefixCls: string;
        iconCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        itemRef: import("vue").Ref<HTMLElement | undefined>;
        showTail: import("vue").ComputedRef<boolean>;
        stepNumber: import("vue").ComputedRef<number>;
        computedStatus: import("vue").ComputedRef<"wait" | "error" | "finish" | "process">;
        type: import("vue").ComputedRef<"default" | "dot" | "arrow" | "navigation">;
        handleClick: (ev: Event) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title?: unknown;
        description?: unknown;
        status?: unknown;
        disabled?: unknown;
    } & {
        disabled: boolean;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        status?: "wait" | "error" | "finish" | "process" | undefined;
    }>, {
        disabled: boolean;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type StepsInstance = InstanceType<typeof _Steps>;
export declare type StepsStepInstance = InstanceType<typeof _StepsStep>;
export { _StepsStep as Step };
export default Steps;
