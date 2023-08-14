import { Dayjs } from 'dayjs';
import { PropType } from 'vue';
import type { Cell, DisabledDate, IsSameTime, Mode } from '../interface';
import { RenderFunc } from '../../_components/render-function';
import { getDateValue } from '../../_utils/date';
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    rows: {
        type: PropType<Cell[][]>;
        default: () => never[];
    };
    value: {
        type: PropType<Dayjs>;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    isSameTime: {
        type: PropType<IsSameTime>;
        required: true;
    };
    mode: {
        type: PropType<Mode>;
    };
    rangeValues: {
        type: PropType<(Dayjs | undefined)[]>;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
}, {
    isWeek: import("vue").ComputedRef<boolean>;
    getCellClassName: (cellData: Cell) => (string | {
        [x: string]: boolean | undefined;
    } | undefined)[];
    onCellClick: (cellData: Cell) => void;
    onCellMouseEnter: (cellData: Cell) => void;
    onCellMouseLeave: (cellData: Cell) => void;
    getDateValue: typeof getDateValue;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    rows?: unknown;
    value?: unknown;
    disabledDate?: unknown;
    isSameTime?: unknown;
    mode?: unknown;
    rangeValues?: unknown;
    dateRender?: unknown;
} & {
    prefixCls: string;
    rows: Cell[][];
    isSameTime: IsSameTime;
} & {
    mode?: Mode | undefined;
    value?: Dayjs | undefined;
    disabledDate?: DisabledDate | undefined;
    rangeValues?: (Dayjs | undefined)[] | undefined;
    dateRender?: RenderFunc | undefined;
}> & {
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
}, {
    rows: Cell[][];
}>;
export default _default;
