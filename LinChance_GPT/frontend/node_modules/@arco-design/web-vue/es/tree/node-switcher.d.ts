import { PropType, VNode } from 'vue';
import { TreeNodeData } from './interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    loading: BooleanConstructor;
    showLine: BooleanConstructor;
    treeNodeData: {
        type: PropType<TreeNodeData>;
    };
    icons: {
        type: PropType<Record<string, (() => VNode) | undefined>>;
    };
    nodeStatus: {
        type: PropType<{
            loading?: boolean | undefined;
            checked?: boolean | undefined;
            selected?: boolean | undefined;
            expanded?: boolean | undefined;
            indeterminate?: boolean | undefined;
            isLeaf?: boolean | undefined;
        }>;
    };
}, {
    getSwitcherIcon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined;
    getLoadingIcon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined;
    onClick(e: Event): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    loading?: unknown;
    showLine?: unknown;
    treeNodeData?: unknown;
    icons?: unknown;
    nodeStatus?: unknown;
} & {
    loading: boolean;
    showLine: boolean;
} & {
    prefixCls?: string | undefined;
    icons?: Record<string, (() => VNode) | undefined> | undefined;
    treeNodeData?: TreeNodeData | undefined;
    nodeStatus?: {
        loading?: boolean | undefined;
        checked?: boolean | undefined;
        selected?: boolean | undefined;
        expanded?: boolean | undefined;
        indeterminate?: boolean | undefined;
        isLeaf?: boolean | undefined;
    } | undefined;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    showLine: boolean;
}>;
export default _default;
