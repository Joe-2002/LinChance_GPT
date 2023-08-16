import type { PropType } from 'vue';
import type { CarouselIndicatorPosition, CarouselIndicatorType, CarouselTriggerEvent } from './interface';
declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    activeIndex: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<CarouselIndicatorType>;
        default: string;
    };
    position: {
        type: PropType<CarouselIndicatorPosition>;
        default: string;
    };
    trigger: {
        type: PropType<CarouselTriggerEvent>;
        default: string;
    };
}, {
    prefixCls: string;
    eventHandlers: import("vue").ComputedRef<{
        onClick: (event: MouseEvent) => void;
        onMouseover?: undefined;
    } | {
        onMouseover: (event: MouseEvent) => void;
        onClick?: undefined;
    }>;
    cls: import("vue").ComputedRef<string[]>;
    sliderStyle: import("vue").ComputedRef<{
        width: string;
        left: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    count?: unknown;
    activeIndex?: unknown;
    type?: unknown;
    position?: unknown;
    trigger?: unknown;
} & {
    trigger: CarouselTriggerEvent;
    position: CarouselIndicatorPosition;
    type: CarouselIndicatorType;
    count: number;
    activeIndex: number;
} & {}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    trigger: CarouselTriggerEvent;
    position: CarouselIndicatorPosition;
    type: CarouselIndicatorType;
    count: number;
    activeIndex: number;
}>;
export default _default;
