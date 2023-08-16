import { PropType, StyleValue } from 'vue';
import { ThumbData } from './interface';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"embed" | "track">;
        default: string;
    };
    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    outerStyle: {
        type: PropType<StyleValue>;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableHorizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | Record<string, any> | undefined)[]>;
    style: import("vue").ComputedRef<(StyleValue | undefined)[]>;
    containerRef: import("vue").Ref<HTMLElement | undefined>;
    horizontalThumbRef: import("vue").Ref<any>;
    verticalThumbRef: import("vue").Ref<any>;
    horizontalData: import("vue").Ref<ThumbData | undefined>;
    verticalData: import("vue").Ref<ThumbData | undefined>;
    isBoth: import("vue").Ref<boolean>;
    hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
    hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
    handleResize: () => void;
    handleScroll: (ev: Event) => void;
    handleHorizontalScroll: (offset: number) => void;
    handleVerticalScroll: (offset: number) => void;
}, unknown, {}, {
    scrollTo(options?: number | {
        left?: number | undefined;
        top?: number | undefined;
    } | undefined, y?: number | undefined): void;
    scrollTop(top: number): void;
    scrollLeft(left: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (ev: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    outerClass?: unknown;
    outerStyle?: unknown;
    hide?: unknown;
    disableHorizontal?: unknown;
    disableVertical?: unknown;
} & {
    hide: boolean;
    type: "embed" | "track";
    disableHorizontal: boolean;
    disableVertical: boolean;
} & {
    outerStyle?: StyleValue | undefined;
    outerClass?: string | unknown[] | Record<string, any> | undefined;
}> & {
    onScroll?: ((ev: Event) => any) | undefined;
}, {
    hide: boolean;
    type: "embed" | "track";
    disableHorizontal: boolean;
    disableVertical: boolean;
}>;
export default _default;
