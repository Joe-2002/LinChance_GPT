import { PropType } from 'vue';
import { TransferItem } from './interface';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"source" | "target">;
    };
    data: {
        type: PropType<TransferItem>;
        required: true;
    };
    allowClear: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    simple: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    data?: unknown;
    allowClear?: unknown;
    disabled?: unknown;
    draggable?: unknown;
    simple?: unknown;
} & {
    disabled: boolean;
    data: TransferItem;
    allowClear: boolean;
    draggable: boolean;
    simple: boolean;
} & {
    type?: "source" | "target" | undefined;
}>, {
    disabled: boolean;
    allowClear: boolean;
    draggable: boolean;
    simple: boolean;
}>;
export default _default;
