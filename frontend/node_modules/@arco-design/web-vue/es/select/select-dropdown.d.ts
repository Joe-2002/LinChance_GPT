import type { PropType } from 'vue';
import type { EmitType } from '../_utils/types';
import { ScrollbarProps } from '../scrollbar';
declare const _default: import("vue").DefineComponent<{
    loading: BooleanConstructor;
    empty: BooleanConstructor;
    virtualList: BooleanConstructor;
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
    onScroll: {
        type: PropType<EmitType<(ev: Event) => void>>;
    };
    onReachBottom: {
        type: PropType<EmitType<(ev: Event) => void>>;
    };
    showHeaderOnEmpty: {
        type: PropType<boolean>;
        default: boolean;
    };
    showFooterOnEmpty: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    prefixCls: string;
    SelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    wrapperRef: import("vue").Ref<any>;
    wrapperComRef: import("vue").Ref<import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | HTMLElement | undefined>;
    handleScroll: (e: Event) => void;
    displayScrollbar: import("vue").ComputedRef<boolean>;
    scrollbarProps: import("vue").ComputedRef<ScrollbarProps | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "reachBottom")[], "scroll" | "reachBottom", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loading?: unknown;
    empty?: unknown;
    virtualList?: unknown;
    bottomOffset?: unknown;
    scrollbar?: unknown;
    onScroll?: unknown;
    onReachBottom?: unknown;
    showHeaderOnEmpty?: unknown;
    showFooterOnEmpty?: unknown;
} & {
    scrollbar: boolean | ScrollbarProps;
    loading: boolean;
    empty: boolean;
    bottomOffset: number;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    virtualList: boolean;
} & {
    onScroll?: EmitType<(ev: Event) => void> | undefined;
    onReachBottom?: EmitType<(ev: Event) => void> | undefined;
}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    onReachBottom?: ((...args: any[]) => any) | undefined;
}, {
    scrollbar: boolean | ScrollbarProps;
    loading: boolean;
    empty: boolean;
    bottomOffset: number;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    virtualList: boolean;
}>;
export default _default;
