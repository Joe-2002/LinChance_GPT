import { PropType } from 'vue';
import { TableDataWithRaw } from './interface';
declare const _default: import("vue").DefineComponent<{
    expand: {
        type: BooleanConstructor;
    };
    empty: {
        type: BooleanConstructor;
    };
    checked: {
        type: BooleanConstructor;
    };
    rowIndex: NumberConstructor;
    record: {
        type: PropType<TableDataWithRaw>;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    expand?: unknown;
    empty?: unknown;
    checked?: unknown;
    rowIndex?: unknown;
    record?: unknown;
} & {
    empty: boolean;
    expand: boolean;
    checked: boolean;
    record: TableDataWithRaw;
} & {
    rowIndex?: number | undefined;
}>, {
    empty: boolean;
    expand: boolean;
    checked: boolean;
    record: TableDataWithRaw;
}>;
export default _default;
