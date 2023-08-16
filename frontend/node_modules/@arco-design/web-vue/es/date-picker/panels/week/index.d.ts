import { Dayjs } from 'dayjs';
import { PropType } from 'vue';
import { IsSameTime, WeekStart } from '../../interface';
declare const _default: import("vue").DefineComponent<{
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
}, {
    isSameTime: IsSameTime;
    onSelect: (value: Dayjs) => void;
    onCellMouseEnter: (value: Dayjs) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dayStartOfWeek?: unknown;
} & {
    dayStartOfWeek: WeekStart;
} & {}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
}, {
    dayStartOfWeek: WeekStart;
}>;
export default _default;
