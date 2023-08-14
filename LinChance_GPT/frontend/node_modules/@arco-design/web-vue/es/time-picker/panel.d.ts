import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<Dayjs | undefined>;
    };
    visible: {
        type: BooleanConstructor;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    use12Hours: {
        type: BooleanConstructor;
    };
    step: {
        type: PropType<{
            hour?: number | undefined;
            minute?: number | undefined;
            second?: number | undefined;
        } | undefined>;
    };
    disabledHours: {
        type: PropType<(() => number[]) | undefined>;
    };
    disabledMinutes: {
        type: PropType<((selectedHour?: number | undefined) => number[]) | undefined>;
    };
    disabledSeconds: {
        type: PropType<((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined>;
    };
    hideDisabledOptions: {
        type: BooleanConstructor;
    };
    hideFooter: {
        type: BooleanConstructor;
    };
    isRange: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
}, {
    prefixCls: string;
    t: (key: string, ...args: any[]) => string;
    hours: import("vue").ComputedRef<import("./interface").TimeList>;
    minutes: import("vue").ComputedRef<import("./interface").TimeList>;
    seconds: import("vue").ComputedRef<import("./interface").TimeList>;
    ampmList: import("vue").ComputedRef<import("./interface").TimeList>;
    selectedValue: import("vue").Ref<{
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
    selectedHour: import("vue").ComputedRef<number | undefined>;
    selectedMinute: import("vue").ComputedRef<number | undefined>;
    selectedSecond: import("vue").ComputedRef<number | undefined>;
    selectedAmpm: import("vue").ComputedRef<"pm" | "am">;
    computedUse12Hours: import("vue").ComputedRef<boolean>;
    confirmBtnDisabled: import("vue").ComputedRef<boolean>;
    columns: import("vue").ComputedRef<string[]>;
    onSelect: (value: number | string, type?: 'hour' | 'minute' | 'second' | 'ampm') => void;
    onSelectNow(): void;
    onConfirm(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: Dayjs) => boolean;
    confirm: (value: Dayjs) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    visible?: unknown;
    format?: unknown;
    use12Hours?: unknown;
    step?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
    hideDisabledOptions?: unknown;
    hideFooter?: unknown;
    isRange?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    visible: boolean;
    format: string;
    hideFooter: boolean;
    use12Hours: boolean;
    hideDisabledOptions: boolean;
    isRange: boolean;
} & {
    value?: Dayjs | undefined;
    step?: {
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
    } | undefined;
    disabledHours?: (() => number[]) | undefined;
    disabledMinutes?: ((selectedHour?: number | undefined) => number[]) | undefined;
    disabledSeconds?: ((selectedHour?: number | undefined, selectedMinute?: number | undefined) => number[]) | undefined;
}> & {
    onSelect?: ((value: Dayjs) => any) | undefined;
    onConfirm?: ((value: Dayjs) => any) | undefined;
}, {
    disabled: boolean;
    visible: boolean;
    format: string;
    hideFooter: boolean;
    use12Hours: boolean;
    hideDisabledOptions: boolean;
    isRange: boolean;
}>;
export default _default;
