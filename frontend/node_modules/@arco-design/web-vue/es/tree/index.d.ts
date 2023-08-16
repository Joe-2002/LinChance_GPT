import { App } from 'vue';
import { ArcoOptions } from '../_utils/types';
import _Tree from './tree';
export type { TreeNodeData, TreeFieldNames } from './interface';
declare const Tree: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            size: "mini" | "medium" | "large" | "small";
            multiple: boolean;
            data: import("./interface").TreeNodeData[];
            animation: boolean;
            draggable: boolean;
            checkStrictly: boolean;
            checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            showLine: boolean;
            selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
        }> & Omit<Readonly<{
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
            data: import("./interface").TreeNodeData[];
            animation: boolean;
            draggable: boolean;
            checkStrictly: boolean;
            checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            showLine: boolean;
            selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
            fieldNames?: import("./interface").TreeFieldNames | undefined;
            virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
            loadMore?: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
            selectedKeys?: (string | number)[] | undefined;
            defaultSelectedKeys?: (string | number)[] | undefined;
            expandedKeys?: (string | number)[] | undefined;
            defaultExpandedKeys?: (string | number)[] | undefined;
            checkedKeys?: (string | number)[] | undefined;
            filterTreeNode?: import("./interface").FilterTreeNode | undefined;
            allowDrop?: ((options: {
                dropNode: import("./interface").TreeNodeData;
                dropPosition: 0 | 1 | -1;
            }) => boolean) | undefined;
            defaultCheckedKeys?: (string | number)[] | undefined;
            halfCheckedKeys?: (string | number)[] | undefined;
            actionOnNodeClick?: "expand" | undefined;
        }> & {
            onDrop?: ((data: {
                e: DragEvent;
                dragNode: import("./interface").TreeNodeData;
                dropNode: import("./interface").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            onSelect?: ((selectedKeys: (string | number)[], data: {
                selected?: boolean | undefined;
                selectedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            onExpand?: ((expandKeys: (string | number)[], data: {
                expanded?: boolean | undefined;
                expandedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
            onCheck?: ((checkedKeys: (string | number)[], data: {
                checked?: boolean | undefined;
                checkedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./interface").TreeNodeData[];
                e?: Event | undefined;
            }) => any) | undefined;
            onDragStart?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragEnd?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragOver?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragLeave?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "size" | "multiple" | "data" | "animation" | "draggable" | "checkStrictly" | "checkable" | "showLine" | "selectable" | "blockNode" | "defaultExpandAll" | "checkedStrategy" | "searchValue" | "defaultExpandSelected" | "defaultExpandChecked" | "autoExpandParent" | "onlyCheckLeaf" | "disableSelectActionOnly">;
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
        $emit: ((event: "select", selectedKeys: (string | number)[], data: {
            selected?: boolean | undefined;
            selectedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            e?: Event | undefined;
        }) => void) & ((event: "drop", data: {
            e: DragEvent;
            dragNode: import("./interface").TreeNodeData;
            dropNode: import("./interface").TreeNodeData;
            dropPosition: number;
        }) => void) & ((event: "expand", expandKeys: (string | number)[], data: {
            expanded?: boolean | undefined;
            expandedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            e?: Event | undefined;
        }) => void) & ((event: "update:selectedKeys", selectedKeys: (string | number)[]) => void) & ((event: "update:expandedKeys", expandKeys: (string | number)[]) => void) & ((event: "check", checkedKeys: (string | number)[], data: {
            checked?: boolean | undefined;
            checkedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./interface").TreeNodeData[];
            e?: Event | undefined;
        }) => void) & ((event: "dragStart", ev: DragEvent, node: import("./interface").TreeNodeData) => void) & ((event: "dragOver", ev: DragEvent, node: import("./interface").TreeNodeData) => void) & ((event: "dragLeave", ev: DragEvent, node: import("./interface").TreeNodeData) => void) & ((event: "dragEnd", ev: DragEvent, node: import("./interface").TreeNodeData) => void) & ((event: "update:checkedKeys", checkedKeys: (string | number)[]) => void) & ((event: "update:halfCheckedKeys", halfCheckedKeys: (string | number)[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
            data: import("./interface").TreeNodeData[];
            animation: boolean;
            draggable: boolean;
            checkStrictly: boolean;
            checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            showLine: boolean;
            selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
            fieldNames?: import("./interface").TreeFieldNames | undefined;
            virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
            loadMore?: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
            selectedKeys?: (string | number)[] | undefined;
            defaultSelectedKeys?: (string | number)[] | undefined;
            expandedKeys?: (string | number)[] | undefined;
            defaultExpandedKeys?: (string | number)[] | undefined;
            checkedKeys?: (string | number)[] | undefined;
            filterTreeNode?: import("./interface").FilterTreeNode | undefined;
            allowDrop?: ((options: {
                dropNode: import("./interface").TreeNodeData;
                dropPosition: 0 | 1 | -1;
            }) => boolean) | undefined;
            defaultCheckedKeys?: (string | number)[] | undefined;
            halfCheckedKeys?: (string | number)[] | undefined;
            actionOnNodeClick?: "expand" | undefined;
        }> & {
            onDrop?: ((data: {
                e: DragEvent;
                dragNode: import("./interface").TreeNodeData;
                dropNode: import("./interface").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            onSelect?: ((selectedKeys: (string | number)[], data: {
                selected?: boolean | undefined;
                selectedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            onExpand?: ((expandKeys: (string | number)[], data: {
                expanded?: boolean | undefined;
                expandedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
            onCheck?: ((checkedKeys: (string | number)[], data: {
                checked?: boolean | undefined;
                checkedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./interface").TreeNodeData[];
                e?: Event | undefined;
            }) => any) | undefined;
            onDragStart?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragEnd?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragOver?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            onDragLeave?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
        }, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | ((node: import("./interface").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
            })[]>;
            visibleTreeNodeList: import("vue").ComputedRef<import("./interface").Node[]>;
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
                        dragNode: import("./interface").TreeNodeData;
                        dropNode: import("./interface").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    readonly onSelect: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean | undefined;
                        selectedNodes: import("./interface").TreeNodeData[];
                        node?: import("./interface").TreeNodeData | undefined;
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
                        expandedNodes: import("./interface").TreeNodeData[];
                        node?: import("./interface").TreeNodeData | undefined;
                        e?: Event | undefined;
                    }) => any) | undefined;
                    readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                    readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                    readonly loadMore: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
                    readonly draggable: boolean;
                    readonly selectedKeys: (string | number)[] | undefined;
                    readonly defaultSelectedKeys: (string | number)[] | undefined;
                    readonly expandedKeys: (string | number)[] | undefined;
                    readonly defaultExpandedKeys: (string | number)[] | undefined;
                    readonly checkStrictly: boolean;
                    readonly onCheck: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean | undefined;
                        checkedNodes: import("./interface").TreeNodeData[];
                        node?: import("./interface").TreeNodeData | undefined;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("./interface").TreeNodeData[];
                        e?: Event | undefined;
                    }) => any) | undefined;
                    readonly checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly showLine: boolean;
                    readonly selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly blockNode: boolean;
                    readonly checkedKeys: (string | number)[] | undefined;
                    readonly filterTreeNode: import("./interface").FilterTreeNode | undefined;
                    readonly onDragStart: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                    readonly onDragEnd: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                    readonly onDragOver: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                    readonly onDragLeave: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                    readonly allowDrop: ((options: {
                        dropNode: import("./interface").TreeNodeData;
                        dropPosition: 0 | 1 | -1;
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
                    key: import("./interface").TreeNodeKey;
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
                    parentKey?: import("./interface").TreeNodeKey | undefined;
                    pathParentKeys: import("./interface").TreeNodeKey[];
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
                flattenTreeData: import("./interface").Node[];
                key2TreeNode: import("./interface").Key2TreeNode;
                checkedKeys: import("./interface").TreeNodeKey[];
                indeterminateKeys: import("./interface").TreeNodeKey[];
                selectedKeys: import("./interface").TreeNodeKey[];
                expandedKeys: import("./interface").TreeNodeKey[];
                loadingKeys: import("./interface").TreeNodeKey[];
                currentExpandKeys: import("./interface").TreeNodeKey[];
                onLoadMore: ((key: import("./interface").TreeNodeKey) => Promise<void>) | undefined;
                filterTreeNode: import("./interface").FilterTreeNode | undefined;
                onCheck: (checked: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
                onSelect: (key: import("./interface").TreeNodeKey, e: Event) => void;
                onExpand: (expanded: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
                onExpandEnd: (key: import("./interface").TreeNodeKey) => void;
                allowDrop: (key: import("./interface").TreeNodeKey, dropPosition: import("./interface").DropPosition) => boolean;
                onDragStart: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
                onDragEnd: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
                onDragOver: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
                onDragLeave: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
                onDrop: (key: import("./interface").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
            };
            virtualListRef: import("vue").Ref<any>;
            computedSelectedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
            computedExpandedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
            computedCheckedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
            computedIndeterminateKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
            getPublicCheckedKeys: (rawCheckedKeys: import("./interface").TreeNodeKey[], rawCheckedStrategy?: "all" | "child" | "parent") => import("./interface").TreeNodeKey[];
            getNodes: (keys: import("./interface").TreeNodeKey[]) => (import("./interface").TreeNodeData | undefined)[];
            internalCheckNodes: (keys: import("./interface").TreeNodeKey[], checked: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
            internalSetCheckedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
            internalSelectNodes: (keys: import("./interface").TreeNodeKey[], selected: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
            internalSetSelectedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
            internalExpandNodes: (keys: import("./interface").TreeNodeKey[], expanded: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
            internalSetExpandedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
        }, unknown, {}, {
            toggleCheck(key: import("./interface").TreeNodeKey, e: Event): void;
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
            getSelectedNodes(): (import("./interface").TreeNodeData | undefined)[];
            getCheckedNodes(options?: {
                checkedStrategy?: import("./interface").CheckedStrategy | undefined;
                includeHalfChecked?: boolean | undefined;
            }): (import("./interface").TreeNodeData | undefined)[];
            getHalfCheckedNodes(): (import("./interface").TreeNodeData | undefined)[];
            getExpandedNodes(): (import("./interface").TreeNodeData | undefined)[];
            checkAll(checked?: boolean): void;
            checkNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
            selectAll(selected?: boolean): void;
            selectNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], selected?: boolean): void;
            expandAll(expanded?: boolean): void;
            expandNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], expanded?: boolean): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            select: (selectedKeys: (string | number)[], data: {
                selected?: boolean | undefined;
                selectedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => true;
            'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
            check: (checkedKeys: (string | number)[], data: {
                checked?: boolean | undefined;
                checkedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./interface").TreeNodeData[];
                e?: Event | undefined;
            }) => true;
            'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
            'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
            expand: (expandKeys: (string | number)[], data: {
                expanded?: boolean | undefined;
                expandedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => true;
            'update:expandedKeys': (expandKeys: (string | number)[]) => true;
            dragStart: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
            dragEnd: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
            dragOver: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
            dragLeave: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
            drop: (data: {
                e: DragEvent;
                dragNode: import("./interface").TreeNodeData;
                dropNode: import("./interface").TreeNodeData;
                dropPosition: number;
            }) => true;
        }, string, {
            size: "mini" | "medium" | "large" | "small";
            multiple: boolean;
            data: import("./interface").TreeNodeData[];
            animation: boolean;
            draggable: boolean;
            checkStrictly: boolean;
            checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            showLine: boolean;
            selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
        data: import("./interface").TreeNodeData[];
        animation: boolean;
        draggable: boolean;
        checkStrictly: boolean;
        checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
        showLine: boolean;
        selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
        fieldNames?: import("./interface").TreeFieldNames | undefined;
        virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
        loadMore?: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
        selectedKeys?: (string | number)[] | undefined;
        defaultSelectedKeys?: (string | number)[] | undefined;
        expandedKeys?: (string | number)[] | undefined;
        defaultExpandedKeys?: (string | number)[] | undefined;
        checkedKeys?: (string | number)[] | undefined;
        filterTreeNode?: import("./interface").FilterTreeNode | undefined;
        allowDrop?: ((options: {
            dropNode: import("./interface").TreeNodeData;
            dropPosition: 0 | 1 | -1;
        }) => boolean) | undefined;
        defaultCheckedKeys?: (string | number)[] | undefined;
        halfCheckedKeys?: (string | number)[] | undefined;
        actionOnNodeClick?: "expand" | undefined;
    }> & {
        onDrop?: ((data: {
            e: DragEvent;
            dragNode: import("./interface").TreeNodeData;
            dropNode: import("./interface").TreeNodeData;
            dropPosition: number;
        }) => any) | undefined;
        onSelect?: ((selectedKeys: (string | number)[], data: {
            selected?: boolean | undefined;
            selectedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            e?: Event | undefined;
        }) => any) | undefined;
        onExpand?: ((expandKeys: (string | number)[], data: {
            expanded?: boolean | undefined;
            expandedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            e?: Event | undefined;
        }) => any) | undefined;
        "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
        onCheck?: ((checkedKeys: (string | number)[], data: {
            checked?: boolean | undefined;
            checkedNodes: import("./interface").TreeNodeData[];
            node?: import("./interface").TreeNodeData | undefined;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./interface").TreeNodeData[];
            e?: Event | undefined;
        }) => any) | undefined;
        onDragStart?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
        onDragEnd?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
        onDragOver?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
        onDragLeave?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
        })[]>;
        visibleTreeNodeList: import("vue").ComputedRef<import("./interface").Node[]>;
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
                    dragNode: import("./interface").TreeNodeData;
                    dropNode: import("./interface").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                readonly onSelect: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean | undefined;
                    selectedNodes: import("./interface").TreeNodeData[];
                    node?: import("./interface").TreeNodeData | undefined;
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
                    expandedNodes: import("./interface").TreeNodeData[];
                    node?: import("./interface").TreeNodeData | undefined;
                    e?: Event | undefined;
                }) => any) | undefined;
                readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                readonly loadMore: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
                readonly draggable: boolean;
                readonly selectedKeys: (string | number)[] | undefined;
                readonly defaultSelectedKeys: (string | number)[] | undefined;
                readonly expandedKeys: (string | number)[] | undefined;
                readonly defaultExpandedKeys: (string | number)[] | undefined;
                readonly checkStrictly: boolean;
                readonly onCheck: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean | undefined;
                    checkedNodes: import("./interface").TreeNodeData[];
                    node?: import("./interface").TreeNodeData | undefined;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("./interface").TreeNodeData[];
                    e?: Event | undefined;
                }) => any) | undefined;
                readonly checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly showLine: boolean;
                readonly selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly blockNode: boolean;
                readonly checkedKeys: (string | number)[] | undefined;
                readonly filterTreeNode: import("./interface").FilterTreeNode | undefined;
                readonly onDragStart: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                readonly onDragEnd: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                readonly onDragOver: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                readonly onDragLeave: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
                readonly allowDrop: ((options: {
                    dropNode: import("./interface").TreeNodeData;
                    dropPosition: 0 | 1 | -1;
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
                key: import("./interface").TreeNodeKey;
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
                parentKey?: import("./interface").TreeNodeKey | undefined;
                pathParentKeys: import("./interface").TreeNodeKey[];
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
            flattenTreeData: import("./interface").Node[];
            key2TreeNode: import("./interface").Key2TreeNode;
            checkedKeys: import("./interface").TreeNodeKey[];
            indeterminateKeys: import("./interface").TreeNodeKey[];
            selectedKeys: import("./interface").TreeNodeKey[];
            expandedKeys: import("./interface").TreeNodeKey[];
            loadingKeys: import("./interface").TreeNodeKey[];
            currentExpandKeys: import("./interface").TreeNodeKey[];
            onLoadMore: ((key: import("./interface").TreeNodeKey) => Promise<void>) | undefined;
            filterTreeNode: import("./interface").FilterTreeNode | undefined;
            onCheck: (checked: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
            onSelect: (key: import("./interface").TreeNodeKey, e: Event) => void;
            onExpand: (expanded: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
            onExpandEnd: (key: import("./interface").TreeNodeKey) => void;
            allowDrop: (key: import("./interface").TreeNodeKey, dropPosition: import("./interface").DropPosition) => boolean;
            onDragStart: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
            onDragEnd: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
            onDragOver: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
            onDragLeave: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
            onDrop: (key: import("./interface").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
        };
        virtualListRef: import("vue").Ref<any>;
        computedSelectedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
        computedExpandedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
        computedCheckedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
        computedIndeterminateKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
        getPublicCheckedKeys: (rawCheckedKeys: import("./interface").TreeNodeKey[], rawCheckedStrategy?: "all" | "child" | "parent") => import("./interface").TreeNodeKey[];
        getNodes: (keys: import("./interface").TreeNodeKey[]) => (import("./interface").TreeNodeData | undefined)[];
        internalCheckNodes: (keys: import("./interface").TreeNodeKey[], checked: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
        internalSetCheckedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
        internalSelectNodes: (keys: import("./interface").TreeNodeKey[], selected: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
        internalSetSelectedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
        internalExpandNodes: (keys: import("./interface").TreeNodeKey[], expanded: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
        internalSetExpandedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
    }> & {} & {} & {
        toggleCheck(key: import("./interface").TreeNodeKey, e: Event): void;
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        getSelectedNodes(): (import("./interface").TreeNodeData | undefined)[];
        getCheckedNodes(options?: {
            checkedStrategy?: import("./interface").CheckedStrategy | undefined;
            includeHalfChecked?: boolean | undefined;
        }): (import("./interface").TreeNodeData | undefined)[];
        getHalfCheckedNodes(): (import("./interface").TreeNodeData | undefined)[];
        getExpandedNodes(): (import("./interface").TreeNodeData | undefined)[];
        checkAll(checked?: boolean): void;
        checkNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
        selectAll(selected?: boolean): void;
        selectNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], selected?: boolean): void;
        expandAll(expanded?: boolean): void;
        expandNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], expanded?: boolean): void;
    } & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    data: import("./interface").TreeNodeData[];
    animation: boolean;
    draggable: boolean;
    checkStrictly: boolean;
    checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    showLine: boolean;
    selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
    fieldNames?: import("./interface").TreeFieldNames | undefined;
    virtualListProps?: import("../_components/virtual-list-v2/interface").VirtualListProps | undefined;
    loadMore?: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
    selectedKeys?: (string | number)[] | undefined;
    defaultSelectedKeys?: (string | number)[] | undefined;
    expandedKeys?: (string | number)[] | undefined;
    defaultExpandedKeys?: (string | number)[] | undefined;
    checkedKeys?: (string | number)[] | undefined;
    filterTreeNode?: import("./interface").FilterTreeNode | undefined;
    allowDrop?: ((options: {
        dropNode: import("./interface").TreeNodeData;
        dropPosition: 0 | 1 | -1;
    }) => boolean) | undefined;
    defaultCheckedKeys?: (string | number)[] | undefined;
    halfCheckedKeys?: (string | number)[] | undefined;
    actionOnNodeClick?: "expand" | undefined;
}> & {
    onDrop?: ((data: {
        e: DragEvent;
        dragNode: import("./interface").TreeNodeData;
        dropNode: import("./interface").TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./interface").TreeNodeData[];
        e?: Event | undefined;
    }) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
}, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ((node: import("./interface").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
    })[]>;
    visibleTreeNodeList: import("vue").ComputedRef<import("./interface").Node[]>;
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
                dragNode: import("./interface").TreeNodeData;
                dropNode: import("./interface").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                selected?: boolean | undefined;
                selectedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
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
                expandedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                e?: Event | undefined;
            }) => any) | undefined;
            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
            readonly loadMore: ((node: import("./interface").TreeNodeData) => Promise<void>) | undefined;
            readonly draggable: boolean;
            readonly selectedKeys: (string | number)[] | undefined;
            readonly defaultSelectedKeys: (string | number)[] | undefined;
            readonly expandedKeys: (string | number)[] | undefined;
            readonly defaultExpandedKeys: (string | number)[] | undefined;
            readonly checkStrictly: boolean;
            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                checked?: boolean | undefined;
                checkedNodes: import("./interface").TreeNodeData[];
                node?: import("./interface").TreeNodeData | undefined;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./interface").TreeNodeData[];
                e?: Event | undefined;
            }) => any) | undefined;
            readonly checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly showLine: boolean;
            readonly selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly blockNode: boolean;
            readonly checkedKeys: (string | number)[] | undefined;
            readonly filterTreeNode: import("./interface").FilterTreeNode | undefined;
            readonly onDragStart: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            readonly onDragEnd: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            readonly onDragOver: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            readonly onDragLeave: ((ev: DragEvent, node: import("./interface").TreeNodeData) => any) | undefined;
            readonly allowDrop: ((options: {
                dropNode: import("./interface").TreeNodeData;
                dropPosition: 0 | 1 | -1;
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
            key: import("./interface").TreeNodeKey;
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
            parentKey?: import("./interface").TreeNodeKey | undefined;
            pathParentKeys: import("./interface").TreeNodeKey[];
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
        flattenTreeData: import("./interface").Node[];
        key2TreeNode: import("./interface").Key2TreeNode;
        checkedKeys: import("./interface").TreeNodeKey[];
        indeterminateKeys: import("./interface").TreeNodeKey[];
        selectedKeys: import("./interface").TreeNodeKey[];
        expandedKeys: import("./interface").TreeNodeKey[];
        loadingKeys: import("./interface").TreeNodeKey[];
        currentExpandKeys: import("./interface").TreeNodeKey[];
        onLoadMore: ((key: import("./interface").TreeNodeKey) => Promise<void>) | undefined;
        filterTreeNode: import("./interface").FilterTreeNode | undefined;
        onCheck: (checked: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
        onSelect: (key: import("./interface").TreeNodeKey, e: Event) => void;
        onExpand: (expanded: boolean, key: import("./interface").TreeNodeKey, e?: Event | undefined) => void;
        onExpandEnd: (key: import("./interface").TreeNodeKey) => void;
        allowDrop: (key: import("./interface").TreeNodeKey, dropPosition: import("./interface").DropPosition) => boolean;
        onDragStart: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
        onDragEnd: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
        onDragOver: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
        onDragLeave: (key: import("./interface").TreeNodeKey, e: DragEvent) => void;
        onDrop: (key: import("./interface").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
    };
    virtualListRef: import("vue").Ref<any>;
    computedSelectedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
    computedExpandedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
    computedCheckedKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
    computedIndeterminateKeys: import("vue").ComputedRef<import("./interface").TreeNodeKey[]>;
    getPublicCheckedKeys: (rawCheckedKeys: import("./interface").TreeNodeKey[], rawCheckedStrategy?: "all" | "child" | "parent") => import("./interface").TreeNodeKey[];
    getNodes: (keys: import("./interface").TreeNodeKey[]) => (import("./interface").TreeNodeData | undefined)[];
    internalCheckNodes: (keys: import("./interface").TreeNodeKey[], checked: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
    internalSetCheckedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
    internalSelectNodes: (keys: import("./interface").TreeNodeKey[], selected: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
    internalSetSelectedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
    internalExpandNodes: (keys: import("./interface").TreeNodeKey[], expanded: boolean, targetKey?: import("./interface").TreeNodeKey | undefined) => void;
    internalSetExpandedKeys: (keys: import("./interface").TreeNodeKey[]) => void;
}, unknown, {}, {
    toggleCheck(key: import("./interface").TreeNodeKey, e: Event): void;
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    getSelectedNodes(): (import("./interface").TreeNodeData | undefined)[];
    getCheckedNodes(options?: {
        checkedStrategy?: import("./interface").CheckedStrategy | undefined;
        includeHalfChecked?: boolean | undefined;
    }): (import("./interface").TreeNodeData | undefined)[];
    getHalfCheckedNodes(): (import("./interface").TreeNodeData | undefined)[];
    getExpandedNodes(): (import("./interface").TreeNodeData | undefined)[];
    checkAll(checked?: boolean): void;
    checkNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
    selectAll(selected?: boolean): void;
    selectNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], selected?: boolean): void;
    expandAll(expanded?: boolean): void;
    expandNode(key: import("./interface").TreeNodeKey | import("./interface").TreeNodeKey[], expanded?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean | undefined;
        selectedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => true;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean | undefined;
        checkedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./interface").TreeNodeData[];
        e?: Event | undefined;
    }) => true;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean | undefined;
        expandedNodes: import("./interface").TreeNodeData[];
        node?: import("./interface").TreeNodeData | undefined;
        e?: Event | undefined;
    }) => true;
    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
    dragStart: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
    dragEnd: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
    dragOver: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
    dragLeave: (ev: DragEvent, node: import("./interface").TreeNodeData) => true;
    drop: (data: {
        e: DragEvent;
        dragNode: import("./interface").TreeNodeData;
        dropNode: import("./interface").TreeNodeData;
        dropPosition: number;
    }) => true;
}, string, {
    size: "mini" | "medium" | "large" | "small";
    multiple: boolean;
    data: import("./interface").TreeNodeData[];
    animation: boolean;
    draggable: boolean;
    checkStrictly: boolean;
    checkable: boolean | ((node: import("./interface").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    showLine: boolean;
    selectable: boolean | ((node: import("./interface").TreeNodeData, info: {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: ArcoOptions | undefined) => void;
};
export declare type TreeInstance = InstanceType<typeof _Tree>;
export default Tree;
