import { CSSProperties, PropType } from 'vue';
import { EmitType } from '../_utils/types';
declare const _default: import("vue").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    onScroll: {
        type: PropType<EmitType<(ev: Event) => void>>;
    };
    onReachBottom: {
        type: PropType<EmitType<(ev: Event) => void>>;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    style: import("vue").ComputedRef<CSSProperties | undefined>;
    wrapperRef: import("vue").Ref<HTMLElement | undefined>;
    handleScroll: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "reachBottom")[], "scroll" | "reachBottom", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loading?: unknown;
    isEmpty?: unknown;
    bottomOffset?: unknown;
    onScroll?: unknown;
    onReachBottom?: unknown;
} & {
    loading: boolean;
    bottomOffset: number;
    isEmpty: boolean;
} & {
    onScroll?: EmitType<(ev: Event) => void> | undefined;
    onReachBottom?: EmitType<(ev: Event) => void> | undefined;
}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    onReachBottom?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    bottomOffset: number;
    isEmpty: boolean;
}>;
export default _default;
