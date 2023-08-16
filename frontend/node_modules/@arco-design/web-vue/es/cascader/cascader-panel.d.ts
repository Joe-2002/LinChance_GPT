import { PropType } from 'vue';
import { Data } from '../_utils/types';
import { CascaderOption, CascaderOptionInfo } from './interface';
declare const _default: import("vue").DefineComponent<{
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    defaultValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: Data) => "" | never[] | undefined;
    };
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    expandTrigger: {
        type: StringConstructor;
        default: string;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadMore: {
        type: PropType<(option: CascaderOption, done: (children?: CascaderOption[] | undefined) => void) => void>;
    };
    fieldNames: {
        type: PropType<import("../_utils/types").FieldString<CascaderOption>>;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    optionInfos: import("vue").Ref<{
        [x: string]: any;
        raw: {
            [x: string]: unknown;
        };
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            color?: string | undefined;
            size?: "medium" | "large" | "small" | undefined;
            visible?: boolean | undefined;
            defaultVisible?: boolean | undefined;
            loading?: boolean | undefined;
            closable?: boolean | undefined;
            checkable?: boolean | undefined;
            checked?: boolean | undefined;
            defaultChecked?: boolean | undefined;
        } | undefined;
    }[]>;
    filteredLeafOptions: import("vue").ComputedRef<CascaderOptionInfo[]>;
    selectedPath: import("vue").Ref<string[]>;
    activeKey: import("vue").Ref<string | undefined>;
    displayColumns: import("vue").ComputedRef<CascaderOptionInfo[][]>;
    handleKeyDown: (event: KeyboardEvent) => void;
    totalLevel: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pathMode?: unknown;
    multiple?: unknown;
    modelValue?: unknown;
    defaultValue?: unknown;
    options?: unknown;
    expandTrigger?: unknown;
    checkStrictly?: unknown;
    loadMore?: unknown;
    fieldNames?: unknown;
    valueKey?: unknown;
    expandChild?: unknown;
} & {
    multiple: boolean;
    defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    checkStrictly: boolean;
    options: CascaderOption[];
    pathMode: boolean;
    expandTrigger: string;
    valueKey: string;
    expandChild: boolean;
} & {
    modelValue?: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    fieldNames?: import("../_utils/types").FieldString<CascaderOption> | undefined;
    loadMore?: ((option: CascaderOption, done: (children?: CascaderOption[] | undefined) => void) => void) | undefined;
}> & {
    onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
}, {
    multiple: boolean;
    defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    checkStrictly: boolean;
    options: CascaderOption[];
    pathMode: boolean;
    expandTrigger: string;
    valueKey: string;
    expandChild: boolean;
}>;
export default _default;
