import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _Timeline from './timeline';
import _TimelineItem from './item';
declare const Timeline: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: import("./interface").ModeType;
            reverse: boolean;
            direction: "horizontal" | "vertical";
            labelPosition: import("./interface").LabelPositionType;
        }> & Omit<Readonly<{
            reverse?: unknown;
            direction?: unknown;
            mode?: unknown;
            pending?: unknown;
            labelPosition?: unknown;
        } & {
            mode: import("./interface").ModeType;
            reverse: boolean;
            direction: "horizontal" | "vertical";
            labelPosition: import("./interface").LabelPositionType;
        } & {
            pending?: string | boolean | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "mode" | "reverse" | "direction" | "labelPosition">;
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
            reverse?: unknown;
            direction?: unknown;
            mode?: unknown;
            pending?: unknown;
            labelPosition?: unknown;
        } & {
            mode: import("./interface").ModeType;
            reverse: boolean;
            direction: "horizontal" | "vertical";
            labelPosition: import("./interface").LabelPositionType;
        } & {
            pending?: string | boolean | undefined;
        }>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            mode: import("./interface").ModeType;
            reverse: boolean;
            direction: "horizontal" | "vertical";
            labelPosition: import("./interface").LabelPositionType;
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
        reverse?: unknown;
        direction?: unknown;
        mode?: unknown;
        pending?: unknown;
        labelPosition?: unknown;
    } & {
        mode: import("./interface").ModeType;
        reverse: boolean;
        direction: "horizontal" | "vertical";
        labelPosition: import("./interface").LabelPositionType;
    } & {
        pending?: string | boolean | undefined;
    }> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    reverse?: unknown;
    direction?: unknown;
    mode?: unknown;
    pending?: unknown;
    labelPosition?: unknown;
} & {
    mode: import("./interface").ModeType;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    labelPosition: import("./interface").LabelPositionType;
} & {
    pending?: string | boolean | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    mode: import("./interface").ModeType;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    labelPosition: import("./interface").LabelPositionType;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{
        dotColor: {
            type: StringConstructor;
        };
        dotType: {
            type: import("vue").PropType<import("./interface").DotType>;
            default: string;
        };
        lineType: {
            type: import("vue").PropType<import("./interface").LineType>;
            default: string;
        };
        lineColor: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        position: {
            type: import("vue").PropType<import("./interface").PositionType>;
        };
    }, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean | "horizontal" | "vertical" | import("./interface").LabelPositionType | undefined;
        })[]>;
        dotLineCls: import("vue").ComputedRef<string[]>;
        dotTypeCls: import("vue").ComputedRef<string[]>;
        prefixCls: string;
        computedDotLineStyle: import("vue").ComputedRef<{
            borderColor?: string | undefined;
        }>;
        computedDotStyle: import("vue").ComputedRef<{
            [x: string]: string | undefined;
        }>;
        labelPosition: import("vue").ComputedRef<import("./interface").LabelPositionType>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        dotColor?: unknown;
        dotType?: unknown;
        lineType?: unknown;
        lineColor?: unknown;
        label?: unknown;
        position?: unknown;
    } & {
        dotType: import("./interface").DotType;
        lineType: import("./interface").LineType;
    } & {
        position?: import("./interface").PositionType | undefined;
        label?: string | undefined;
        dotColor?: string | undefined;
        lineColor?: string | undefined;
    }>, {
        dotType: import("./interface").DotType;
        lineType: import("./interface").LineType;
    }>;
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type TimelineInstance = InstanceType<typeof _Timeline>;
export declare type TimelineItemInstance = InstanceType<typeof _TimelineItem>;
export { _TimelineItem as TimelineItem };
export default Timeline;
