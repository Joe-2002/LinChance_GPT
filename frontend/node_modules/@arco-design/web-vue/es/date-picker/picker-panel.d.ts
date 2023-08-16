import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { DisabledDate, DisabledTime, HeaderIcons, HeaderOperations, ShortcutType, WeekStart } from './interface';
import { TimePickerProps } from '../time-picker/interface';
import { RenderFunc } from '../_components/render-function';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
    };
    headerMode: {
        type: PropType<"year" | "month">;
    };
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    value: {
        type: PropType<Dayjs>;
    };
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    timePickerValue: {
        type: PropType<Dayjs>;
    };
    showTime: {
        type: BooleanConstructor;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    shortcuts: {
        type: PropType<ShortcutType[]>;
        default: () => never[];
    };
    shortcutsPosition: {
        type: PropType<"bottom" | "left" | "right">;
        default: string;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    disabledTime: {
        type: PropType<DisabledTime>;
    };
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    extra: {
        type: PropType<RenderFunc>;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
    hideTrigger: {
        type: BooleanConstructor;
    };
    confirmBtnDisabled: {
        type: BooleanConstructor;
    };
    showNowBtn: {
        type: BooleanConstructor;
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
    };
    abbreviation: {
        type: BooleanConstructor;
    };
}, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    showShortcutsInLeft: import("vue").ComputedRef<boolean>;
    showShortcutsInRight: import("vue").ComputedRef<boolean>;
    showShortcutsInBottom: import("vue").ComputedRef<boolean>;
    shortcutsProps: {
        prefixCls: string;
        shortcuts: {
            label: string | number | (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>);
            value: string | number | {
                toString: () => string;
                toDateString: () => string;
                toTimeString: () => string;
                toLocaleString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleDateString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleTimeString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                valueOf: () => number;
                getTime: () => number;
                getFullYear: () => number;
                getUTCFullYear: () => number;
                getMonth: () => number;
                getUTCMonth: () => number;
                getDate: () => number;
                getUTCDate: () => number;
                getDay: () => number;
                getUTCDay: () => number;
                getHours: () => number;
                getUTCHours: () => number;
                getMinutes: () => number;
                getUTCMinutes: () => number;
                getSeconds: () => number;
                getUTCSeconds: () => number;
                getMilliseconds: () => number;
                getUTCMilliseconds: () => number;
                getTimezoneOffset: () => number;
                setTime: (time: number) => number;
                setMilliseconds: (ms: number) => number;
                setUTCMilliseconds: (ms: number) => number;
                setSeconds: (sec: number, ms?: number | undefined) => number;
                setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setDate: (date: number) => number;
                setUTCDate: (date: number) => number;
                setMonth: (month: number, date?: number | undefined) => number;
                setUTCMonth: (month: number, date?: number | undefined) => number;
                setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                toUTCString: () => string;
                toISOString: () => string;
                toJSON: (key?: any) => string;
                getVarDate: () => VarDate;
                [Symbol.toPrimitive]: {
                    (hint: "default"): string;
                    (hint: "string"): string;
                    (hint: "number"): number;
                    (hint: string): string | number;
                };
            } | (string | number | {
                toString: () => string;
                toDateString: () => string;
                toTimeString: () => string;
                toLocaleString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleDateString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                toLocaleTimeString: {
                    (): string;
                    (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                };
                valueOf: () => number;
                getTime: () => number;
                getFullYear: () => number;
                getUTCFullYear: () => number;
                getMonth: () => number;
                getUTCMonth: () => number;
                getDate: () => number;
                getUTCDate: () => number;
                getDay: () => number;
                getUTCDay: () => number;
                getHours: () => number;
                getUTCHours: () => number;
                getMinutes: () => number;
                getUTCMinutes: () => number;
                getSeconds: () => number;
                getUTCSeconds: () => number;
                getMilliseconds: () => number;
                getUTCMilliseconds: () => number;
                getTimezoneOffset: () => number;
                setTime: (time: number) => number;
                setMilliseconds: (ms: number) => number;
                setUTCMilliseconds: (ms: number) => number;
                setSeconds: (sec: number, ms?: number | undefined) => number;
                setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                setDate: (date: number) => number;
                setUTCDate: (date: number) => number;
                setMonth: (month: number, date?: number | undefined) => number;
                setUTCMonth: (month: number, date?: number | undefined) => number;
                setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                toUTCString: () => string;
                toISOString: () => string;
                toJSON: (key?: any) => string;
                getVarDate: () => VarDate;
                [Symbol.toPrimitive]: {
                    (hint: "default"): string;
                    (hint: "string"): string;
                    (hint: "number"): number;
                    (hint: string): string | number;
                };
            })[] | (() => string | number | Date | (string | number | Date)[]);
            format?: string | undefined;
        }[];
        showNowBtn: boolean;
        onItemClick: (shortcut: ShortcutType) => void;
        onItemMouseEnter: (shortcut: ShortcutType) => void;
        onItemMouseLeave: (shortcut: ShortcutType) => void;
        onNowClick: () => void;
    };
    commonPanelProps: {
        value: {
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
        } | undefined;
        headerValue: {
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
        };
        headerIcons: {
            prev?: import("vue").Slot | undefined;
            prevDouble?: import("vue").Slot | undefined;
            next?: import("vue").Slot | undefined;
            nextDouble?: import("vue").Slot | undefined;
        };
        headerOperations: {
            onSuperPrev?: (() => void) | undefined;
            onPrev?: (() => void) | undefined;
            onNext?: (() => void) | undefined;
            onSuperNext?: (() => void) | undefined;
        } | undefined;
        disabledDate: DisabledDate | undefined;
        dateRender: RenderFunc | undefined;
        onSelect: (date: Dayjs) => void;
        onHeaderLabelClick: (type: 'year' | 'month') => void;
    };
    footerValue: import("vue").ComputedRef<Dayjs>;
    onTodayBtnClick: () => void;
    onConfirmBtnClick: () => void;
    onTimePickerSelect: (time: Dayjs) => void;
    onHeaderPanelSelect: (date: Dayjs) => void;
    headerPanelHeaderValue: import("vue").ComputedRef<Dayjs>;
    headerPanelHeaderOperations: import("vue").ComputedRef<HeaderOperations>;
    onMonthHeaderLabelClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("today-btn-click" | "cell-click" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "confirm" | "header-label-click" | "header-select" | "month-header-click")[], "today-btn-click" | "cell-click" | "confirm" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "header-label-click" | "header-select" | "month-header-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    headerMode?: unknown;
    prefixCls?: unknown;
    value?: unknown;
    headerValue?: unknown;
    timePickerValue?: unknown;
    showTime?: unknown;
    showConfirmBtn?: unknown;
    shortcuts?: unknown;
    shortcutsPosition?: unknown;
    format?: unknown;
    dayStartOfWeek?: unknown;
    disabledDate?: unknown;
    disabledTime?: unknown;
    timePickerProps?: unknown;
    extra?: unknown;
    dateRender?: unknown;
    hideTrigger?: unknown;
    confirmBtnDisabled?: unknown;
    showNowBtn?: unknown;
    headerIcons?: unknown;
    headerOperations?: unknown;
    abbreviation?: unknown;
} & {
    prefixCls: string;
    format: string;
    hideTrigger: boolean;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    showNowBtn: boolean;
    shortcuts: ShortcutType[];
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
    headerValue: Dayjs;
    headerIcons: HeaderIcons;
    abbreviation: boolean;
    shortcutsPosition: "bottom" | "left" | "right";
} & {
    mode?: string | undefined;
    value?: Dayjs | undefined;
    extra?: RenderFunc | undefined;
    timePickerProps?: Partial<TimePickerProps> | undefined;
    disabledDate?: DisabledDate | undefined;
    disabledTime?: DisabledTime | undefined;
    dateRender?: RenderFunc | undefined;
    timePickerValue?: Dayjs | undefined;
    headerOperations?: HeaderOperations | undefined;
    headerMode?: "year" | "month" | undefined;
}> & {
    "onToday-btn-click"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
    "onShortcut-click"?: ((...args: any[]) => any) | undefined;
    "onShortcut-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onShortcut-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onHeader-label-click"?: ((...args: any[]) => any) | undefined;
    "onHeader-select"?: ((...args: any[]) => any) | undefined;
    "onMonth-header-click"?: ((...args: any[]) => any) | undefined;
}, {
    hideTrigger: boolean;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    showNowBtn: boolean;
    shortcuts: ShortcutType[];
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
    headerIcons: HeaderIcons;
    abbreviation: boolean;
    shortcutsPosition: "bottom" | "left" | "right";
}>;
export default _default;
