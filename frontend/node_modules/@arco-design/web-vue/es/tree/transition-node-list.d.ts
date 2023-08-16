import { PropType } from 'vue';
import { TreeNodeKey } from './interface';
declare const _default: import("vue").DefineComponent<{
    nodeKey: {
        type: PropType<TreeNodeKey>;
        required: true;
    };
}, {
    classNames: string[];
    visibleNodeList: import("vue").ComputedRef<import("./interface").Node[] | undefined>;
    show: import("vue").ComputedRef<number | false | undefined>;
    expanded: import("vue").ComputedRef<boolean | undefined>;
    onTransitionEnd(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    nodeKey?: unknown;
} & {
    nodeKey: TreeNodeKey;
} & {}>, {}>;
export default _default;
