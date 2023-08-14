import { PropType } from 'vue';
import { TableOperationColumn } from './interface';
declare const _default: import("vue").DefineComponent<{
    operationColumn: {
        type: PropType<TableOperationColumn>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    rowSpan: {
        type: NumberConstructor;
        default: number;
    };
    selectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    operationColumn?: unknown;
    operations?: unknown;
    rowSpan?: unknown;
    selectAll?: unknown;
} & {
    selectAll: boolean;
    operations: TableOperationColumn[];
    rowSpan: number;
    operationColumn: TableOperationColumn;
} & {}>, {
    selectAll: boolean;
    rowSpan: number;
}>;
export default _default;
