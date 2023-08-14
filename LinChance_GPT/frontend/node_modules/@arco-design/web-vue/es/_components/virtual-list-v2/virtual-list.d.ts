import { ScrollOptions } from './interface';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    itemKey: {
        type: StringConstructor;
        default: string;
    };
    fixedSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    estimatedSize: {
        type: NumberConstructor;
        default: number;
    };
    buffer: {
        type: NumberConstructor;
        default: number;
    };
    component: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    listAttrs: {
        type: ObjectConstructor;
    };
    contentAttrs: {
        type: ObjectConstructor;
    };
    paddingPosition: {
        type: StringConstructor;
        default: string;
    };
}, {
    prefixCls: string;
    containerRef: import("vue").Ref<HTMLElement | undefined>;
    contentRef: import("vue").Ref<HTMLElement | undefined>;
    frontPadding: import("vue").ComputedRef<number>;
    currentList: import("vue").ComputedRef<unknown[]>;
    behindPadding: import("vue").ComputedRef<number>;
    onScroll: (ev: Event) => void;
    setItemSize: (key: string | number, size: number) => void;
    hasItemSize: (key: string | number) => boolean;
    start: import("vue").Ref<number>;
    scrollTo: (options: ScrollOptions) => void;
    style: import("vue").ComputedRef<{
        height: string;
        overflow: string;
    }>;
    mergedComponent: import("vue").ComputedRef<{
        container: string;
        list: string;
        content: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (ev: Event) => true;
    reachBottom: (ev: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    height?: unknown;
    data?: unknown;
    threshold?: unknown;
    itemKey?: unknown;
    fixedSize?: unknown;
    estimatedSize?: unknown;
    buffer?: unknown;
    component?: unknown;
    listAttrs?: unknown;
    contentAttrs?: unknown;
    paddingPosition?: unknown;
} & {
    data: unknown[];
    fixedSize: boolean;
    estimatedSize: number;
    buffer: number;
    height: string | number;
    threshold: number;
    itemKey: string;
    component: string | Record<string, any>;
    paddingPosition: string;
} & {
    listAttrs?: Record<string, any> | undefined;
    contentAttrs?: Record<string, any> | undefined;
}> & {
    onScroll?: ((ev: Event) => any) | undefined;
    onReachBottom?: ((ev: Event) => any) | undefined;
}, {
    data: unknown[];
    fixedSize: boolean;
    estimatedSize: number;
    buffer: number;
    height: string | number;
    threshold: number;
    itemKey: string;
    component: string | Record<string, any>;
    paddingPosition: string;
}>;
export default _default;
