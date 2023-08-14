import { PropType } from 'vue';
import { PaginationProps } from '../pagination';
import type { ScrollIntoViewOptions, VirtualListProps } from '../_components/virtual-list-v2/interface';
import { ScrollbarProps } from '../scrollbar';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<any[]>;
    };
    size: {
        type: PropType<"medium" | "large" | "small">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationProps: {
        type: PropType<PaginationProps>;
    };
    gridProps: {
        type: ObjectConstructor;
    };
    maxHeight: {
        type: PropType<string | number>;
        default: number;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
}, {
    virtualListRef: import("vue").Ref<any>;
    render: () => JSX.Element;
}, unknown, {}, {
    scrollIntoView(options: ScrollIntoViewOptions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: () => true;
    reachBottom: () => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    size?: unknown;
    bordered?: unknown;
    split?: unknown;
    loading?: unknown;
    hoverable?: unknown;
    paginationProps?: unknown;
    gridProps?: unknown;
    maxHeight?: unknown;
    bottomOffset?: unknown;
    virtualListProps?: unknown;
    scrollbar?: unknown;
} & {
    size: "medium" | "large" | "small";
    scrollbar: boolean | ScrollbarProps;
    loading: boolean;
    bordered: boolean;
    maxHeight: string | number;
    split: boolean;
    hoverable: boolean;
    bottomOffset: number;
} & {
    data?: any[] | undefined;
    paginationProps?: PaginationProps | undefined;
    gridProps?: Record<string, any> | undefined;
    virtualListProps?: VirtualListProps | undefined;
}> & {
    onScroll?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}, {
    size: "medium" | "large" | "small";
    scrollbar: boolean | ScrollbarProps;
    loading: boolean;
    bordered: boolean;
    maxHeight: string | number;
    split: boolean;
    hoverable: boolean;
    bottomOffset: number;
}>;
export default _default;
