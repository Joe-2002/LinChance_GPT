import { PropType, VNode } from 'vue';
import { TableColumnData, TableDataWithRaw, TableOperationColumn } from './interface';
declare const _default: import("vue").DefineComponent<{
    rowIndex: NumberConstructor;
    record: {
        type: PropType<TableDataWithRaw>;
        default: () => {};
    };
    column: {
        type: PropType<TableColumnData>;
        default: () => {};
    };
    type: {
        type: PropType<"normal" | "checkbox" | "radio" | "expand" | "operation">;
        default: string;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        default: () => never[];
    };
    dataColumns: {
        type: PropType<TableColumnData[]>;
        default: () => never[];
    };
    colSpan: {
        type: NumberConstructor;
        default: number;
    };
    rowSpan: {
        type: NumberConstructor;
        default: number;
    };
    isFixedExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    containerWidth: {
        type: NumberConstructor;
    };
    showExpandBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    indentSize: {
        type: NumberConstructor;
        default: number;
    };
    renderExpandBtn: {
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean | undefined) => VNode>;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rowIndex?: unknown;
    record?: unknown;
    column?: unknown;
    type?: unknown;
    operations?: unknown;
    dataColumns?: unknown;
    colSpan?: unknown;
    rowSpan?: unknown;
    isFixedExpand?: unknown;
    containerWidth?: unknown;
    showExpandBtn?: unknown;
    indentSize?: unknown;
    renderExpandBtn?: unknown;
    summary?: unknown;
} & {
    column: TableColumnData;
    summary: boolean;
    type: "normal" | "checkbox" | "radio" | "expand" | "operation";
    indentSize: number;
    record: TableDataWithRaw;
    operations: TableOperationColumn[];
    dataColumns: TableColumnData[];
    colSpan: number;
    rowSpan: number;
    isFixedExpand: boolean;
    showExpandBtn: boolean;
} & {
    rowIndex?: number | undefined;
    containerWidth?: number | undefined;
    renderExpandBtn?: ((record: TableDataWithRaw, stopPropagation?: boolean | undefined) => VNode) | undefined;
}>, {
    column: TableColumnData;
    summary: boolean;
    type: "normal" | "checkbox" | "radio" | "expand" | "operation";
    indentSize: number;
    record: TableDataWithRaw;
    operations: TableOperationColumn[];
    dataColumns: TableColumnData[];
    colSpan: number;
    rowSpan: number;
    isFixedExpand: boolean;
    showExpandBtn: boolean;
}>;
export default _default;
