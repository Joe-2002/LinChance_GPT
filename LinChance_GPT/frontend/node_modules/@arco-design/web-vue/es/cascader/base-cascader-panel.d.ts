import { PropType } from 'vue';
import { CascaderOptionInfo } from './interface';
import { VirtualListProps } from '../_components/virtual-list-v2/interface';
declare const _default: import("vue").DefineComponent<{
    displayColumns: {
        type: PropType<CascaderOptionInfo[][]>;
        required: true;
    };
    selectedPath: {
        type: PropType<string[]>;
        required: true;
    };
    activeKey: StringConstructor;
    totalLevel: {
        type: NumberConstructor;
        required: true;
    };
    multiple: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    loading: BooleanConstructor;
    dropdown: BooleanConstructor;
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    displayColumns?: unknown;
    selectedPath?: unknown;
    activeKey?: unknown;
    totalLevel?: unknown;
    multiple?: unknown;
    checkStrictly?: unknown;
    loading?: unknown;
    dropdown?: unknown;
    virtualListProps?: unknown;
} & {
    multiple: boolean;
    loading: boolean;
    checkStrictly: boolean;
    displayColumns: CascaderOptionInfo[][];
    selectedPath: string[];
    totalLevel: number;
    dropdown: boolean;
} & {
    activeKey?: string | undefined;
    virtualListProps?: VirtualListProps | undefined;
}>, {
    multiple: boolean;
    loading: boolean;
    checkStrictly: boolean;
    dropdown: boolean;
}>;
export default _default;
