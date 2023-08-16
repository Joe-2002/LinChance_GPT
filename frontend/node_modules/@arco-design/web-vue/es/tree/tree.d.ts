import { PropType } from 'vue';
import type { TreeFieldNames, TreeNodeData, FilterTreeNode, DropPosition, TreeNodeKey, CheckedStrategy, Node } from './interface';
import type { VirtualListProps, ScrollIntoViewOptions } from '../_components/virtual-list-v2/interface';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
        default: string;
    };
    blockNode: {
        type: BooleanConstructor;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
    };
    checkable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    selectable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
    };
    checkedStrategy: {
        type: PropType<"all" | "child" | "parent">;
        default: string;
    };
    defaultSelectedKeys: {
        type: PropType<(string | number)[]>;
    };
    selectedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultCheckedKeys: {
        type: PropType<(string | number)[]>;
    };
    checkedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultExpandedKeys: {
        type: PropType<(string | number)[]>;
    };
    expandedKeys: {
        type: PropType<(string | number)[]>;
    };
    data: {
        type: PropType<TreeNodeData[]>;
        default: () => never[];
    };
    fieldNames: {
        type: PropType<TreeFieldNames>;
    };
    showLine: {
        type: BooleanConstructor;
    };
    loadMore: {
        type: PropType<(node: TreeNodeData) => Promise<void>>;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
    };
    filterTreeNode: {
        type: PropType<FilterTreeNode>;
    };
    searchValue: {
        type: StringConstructor;
        default: string;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    defaultExpandSelected: {
        type: BooleanConstructor;
    };
    defaultExpandChecked: {
        type: BooleanConstructor;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    halfCheckedKeys: {
        type: PropType<(string | number)[]>;
    };
    onlyCheckLeaf: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    actionOnNodeClick: {
        type: PropType<"expand">;
    };
    disableSelectActionOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
    })[]>;
    visibleTreeNodeList: import("vue").ComputedRef<Node[]>;
    treeContext: {
        treeProps: {
            readonly size: "mini" | "medium" | "large" | "small";
            readonly multiple: boolean;
            readonly data: {
                key?: string | number | undefined;
                title?: string | undefined;
                selectable?: boolean | undefined;
                disabled?: boolean | undefined;
                disableCheckbox?: boolean | undefined;
                checkable?: boolean | undefined;
                draggable?: boolean | undefined;
                isLeaf?: boolean | undefined;
                icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                children?: any[] | undefined;
            }[];
            readonly onDrop: ((data: {
                e: DragEvent;
                dragNode: TreeNodeData;
                dropNode: TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                selected?: boolean | undefined;
                selectedNodes: TreeNodeData[];
                node?: TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            readonly fieldNames: {
                key?: string | undefined;
                title?: string | undefined;
                disabled?: string | undefined;
                children?: string | undefined;
                isLeaf?: string | undefined;
                disableCheckbox?: string | undefined;
                checkable?: string | undefined;
                icon?: string | undefined;
            } | undefined;
            readonly animation: boolean;
            readonly virtualListProps: {
                height?: string | number | undefined;
                threshold?: number | undefined;
                isStaticItemHeight?: boolean | undefined;
                fixedSize?: boolean | undefined;
                estimatedSize?: number | undefined;
                buffer?: number | undefined;
                data?: unknown[] | undefined;
                itemKey?: string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey) | undefined;
                component?: keyof HTMLElementTagNameMap | undefined;
            } | undefined;
            readonly onExpand: ((expandKeys: (string | number)[], data: {
                expanded?: boolean | undefined;
                expandedNodes: TreeNodeData[];
                node?: TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
            readonly loadMore: ((node: TreeNodeData) => Promise<void>) | undefined;
            readonly draggable: boolean;
            readonly selectedKeys: (string | number)[] | undefined;
            readonly defaultSelectedKeys: (string | number)[] | undefined;
            readonly expandedKeys: (string | number)[] | undefined;
            readonly defaultExpandedKeys: (string | number)[] | undefined;
            readonly checkStrictly: boolean;
            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                checked?: boolean | undefined;
                checkedNodes: TreeNodeData[];
                node?: TreeNodeData | undefined;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: TreeNodeData[];
                e?: Event | undefined;
            }) => any) | undefined;
            readonly checkable: boolean | ((node: TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly showLine: boolean;
            readonly selectable: boolean | ((node: TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly blockNode: boolean;
            readonly checkedKeys: (string | number)[] | undefined;
            readonly filterTreeNode: FilterTreeNode | undefined;
            readonly onDragStart: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragEnd: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragOver: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragLeave: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly allowDrop: ((options: {
                dropNode: TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean) | undefined;
            readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
            readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            readonly defaultExpandAll: boolean;
            readonly checkedStrategy: "all" | "child" | "parent";
            readonly defaultCheckedKeys: (string | number)[] | undefined;
            readonly searchValue: string;
            readonly defaultExpandSelected: boolean;
            readonly defaultExpandChecked: boolean;
            readonly autoExpandParent: boolean;
            readonly halfCheckedKeys: (string | number)[] | undefined;
            readonly onlyCheckLeaf: boolean;
            readonly actionOnNodeClick: "expand" | undefined;
            readonly disableSelectActionOnly: boolean;
        };
        switcherIcon: import("vue").Slot | undefined;
        loadingIcon: import("vue").Slot | undefined;
        dragIcon: import("vue").Slot | undefined;
        nodeIcon: import("vue").Slot | undefined;
        nodeTitle: import("vue").Slot | undefined;
        nodeExtra: import("vue").Slot | undefined;
        treeData: {
            key: TreeNodeKey;
            treeNodeProps: {
                selectable: boolean;
                disabled: boolean;
                disableCheckbox: boolean;
                checkable: boolean;
                draggable: boolean;
                isLeaf: boolean;
                isTail: boolean;
                blockNode: boolean;
                showLine: boolean;
                level: number;
                lineless: boolean[];
                icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                key?: string | number | undefined;
                title?: string | undefined;
                switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
            };
            treeNodeData: {
                key?: string | number | undefined;
                title?: string | undefined;
                selectable?: boolean | undefined;
                disabled?: boolean | undefined;
                disableCheckbox?: boolean | undefined;
                checkable?: boolean | undefined;
                draggable?: boolean | undefined;
                isLeaf?: boolean | undefined;
                icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>) | undefined;
                children?: any[] | undefined;
            };
            parent?: any | undefined;
            parentKey?: TreeNodeKey | undefined;
            pathParentKeys: TreeNodeKey[];
            children?: any[] | undefined;
            selectable: boolean;
            disabled: boolean;
            disableCheckbox: boolean;
            checkable: boolean;
            draggable: boolean;
            isLeaf: boolean;
            isTail: boolean;
            blockNode: boolean;
            showLine: boolean;
            level: number;
            lineless: boolean[];
            icon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            title?: string | undefined;
            switcherIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            loadingIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
            dragIcon?: (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) | undefined;
        }[];
        flattenTreeData: Node[];
        key2TreeNode: import("./interface").Key2TreeNode;
        checkedKeys: TreeNodeKey[];
        indeterminateKeys: TreeNodeKey[];
        selectedKeys: TreeNodeKey[];
        expandedKeys: TreeNodeKey[];
        loadingKeys: TreeNodeKey[];
        currentExpandKeys: TreeNodeKey[];
        onLoadMore: ((key: TreeNodeKey) => Promise<void>) | undefined;
        filterTreeNode: FilterTreeNode | undefined;
        onCheck: (checked: boolean, key: TreeNodeKey, e?: Event | undefined) => void;
        onSelect: (key: TreeNodeKey, e: Event) => void;
        onExpand: (expanded: boolean, key: TreeNodeKey, e?: Event | undefined) => void;
        onExpandEnd: (key: TreeNodeKey) => void;
        allowDrop: (key: TreeNodeKey, dropPosition: DropPosition) => boolean;
        onDragStart: (key: TreeNodeKey, e: DragEvent) => void;
        onDragEnd: (key: TreeNodeKey, e: DragEvent) => void;
        onDragOver: (key: TreeNodeKey, e: DragEvent) => void;
        onDragLeave: (key: TreeNodeKey, e: DragEvent) => void;
        onDrop: (key: TreeNodeKey, dropPosition: number, e: DragEvent) => void;
    };
    virtualListRef: import("vue").Ref<any>;
    computedSelectedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedExpandedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedCheckedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedIndeterminateKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    getPublicCheckedKeys: (rawCheckedKeys: TreeNodeKey[], rawCheckedStrategy?: "all" | "child" | "parent") => TreeNodeKey[];
    getNodes: (keys: TreeNodeKey[]) => (TreeNodeData | undefined)[];
    internalCheckNodes: (keys: TreeNodeKey[], checked: boolean, targetKey?: TreeNodeKey | undefined) => void;
    internalSetCheckedKeys: (keys: TreeNodeKey[]) => void;
    internalSelectNodes: (keys: TreeNodeKey[], selected: boolean, targetKey?: TreeNodeKey | undefined) => void;
    internalSetSelectedKeys: (keys: TreeNodeKey[]) => void;
    internalExpandNodes: (keys: TreeNodeKey[], expanded: boolean, targetKey?: TreeNodeKey | undefined) => void;
    internalSetExpandedKeys: (keys: TreeNodeKey[]) => void;
}, unknown, {}, {
    toggleCheck(key: TreeNodeKey, e: Event): void;
    scrollIntoView(options: ScrollIntoViewOptions): void;
    getSelectedNodes(): (TreeNodeData | undefined)[];
    getCheckedNodes(options?: {
        checkedStrategy?: CheckedStrategy;
        includeHalfChecked?: boolean;
    }): (TreeNodeData | undefined)[];
    getHalfCheckedNodes(): (TreeNodeData | undefined)[];
    getExpandedNodes(): (TreeNodeData | undefined)[];
    checkAll(checked?: boolean): void;
    checkNode(key: TreeNodeKey | TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
    selectAll(selected?: boolean): void;
    selectNode(key: TreeNodeKey | TreeNodeKey[], selected?: boolean): void;
    expandAll(expanded?: boolean): void;
    expandNode(key: TreeNodeKey | TreeNodeKey[], expanded?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => true;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event;
    }) => true;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => true;
    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
    dragStart: (ev: DragEvent, node: TreeNodeData) => true;
    dragEnd: (ev: DragEvent, node: TreeNodeData) => true;
    dragOver: (ev: DragEvent, node: TreeNodeData) => true;
    dragLeave: (ev: DragEvent, node: TreeNodeData) => true;
    drop: (data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    blockNode?: unknown;
    defaultExpandAll?: unknown;
    multiple?: unknown;
    checkable?: unknown;
    selectable?: unknown;
    checkStrictly?: unknown;
    checkedStrategy?: unknown;
    defaultSelectedKeys?: unknown;
    selectedKeys?: unknown;
    defaultCheckedKeys?: unknown;
    checkedKeys?: unknown;
    defaultExpandedKeys?: unknown;
    expandedKeys?: unknown;
    data?: unknown;
    fieldNames?: unknown;
    showLine?: unknown;
    loadMore?: unknown;
    draggable?: unknown;
    allowDrop?: unknown;
    filterTreeNode?: unknown;
    searchValue?: unknown;
    virtualListProps?: unknown;
    defaultExpandSelected?: unknown;
    defaultExpandChecked?: unknown;
    autoExpandParent?: unknown;
    halfCheckedKeys?: unknown;
    onlyCheckLeaf?: unknown;
    animation?: unknown;
    actionOnNodeClick?: unknown;
    disableSelectActionOnly?: unknown;
} & {
    size: "mini" | "medium" | "large" | "small";
    multiple: boolean;
    data: TreeNodeData[];
    animation: boolean;
    draggable: boolean;
    checkStrictly: boolean;
    checkable: boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    showLine: boolean;
    selectable: boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    blockNode: boolean;
    defaultExpandAll: boolean;
    checkedStrategy: "all" | "child" | "parent";
    searchValue: string;
    defaultExpandSelected: boolean;
    defaultExpandChecked: boolean;
    autoExpandParent: boolean;
    onlyCheckLeaf: boolean;
    disableSelectActionOnly: boolean;
} & {
    fieldNames?: TreeFieldNames | undefined;
    virtualListProps?: VirtualListProps | undefined;
    loadMore?: ((node: TreeNodeData) => Promise<void>) | undefined;
    selectedKeys?: (string | number)[] | undefined;
    defaultSelectedKeys?: (string | number)[] | undefined;
    expandedKeys?: (string | number)[] | undefined;
    defaultExpandedKeys?: (string | number)[] | undefined;
    checkedKeys?: (string | number)[] | undefined;
    filterTreeNode?: FilterTreeNode | undefined;
    allowDrop?: ((options: {
        dropNode: TreeNodeData;
        dropPosition: -1 | 0 | 1;
    }) => boolean) | undefined;
    defaultCheckedKeys?: (string | number)[] | undefined;
    halfCheckedKeys?: (string | number)[] | undefined;
    actionOnNodeClick?: "expand" | undefined;
}> & {
    onDrop?: ((data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event | undefined;
    }) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
}, {
    size: "mini" | "medium" | "large" | "small";
    multiple: boolean;
    data: TreeNodeData[];
    animation: boolean;
    draggable: boolean;
    checkStrictly: boolean;
    checkable: boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    showLine: boolean;
    selectable: boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    blockNode: boolean;
    defaultExpandAll: boolean;
    checkedStrategy: "all" | "child" | "parent";
    searchValue: string;
    defaultExpandSelected: boolean;
    defaultExpandChecked: boolean;
    autoExpandParent: boolean;
    onlyCheckLeaf: boolean;
    disableSelectActionOnly: boolean;
}>;
export default _default;
