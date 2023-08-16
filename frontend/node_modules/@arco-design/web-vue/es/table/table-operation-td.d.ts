import { PropType, VNode } from 'vue';
import { TableDataWithRaw, TableOperationColumn } from './interface';
import { BaseType } from '../_utils/types';
declare const _default: import("vue").DefineComponent<{
    operationColumn: {
        type: PropType<TableOperationColumn>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    record: {
        type: PropType<TableDataWithRaw>;
        required: true;
    };
    hasExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedRowKeys: {
        type: PropType<BaseType[]>;
    };
    renderExpandBtn: {
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean | undefined) => VNode>;
    };
    colSpan: {
        type: NumberConstructor;
        default: number;
    };
    rowSpan: {
        type: NumberConstructor;
        default: number;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    operationColumn?: unknown;
    operations?: unknown;
    record?: unknown;
    hasExpand?: unknown;
    selectedRowKeys?: unknown;
    renderExpandBtn?: unknown;
    colSpan?: unknown;
    rowSpan?: unknown;
    summary?: unknown;
} & {
    summary: boolean;
    record: TableDataWithRaw;
    operations: TableOperationColumn[];
    colSpan: number;
    rowSpan: number;
    operationColumn: TableOperationColumn;
    hasExpand: boolean;
} & {
    renderExpandBtn?: ((record: TableDataWithRaw, stopPropagation?: boolean | undefined) => VNode) | undefined;
    selectedRowKeys?: BaseType[] | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    summary: boolean;
    colSpan: number;
    rowSpan: number;
    hasExpand: boolean;
}>;
export default _default;
