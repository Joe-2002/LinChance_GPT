import type { PropType } from 'vue';
import type { CarouselArrowType, CarouselAutoPlayConfig, CarouselIndicatorPosition, CarouselIndicatorType, CarouselTriggerEvent } from './interface';
declare const _default: import("vue").DefineComponent<{
    current: {
        type: NumberConstructor;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    autoPlay: {
        type: PropType<boolean | CarouselAutoPlayConfig>;
        default: boolean;
    };
    moveSpeed: {
        type: NumberConstructor;
        default: number;
    };
    animationName: {
        type: PropType<"slide" | "fade" | "card">;
        default: string;
    };
    trigger: {
        type: PropType<CarouselTriggerEvent>;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    showArrow: {
        type: PropType<CarouselArrowType>;
        default: string;
    };
    arrowClass: {
        type: StringConstructor;
        default: string;
    };
    indicatorType: {
        type: PropType<CarouselIndicatorType>;
        default: string;
    };
    indicatorPosition: {
        type: PropType<CarouselIndicatorPosition>;
        default: string;
    };
    indicatorClass: {
        type: StringConstructor;
        default: string;
    };
    transitionTimingFunction: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (index: number) => true;
    change: (index: number, prevIndex: number, isManual: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    current?: unknown;
    defaultCurrent?: unknown;
    autoPlay?: unknown;
    moveSpeed?: unknown;
    animationName?: unknown;
    trigger?: unknown;
    direction?: unknown;
    showArrow?: unknown;
    arrowClass?: unknown;
    indicatorType?: unknown;
    indicatorPosition?: unknown;
    indicatorClass?: unknown;
    transitionTimingFunction?: unknown;
} & {
    trigger: CarouselTriggerEvent;
    showArrow: CarouselArrowType;
    arrowClass: string;
    animationName: "slide" | "fade" | "card";
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    defaultCurrent: number;
    autoPlay: boolean | CarouselAutoPlayConfig;
    moveSpeed: number;
    indicatorType: CarouselIndicatorType;
    indicatorPosition: CarouselIndicatorPosition;
    indicatorClass: string;
} & {
    current?: number | undefined;
}> & {
    onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
    "onUpdate:current"?: ((index: number) => any) | undefined;
}, {
    trigger: CarouselTriggerEvent;
    showArrow: CarouselArrowType;
    arrowClass: string;
    animationName: "slide" | "fade" | "card";
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    defaultCurrent: number;
    autoPlay: boolean | CarouselAutoPlayConfig;
    moveSpeed: number;
    indicatorType: CarouselIndicatorType;
    indicatorPosition: CarouselIndicatorPosition;
    indicatorClass: string;
}>;
export default _default;
