import { Dayjs } from 'dayjs';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<(Dayjs | undefined)[] | undefined>;
    };
    displayIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    displayValue: import("vue").ComputedRef<{
        clone: () => Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): Dayjs;
        };
        month: {
            (): number;
            (value: number): Dayjs;
        };
        date: {
            (): number;
            (value: number): Dayjs;
        };
        day: {
            (): number;
            (value: number): Dayjs;
        };
        hour: {
            (): number;
            (value: number): Dayjs;
        };
        minute: {
            (): number;
            (value: number): Dayjs;
        };
        second: {
            (): number;
            (value: number): Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): Dayjs;
        };
        set: (unit: import("dayjs").UnitType, value: number) => Dayjs;
        get: (unit: import("dayjs").UnitType) => number;
        add: {
            (value: number, unit?: import("dayjs").ManipulateType | undefined): Dayjs;
            (value: number, unit: import("dayjs").QUnitType): Dayjs;
        };
        subtract: {
            (value: number, unit?: import("dayjs").ManipulateType | undefined): Dayjs;
            (value: number, unit: import("dayjs").QUnitType): Dayjs;
        };
        startOf: {
            (unit: import("dayjs").OpUnitType): Dayjs;
            (unit: import("dayjs").QUnitType): Dayjs;
        };
        endOf: {
            (unit: import("dayjs").OpUnitType): Dayjs;
            (unit: import("dayjs").QUnitType): Dayjs;
        };
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | Dayjs | null | undefined, unit?: "M" | "y" | "s" | "year" | "month" | "date" | "day" | "hour" | "minute" | "second" | "millisecond" | "week" | "quarter" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years" | "dates" | "d" | "h" | "m" | "ms" | "weeks" | "w" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: {
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").OpUnitType | undefined): boolean;
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").QUnitType | undefined): boolean;
        };
        isSame: {
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").OpUnitType | undefined): boolean;
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").QUnitType | undefined): boolean;
        };
        isAfter: {
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").OpUnitType | undefined): boolean;
            (date: string | number | Date | Dayjs | null | undefined, unit?: import("dayjs").QUnitType | undefined): boolean;
        };
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): Dayjs;
        };
        isBetween: (a: string | number | Date | Dayjs | null | undefined, b: string | number | Date | Dayjs | null | undefined, c?: import("dayjs").OpUnitType | null | undefined, d?: "()" | "[]" | "[)" | "(]" | undefined) => boolean;
        week: {
            (): number;
            (value: number): Dayjs;
        };
        weekYear: () => number;
        quarter: {
            (): number;
            (quarter: number): Dayjs;
        };
    } | undefined>;
    onSelect: (selectedValue: Dayjs) => void;
    onConfirm: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "confirm" | "update:displayIndex" | "display-index-change")[], "select" | "confirm" | "update:displayIndex" | "display-index-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    displayIndex?: unknown;
} & {
    displayIndex: number;
} & {
    value?: (Dayjs | undefined)[] | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onUpdate:displayIndex"?: ((...args: any[]) => any) | undefined;
    "onDisplay-index-change"?: ((...args: any[]) => any) | undefined;
}, {
    displayIndex: number;
}>;
export default _default;
