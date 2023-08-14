import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { RenderFunc } from '../../../_components/render-function';
import { TimePickerProps } from '../../../time-picker/interface';
import type { Cell, DisabledDate, DisabledTime, HeaderIcons, HeaderOperations, IsSameTime, Mode, WeekStart } from '../../interface';
import { HeaderLabelClickFunc } from '../header';
declare const _default: import("vue").DefineComponent<{
    isRange: {
        type: BooleanConstructor;
    };
    value: {
        type: PropType<Dayjs>;
    };
    rangeValues: {
        type: PropType<(Dayjs | undefined)[]>;
    };
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    footerValue: {
        type: PropType<Dayjs>;
    };
    timePickerValue: {
        type: PropType<Dayjs>;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
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
    isSameTime: {
        type: PropType<IsSameTime>;
    };
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    currentView: {
        type: PropType<"time" | "date">;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    onHeaderLabelClick: {
        type: PropType<HeaderLabelClickFunc>;
    };
}, {
    prefixCls: import("vue").ComputedRef<string>;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    pickerPrefixCls: string;
    headerTitle: import("vue").ComputedRef<string>;
    rows: import("vue").ComputedRef<Cell[][]>;
    weekList: import("vue").ComputedRef<number[]>;
    mergedIsSameTime: import("vue").ComputedRef<IsSameTime>;
    disabledTimeProps: import("vue").ComputedRef<import("../../interface").DisabledTimeProps>;
    onCellClick: (cellData: Cell) => void;
    onCellMouseEnter: (cellData: Cell) => void;
    onTimePanelSelect: (time: Dayjs) => void;
    showViewTabs: import("vue").ComputedRef<boolean>;
    showDateView: import("vue").ComputedRef<boolean>;
    showTimeView: import("vue").ComputedRef<boolean>;
    changeViewTo: (newView: 'date' | 'time') => void;
    datePickerT: (key: string, ...args: any[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView")[], "select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isRange?: unknown;
    value?: unknown;
    rangeValues?: unknown;
    headerValue?: unknown;
    footerValue?: unknown;
    timePickerValue?: unknown;
    headerOperations?: unknown;
    headerIcons?: unknown;
    dayStartOfWeek?: unknown;
    disabledDate?: unknown;
    disabledTime?: unknown;
    isSameTime?: unknown;
    mode?: unknown;
    showTime?: unknown;
    timePickerProps?: unknown;
    currentView?: unknown;
    dateRender?: unknown;
    disabled?: unknown;
    onHeaderLabelClick?: unknown;
} & {
    disabled: boolean;
    mode: Mode;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    isRange: boolean;
    headerValue: Dayjs;
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
} & {
    value?: Dayjs | undefined;
    timePickerProps?: Partial<TimePickerProps> | undefined;
    disabledDate?: DisabledDate | undefined;
    disabledTime?: DisabledTime | undefined;
    isSameTime?: IsSameTime | undefined;
    rangeValues?: (Dayjs | undefined)[] | undefined;
    dateRender?: RenderFunc | undefined;
    footerValue?: Dayjs | undefined;
    timePickerValue?: Dayjs | undefined;
    currentView?: "time" | "date" | undefined;
    onHeaderLabelClick?: HeaderLabelClickFunc | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
    "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    mode: Mode;
    dayStartOfWeek: WeekStart;
    showTime: boolean;
    isRange: boolean;
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
}>;
export default _default;
