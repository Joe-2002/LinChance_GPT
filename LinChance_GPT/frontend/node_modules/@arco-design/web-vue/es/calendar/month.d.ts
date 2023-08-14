import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
export declare function getAllDaysByTime(time: Dayjs, { dayStartOfWeek, isWeek }: {
    dayStartOfWeek: 0 | 1;
    isWeek: boolean;
}): never[][];
declare const _default: import("vue").DefineComponent<{
    cell: {
        type: BooleanConstructor;
    };
    pageData: {
        type: ArrayConstructor;
    };
    current: {
        type: PropType<number>;
    };
    value: {
        type: PropType<Dayjs>;
        required: true;
    };
    selectHandler: {
        type: PropType<(time: Dayjs, disabled: boolean) => void>;
        required: true;
    };
    mode: {
        type: PropType<"year" | "month" | "day" | "week">;
    };
    pageShowDate: {
        type: PropType<Dayjs>;
        required: true;
    };
    panel: {
        type: BooleanConstructor;
    };
    dayStartOfWeek: {
        type: PropType<0 | 1>;
        required: true;
    };
    isWeek: {
        type: BooleanConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    cell?: unknown;
    pageData?: unknown;
    current?: unknown;
    value?: unknown;
    selectHandler?: unknown;
    mode?: unknown;
    pageShowDate?: unknown;
    panel?: unknown;
    dayStartOfWeek?: unknown;
    isWeek?: unknown;
} & {
    cell: boolean;
    value: Dayjs;
    panel: boolean;
    dayStartOfWeek: 0 | 1;
    isWeek: boolean;
    selectHandler: (time: Dayjs, disabled: boolean) => void;
    pageShowDate: Dayjs;
} & {
    mode?: "year" | "month" | "day" | "week" | undefined;
    current?: number | undefined;
    pageData?: unknown[] | undefined;
}>, {
    cell: boolean;
    panel: boolean;
}>;
export default _default;
