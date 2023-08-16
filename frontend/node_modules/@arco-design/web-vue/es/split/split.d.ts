import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    component: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
    onMoveStart: (e: MouseEvent) => Promise<void>;
    onTriggerResize: (entry: ResizeObserverEntry) => void;
    firstPaneStyles: import("vue").ComputedRef<{
        flex: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    moveStart: (ev: MouseEvent) => true;
    moving: (ev: MouseEvent) => true;
    moveEnd: (ev: MouseEvent) => true;
    'update:size': (size: number | string) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    direction?: unknown;
    size?: unknown;
    defaultSize?: unknown;
    min?: unknown;
    max?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    direction: "horizontal" | "vertical";
    component: string;
    defaultSize: string | number;
} & {
    size?: string | number | undefined;
    min?: string | number | undefined;
    max?: string | number | undefined;
}> & {
    onMoving?: ((ev: MouseEvent) => any) | undefined;
    onMoveStart?: ((ev: MouseEvent) => any) | undefined;
    onMoveEnd?: ((ev: MouseEvent) => any) | undefined;
    "onUpdate:size"?: ((size: string | number) => any) | undefined;
}, {
    disabled: boolean;
    size: string | number;
    direction: "horizontal" | "vertical";
    component: string;
    defaultSize: string | number;
}>;
export default _default;
