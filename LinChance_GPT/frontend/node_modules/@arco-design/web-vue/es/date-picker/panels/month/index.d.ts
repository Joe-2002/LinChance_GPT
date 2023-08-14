import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { RenderFunc } from '../../../_components/render-function';
import type { Cell, DisabledDate, HeaderIcons, HeaderOperations, IsSameTime } from '../../interface';
import { HeaderLabelClickFunc } from '../header';
declare const _default: import("vue").DefineComponent<{
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    value: {
        type: PropType<Dayjs>;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    rangeValues: {
        type: PropType<(Dayjs | undefined)[]>;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
    onHeaderLabelClick: {
        type: PropType<HeaderLabelClickFunc>;
    };
    abbreviation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: import("vue").ComputedRef<string>;
    pickerPrefixCls: string;
    headerTitle: import("vue").ComputedRef<string>;
    rows: import("vue").ComputedRef<{
        label: any;
        value: Dayjs;
    }[][]>;
    isSameTime: IsSameTime;
    onCellClick: (cellData: Cell) => void;
    onCellMouseEnter: (cellData: Cell) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    headerValue?: unknown;
    headerOperations?: unknown;
    headerIcons?: unknown;
    value?: unknown;
    disabledDate?: unknown;
    rangeValues?: unknown;
    dateRender?: unknown;
    onHeaderLabelClick?: unknown;
    abbreviation?: unknown;
} & {
    headerValue: Dayjs;
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
    abbreviation: boolean;
} & {
    value?: Dayjs | undefined;
    disabledDate?: DisabledDate | undefined;
    rangeValues?: (Dayjs | undefined)[] | undefined;
    dateRender?: RenderFunc | undefined;
    onHeaderLabelClick?: HeaderLabelClickFunc | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
}, {
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
    abbreviation: boolean;
}>;
export default _default;
