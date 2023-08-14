import { PropType } from 'vue';
import { TableColumnData, TableOperationColumn } from './interface';
declare const _default: import("vue").DefineComponent<{
    column: {
        type: PropType<TableColumnData>;
        default: () => {};
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        default: () => never[];
    };
    dataColumns: {
        type: PropType<TableColumnData[]>;
        default: () => never[];
    };
    resizable: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    column?: unknown;
    operations?: unknown;
    dataColumns?: unknown;
    resizable?: unknown;
} & {
    column: TableColumnData;
    operations: TableOperationColumn[];
    dataColumns: TableColumnData[];
    resizable: boolean;
} & {}>, {
    column: TableColumnData;
    operations: TableOperationColumn[];
    dataColumns: TableColumnData[];
    resizable: boolean;
}>;
export default _default;
