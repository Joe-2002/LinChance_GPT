import { PropType } from 'vue';
import { CascaderOptionInfo } from './interface';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<CascaderOptionInfo[]>;
        required: true;
    };
    loading: BooleanConstructor;
    activeKey: StringConstructor;
    multiple: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    pathLabel: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    loading?: unknown;
    activeKey?: unknown;
    multiple?: unknown;
    checkStrictly?: unknown;
    pathLabel?: unknown;
} & {
    multiple: boolean;
    loading: boolean;
    checkStrictly: boolean;
    options: CascaderOptionInfo[];
    pathLabel: boolean;
} & {
    activeKey?: string | undefined;
}>, {
    multiple: boolean;
    loading: boolean;
    checkStrictly: boolean;
    pathLabel: boolean;
}>;
export default _default;
