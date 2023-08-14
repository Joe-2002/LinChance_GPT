import { PropType } from 'vue';
import { CascaderOptionInfo } from './interface';
import { VirtualListProps } from '../_components/virtual-list-v2/interface';
declare const _default: import("vue").DefineComponent<{
    column: {
        type: PropType<CascaderOptionInfo[]>;
        required: true;
    };
    level: {
        type: NumberConstructor;
        default: number;
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
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    column?: unknown;
    level?: unknown;
    selectedPath?: unknown;
    activeKey?: unknown;
    totalLevel?: unknown;
    multiple?: unknown;
    checkStrictly?: unknown;
    virtualListProps?: unknown;
} & {
    column: CascaderOptionInfo[];
    multiple: boolean;
    checkStrictly: boolean;
    selectedPath: string[];
    totalLevel: number;
    level: number;
} & {
    activeKey?: string | undefined;
    virtualListProps?: VirtualListProps | undefined;
}>, {
    multiple: boolean;
    checkStrictly: boolean;
    level: number;
}>;
export default _default;
