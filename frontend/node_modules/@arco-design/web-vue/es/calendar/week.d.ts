import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"year" | "month" | "day" | "week">;
    };
    dayStartOfWeek: {
        type: PropType<0 | 1>;
    };
    isWeek: {
        type: BooleanConstructor;
    };
    panel: {
        type: BooleanConstructor;
    };
    value: {
        type: PropType<Dayjs>;
        required: true;
    };
    selectHandler: {
        type: PropType<(time: Dayjs, disabled: boolean) => void>;
    };
    pageShowData: {
        type: PropType<Dayjs>;
        required: true;
    };
    pageData: {
        type: ArrayConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    dayStartOfWeek?: unknown;
    isWeek?: unknown;
    panel?: unknown;
    value?: unknown;
    selectHandler?: unknown;
    pageShowData?: unknown;
    pageData?: unknown;
} & {
    value: Dayjs;
    panel: boolean;
    isWeek: boolean;
    pageShowData: Dayjs;
} & {
    mode?: "year" | "month" | "day" | "week" | undefined;
    dayStartOfWeek?: 0 | 1 | undefined;
    pageData?: unknown[] | undefined;
    selectHandler?: ((time: Dayjs, disabled: boolean) => void) | undefined;
}>, {
    panel: boolean;
    isWeek: boolean;
}>;
export default _default;
