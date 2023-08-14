import { PropType } from 'vue';
import { ThumbData } from './interface';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ThumbData>;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    alwaysShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    both: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    visible: import("vue").Ref<boolean>;
    trackRef: import("vue").Ref<HTMLElement | undefined>;
    thumbRef: import("vue").Ref<HTMLElement | undefined>;
    prefixCls: string;
    thumbCls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    thumbStyle: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
    handleThumbMouseDown: (ev: MouseEvent) => void;
    handleTrackClick: (ev: MouseEvent) => void;
    setOffset: (_offset: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    direction?: unknown;
    alwaysShow?: unknown;
    both?: unknown;
} & {
    both: boolean;
    direction: "horizontal" | "vertical";
    alwaysShow: boolean;
} & {
    data?: ThumbData | undefined;
}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
}, {
    both: boolean;
    direction: "horizontal" | "vertical";
    alwaysShow: boolean;
}>;
export default _default;
