import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"year" | "month">;
        required: true;
    };
    dayStartOfWeek: {
        type: PropType<0 | 1>;
        required: true;
    };
    value: {
        type: PropType<Dayjs>;
        required: true;
    };
    isWeek: {
        type: BooleanConstructor;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageShowData: {
        type: PropType<Dayjs>;
        required: true;
    };
    pageData: {
        type: ArrayConstructor;
    };
    selectHandler: {
        type: PropType<(time: Dayjs, disabled: boolean) => void>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    dayStartOfWeek?: unknown;
    value?: unknown;
    isWeek?: unknown;
    panel?: unknown;
    pageShowData?: unknown;
    pageData?: unknown;
    selectHandler?: unknown;
} & {
    mode: "year" | "month";
    value: Dayjs;
    panel: boolean;
    dayStartOfWeek: 0 | 1;
    isWeek: boolean;
    pageShowData: Dayjs;
    selectHandler: (time: Dayjs, disabled: boolean) => void;
} & {
    pageData?: unknown[] | undefined;
}>, {
    panel: boolean;
    isWeek: boolean;
}>;
export default _default;
