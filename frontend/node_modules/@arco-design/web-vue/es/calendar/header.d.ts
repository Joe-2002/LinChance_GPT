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
    modes: {
        type: PropType<("year" | "month" | "day" | "week")[]>;
    };
    headerType: {
        type: StringConstructor;
    };
    pageShowData: {
        type: PropType<Dayjs>;
        required: true;
    };
    move: {
        type: FunctionConstructor;
        required: true;
    };
    onYearChange: {
        type: FunctionConstructor;
        required: true;
    };
    onMonthChange: {
        type: FunctionConstructor;
        required: true;
    };
    changePageShowDate: {
        type: FunctionConstructor;
        required: true;
    };
    onModeChange: {
        type: FunctionConstructor;
        required: true;
    };
    headerValueFormat: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("yearChange" | "monthChange")[], "yearChange" | "monthChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    dayStartOfWeek?: unknown;
    isWeek?: unknown;
    panel?: unknown;
    modes?: unknown;
    headerType?: unknown;
    pageShowData?: unknown;
    move?: unknown;
    onYearChange?: unknown;
    onMonthChange?: unknown;
    changePageShowDate?: unknown;
    onModeChange?: unknown;
    headerValueFormat?: unknown;
} & {
    move: Function;
    panel: boolean;
    isWeek: boolean;
    onYearChange: Function;
    onMonthChange: Function;
    pageShowData: Dayjs;
    changePageShowDate: Function;
    onModeChange: Function;
    headerValueFormat: string;
} & {
    mode?: "year" | "month" | "day" | "week" | undefined;
    modes?: ("year" | "month" | "day" | "week")[] | undefined;
    dayStartOfWeek?: 0 | 1 | undefined;
    headerType?: string | undefined;
}> & {
    onYearChange?: ((...args: any[]) => any) | undefined;
    onMonthChange?: ((...args: any[]) => any) | undefined;
}, {
    panel: boolean;
    isWeek: boolean;
}>;
export default _default;
