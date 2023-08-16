import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import _List from './list';
import _ListItem from './list-item';
import _ListItemMeta from './list-item-meta';
declare const List: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "medium" | "large" | "small";
            scrollbar: boolean | import("..").ScrollbarProps;
            loading: boolean;
            bordered: boolean;
            maxHeight: string | number;
            split: boolean;
            hoverable: boolean;
            bottomOffset: number;
        }> & Omit<Readonly<{
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
            scrollbar: boolean | import("..").ScrollbarProps;
            loading: boolean;
            bordered: boolean;
            maxHeight: string | number;
            split: boolean;
            hoverable: boolean;
            bottomOffset: number;
        } & {
            data?: any[] | undefined;
            paginationProps?: import("..").PaginationProps | undefined;
            gridProps?: Record<string, any> | undefined;
            virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
        }> & {
            onScroll?: (() => any) | undefined;
            onReachBottom?: (() => any) | undefined;
            onPageChange?: ((page: number) => any) | undefined;
            onPageSizeChange?: ((pageSize: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "scrollbar" | "loading" | "bordered" | "maxHeight" | "split" | "hoverable" | "bottomOffset">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "scroll") => void) & ((event: "reachBottom") => void) & ((event: "pageChange", page: number) => void) & ((event: "pageSizeChange", pageSize: number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
            scrollbar: boolean | import("..").ScrollbarProps;
            loading: boolean;
            bordered: boolean;
            maxHeight: string | number;
            split: boolean;
            hoverable: boolean;
            bottomOffset: number;
        } & {
            data?: any[] | undefined;
            paginationProps?: import("..").PaginationProps | undefined;
            gridProps?: Record<string, any> | undefined;
            virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
        }> & {
            onScroll?: (() => any) | undefined;
            onReachBottom?: (() => any) | undefined;
            onPageChange?: ((page: number) => any) | undefined;
            onPageSizeChange?: ((pageSize: number) => any) | undefined;
        }, {
            virtualListRef: import("vue").Ref<any>;
            render: () => JSX.Element;
        }, unknown, {}, {
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: () => true;
            reachBottom: () => true;
            pageChange: (page: number) => true;
            pageSizeChange: (pageSize: number) => true;
        }, string, {
            size: "medium" | "large" | "small";
            scrollbar: boolean | import("..").ScrollbarProps;
            loading: boolean;
            bordered: boolean;
            maxHeight: string | number;
            split: boolean;
            hoverable: boolean;
            bottomOffset: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
        scrollbar: boolean | import("..").ScrollbarProps;
        loading: boolean;
        bordered: boolean;
        maxHeight: string | number;
        split: boolean;
        hoverable: boolean;
        bottomOffset: number;
    } & {
        data?: any[] | undefined;
        paginationProps?: import("..").PaginationProps | undefined;
        gridProps?: Record<string, any> | undefined;
        virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
    }> & {
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        virtualListRef: import("vue").Ref<any>;
        render: () => JSX.Element;
    }> & {} & {} & {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    scrollbar: boolean | import("..").ScrollbarProps;
    loading: boolean;
    bordered: boolean;
    maxHeight: string | number;
    split: boolean;
    hoverable: boolean;
    bottomOffset: number;
} & {
    data?: any[] | undefined;
    paginationProps?: import("..").PaginationProps | undefined;
    gridProps?: Record<string, any> | undefined;
    virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
}> & {
    onScroll?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}, {
    virtualListRef: import("vue").Ref<any>;
    render: () => JSX.Element;
}, unknown, {}, {
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: () => true;
    reachBottom: () => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, {
    size: "medium" | "large" | "small";
    scrollbar: boolean | import("..").ScrollbarProps;
    loading: boolean;
    bordered: boolean;
    maxHeight: string | number;
    split: boolean;
    hoverable: boolean;
    bottomOffset: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                actionLayout: "horizontal" | "vertical";
            }> & Omit<Readonly<{
                actionLayout?: unknown;
            } & {
                actionLayout: "horizontal" | "vertical";
            } & {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "actionLayout">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<{
                actionLayout?: unknown;
            } & {
                actionLayout: "horizontal" | "vertical";
            } & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                actionLayout: "horizontal" | "vertical";
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            actionLayout?: unknown;
        } & {
            actionLayout: "horizontal" | "vertical";
        } & {}> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        actionLayout?: unknown;
    } & {
        actionLayout: "horizontal" | "vertical";
    } & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        actionLayout: "horizontal" | "vertical";
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Meta: import("vue").DefineComponent<{
            title: StringConstructor;
            description: StringConstructor;
        }, {
            prefixCls: string;
            hasContent: boolean;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            title?: unknown;
            description?: unknown;
        } & {} & {
            title?: string | undefined;
            description?: string | undefined;
        }>, {}>;
    };
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type ListInstance = InstanceType<typeof _List>;
export declare type ListItemInstance = InstanceType<typeof _ListItem>;
export declare type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>;
export { _ListItem as ListItem, _ListItemMeta as ListItemMeta };
export default List;
