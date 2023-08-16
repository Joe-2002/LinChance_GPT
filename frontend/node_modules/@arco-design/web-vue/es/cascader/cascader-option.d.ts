import type { PropType } from 'vue';
import type { CascaderOptionInfo } from './interface';
declare const _default: import("vue").DefineComponent<{
    option: {
        type: PropType<CascaderOptionInfo>;
        required: true;
    };
    active: BooleanConstructor;
    multiple: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    searchOption: BooleanConstructor;
    pathLabel: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    option?: unknown;
    active?: unknown;
    multiple?: unknown;
    checkStrictly?: unknown;
    searchOption?: unknown;
    pathLabel?: unknown;
} & {
    multiple: boolean;
    active: boolean;
    option: CascaderOptionInfo;
    checkStrictly: boolean;
    pathLabel: boolean;
    searchOption: boolean;
} & {}>, {
    multiple: boolean;
    active: boolean;
    checkStrictly: boolean;
    pathLabel: boolean;
    searchOption: boolean;
}>;
export default _default;
