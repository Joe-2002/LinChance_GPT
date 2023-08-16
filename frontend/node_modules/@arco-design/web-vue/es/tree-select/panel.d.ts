import { PropType } from 'vue';
import { TreeProps, TreeNodeKey } from '../tree/interface';
import { ScrollbarProps } from '../scrollbar';
declare const _default: import("vue").DefineComponent<{
    treeProps: {
        type: PropType<Partial<TreeProps>>;
        default: () => {};
    };
    selectedKeys: {
        type: PropType<TreeNodeKey[]>;
    };
    showCheckable: {
        type: BooleanConstructor;
    };
    treeSlots: {
        type: PropType<Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>>;
        default: () => {};
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    treeProps?: unknown;
    selectedKeys?: unknown;
    showCheckable?: unknown;
    treeSlots?: unknown;
    scrollbar?: unknown;
} & {
    scrollbar: boolean | ScrollbarProps;
    treeProps: Partial<TreeProps>;
    showCheckable: boolean;
    treeSlots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
} & {
    selectedKeys?: TreeNodeKey[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    scrollbar: boolean | ScrollbarProps;
    treeProps: Partial<TreeProps>;
    showCheckable: boolean;
    treeSlots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
}>;
export default _default;
