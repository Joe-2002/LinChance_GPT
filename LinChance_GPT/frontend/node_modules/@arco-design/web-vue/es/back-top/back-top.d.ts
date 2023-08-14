import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visibleHeight: {
        type: PropType<number>;
        default: number;
    };
    targetContainer: {
        type: PropType<string | HTMLElement>;
    };
    easing: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    prefixCls: string;
    visible: import("vue").Ref<boolean>;
    scrollToTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visibleHeight?: unknown;
    targetContainer?: unknown;
    easing?: unknown;
    duration?: unknown;
} & {
    duration: number;
    visibleHeight: number;
    easing: string;
} & {
    targetContainer?: string | HTMLElement | undefined;
}>, {
    duration: number;
    visibleHeight: number;
    easing: string;
}>;
export default _default;
