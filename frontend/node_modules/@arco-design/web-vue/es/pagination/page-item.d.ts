import type { PropType, CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    pageNumber: {
        type: NumberConstructor;
    };
    current: {
        type: NumberConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    style: {
        type: PropType<CSSProperties>;
    };
    activeStyle: {
        type: PropType<CSSProperties>;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    mergedStyle: import("vue").ComputedRef<CSSProperties | undefined>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pageNumber?: unknown;
    current?: unknown;
    disabled?: unknown;
    style?: unknown;
    activeStyle?: unknown;
} & {
    disabled: boolean;
} & {
    style?: CSSProperties | undefined;
    current?: number | undefined;
    pageNumber?: number | undefined;
    activeStyle?: CSSProperties | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
}>;
export default _default;
