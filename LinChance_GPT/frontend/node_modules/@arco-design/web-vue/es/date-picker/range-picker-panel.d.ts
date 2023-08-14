import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import pick from '../_utils/pick';
import type { ShortcutType, Mode, RangeDisabledTime, RangeDisabledDate, WeekStart, StartHeaderProps } from './interface';
import { RenderFunc } from '../_components/render-function';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    value: {
        type: PropType<(Dayjs | undefined)[]>;
        default: () => never[];
    };
    footerValue: {
        type: PropType<(Dayjs | undefined)[]>;
    };
    timePickerValue: {
        type: PropType<Dayjs[]>;
    };
    showTime: {
        type: BooleanConstructor;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    prefixCls: {
        type: StringConstructor;
        required: true;
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
        type: PropType<RangeDisabledDate>;
    };
    disabledTime: {
        type: PropType<RangeDisabledTime>;
    };
    timePickerProps: {
        type: PropType<Partial<import("../time-picker/interface").TimePickerProps> | undefined>;
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
    startHeaderProps: {
        type: PropType<StartHeaderProps>;
        default: () => {};
    };
    endHeaderProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    confirmBtnDisabled: {
        type: BooleanConstructor;
    };
    disabled: {
        type: PropType<boolean[]>;
        default: () => boolean[];
    };
    visible: {
        type: BooleanConstructor;
    };
    startHeaderMode: {
        type: PropType<"year" | "month">;
    };
    endHeaderMode: {
        type: PropType<"year" | "month">;
    };
    abbreviation: {
        type: BooleanConstructor;
    };
}, {
    pick: typeof pick;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | 0;
    })[]>;
    showShortcuts: import("vue").ComputedRef<number | false>;
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
        onItemClick: (shortcut: ShortcutType) => void;
        onItemMouseEnter: (shortcut: ShortcutType) => void;
        onItemMouseLeave: (shortcut: ShortcutType) => void;
    };
    startPanelProps: import("vue").ComputedRef<{
        rangeValues: ({
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
        } | undefined)[];
        disabledDate: ((current: Date) => boolean) | undefined;
        dateRender: ((props: any) => import("vue").VNodeTypes | undefined) | undefined;
        onSelect: (date: Dayjs) => void;
        onCellMouseEnter: (date: Dayjs) => void;
        onHeaderLabelClick: (type: 'year' | 'month') => void;
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
        headerOperations: {
            [x: string]: any;
        };
        headerIcons: {
            prev: import("vue").Slot | undefined;
            prevDouble: import("vue").Slot | undefined;
            next: import("vue").Slot | undefined;
            nextDouble: import("vue").Slot | undefined;
        };
    }>;
    endPanelProps: import("vue").ComputedRef<{
        rangeValues: ({
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
        } | undefined)[];
        disabledDate: ((current: Date) => boolean) | undefined;
        dateRender: ((props: any) => import("vue").VNodeTypes | undefined) | undefined;
        onSelect: (date: Dayjs) => void;
        onCellMouseEnter: (date: Dayjs) => void;
        onHeaderLabelClick: (type: 'year' | 'month') => void;
    }>;
    getDisabledTimeFunc: (index: 0 | 1) => ((current: Date) => false | import("./interface").DisabledTimeProps) | undefined;
    onConfirmBtnClick: () => void;
    currentDateView: import("vue").Ref<string>;
    onStartTimePickerSelect: (time: Dayjs) => void;
    onEndTimePickerSelect: (time: Dayjs) => void;
    onStartHeaderPanelSelect: (date: Dayjs) => void;
    onEndHeaderPanelSelect: (date: Dayjs) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "confirm" | "start-header-label-click" | "end-header-label-click" | "start-header-select" | "end-header-select")[], "cell-click" | "cell-mouse-enter" | "confirm" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "start-header-label-click" | "end-header-label-click" | "start-header-select" | "end-header-select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    value?: unknown;
    footerValue?: unknown;
    timePickerValue?: unknown;
    showTime?: unknown;
    showConfirmBtn?: unknown;
    prefixCls?: unknown;
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
    startHeaderProps?: unknown;
    endHeaderProps?: unknown;
    confirmBtnDisabled?: unknown;
    disabled?: unknown;
    visible?: unknown;
    startHeaderMode?: unknown;
    endHeaderMode?: unknown;
    abbreviation?: unknown;
} & {
    disabled: boolean[];
    mode: Mode;
    visible: boolean;
    prefixCls: string;
    value: (Dayjs | undefined)[];
    format: string;
    hideTrigger: boolean;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    shortcuts: ShortcutType[];
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
    abbreviation: boolean;
    shortcutsPosition: "bottom" | "left" | "right";
    startHeaderProps: StartHeaderProps;
    endHeaderProps: Record<string, any>;
} & {
    extra?: RenderFunc | undefined;
    timePickerProps?: Partial<import("../time-picker/interface").TimePickerProps> | undefined;
    disabledDate?: RangeDisabledDate | undefined;
    disabledTime?: RangeDisabledTime | undefined;
    dateRender?: RenderFunc | undefined;
    footerValue?: (Dayjs | undefined)[] | undefined;
    timePickerValue?: Dayjs[] | undefined;
    startHeaderMode?: "year" | "month" | undefined;
    endHeaderMode?: "year" | "month" | undefined;
}> & {
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
    "onShortcut-click"?: ((...args: any[]) => any) | undefined;
    "onShortcut-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onShortcut-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onStart-header-label-click"?: ((...args: any[]) => any) | undefined;
    "onEnd-header-label-click"?: ((...args: any[]) => any) | undefined;
    "onStart-header-select"?: ((...args: any[]) => any) | undefined;
    "onEnd-header-select"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean[];
    mode: Mode;
    visible: boolean;
    value: (Dayjs | undefined)[];
    hideTrigger: boolean;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    shortcuts: ShortcutType[];
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
    abbreviation: boolean;
    shortcutsPosition: "bottom" | "left" | "right";
    startHeaderProps: StartHeaderProps;
    endHeaderProps: Record<string, any>;
}>;
export default _default;
