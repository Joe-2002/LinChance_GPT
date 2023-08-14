import { PropType } from 'vue';
export declare type DirectionType = 'left' | 'right' | 'top' | 'bottom';
declare function isHorizontal(direction: DirectionType): boolean;
declare const _default: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    component: {
        type: StringConstructor;
        default: string;
    };
    directions: {
        type: PropType<("top" | "bottom" | "left" | "right")[]>;
        default: () => string[];
    };
}, {
    prefixCls: string;
    classNames: import("vue").ComputedRef<string[]>;
    styles: import("vue").ComputedRef<{
        "padding-left"?: string | undefined;
        "padding-right"?: string | undefined;
        "padding-top"?: string | undefined;
        "padding-bottom"?: string | undefined;
        height?: string | undefined;
        width?: string | undefined;
    }>;
    wrapperRef: import("vue").Ref<HTMLDivElement | undefined>;
    onMoveStart: (direction: DirectionType, e: MouseEvent) => void;
    isHorizontal: typeof isHorizontal;
    allowDirections: import("vue").ComputedRef<("top" | "bottom" | "left" | "right")[]>;
    onTiggerResize: (direction: DirectionType, entry: ResizeObserverEntry) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:width': (width: number) => true;
    'update:height': (height: number) => true;
    movingStart: (ev: MouseEvent) => true;
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => true;
    movingEnd: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    width?: unknown;
    height?: unknown;
    component?: unknown;
    directions?: unknown;
} & {
    component: string;
    directions: ("top" | "bottom" | "left" | "right")[];
} & {
    height?: number | undefined;
    width?: number | undefined;
}> & {
    "onUpdate:width"?: ((width: number) => any) | undefined;
    "onUpdate:height"?: ((height: number) => any) | undefined;
    onMovingStart?: ((ev: MouseEvent) => any) | undefined;
    onMoving?: ((size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any) | undefined;
    onMovingEnd?: ((ev: MouseEvent) => any) | undefined;
}, {
    component: string;
    directions: ("top" | "bottom" | "left" | "right")[];
}>;
export default _default;
