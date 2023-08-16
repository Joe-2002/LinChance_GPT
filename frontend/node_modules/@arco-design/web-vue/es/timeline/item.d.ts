import { PropType } from 'vue';
import { DotType, LineType, PositionType } from './interface';
declare const _default: import("vue").DefineComponent<{
    dotColor: {
        type: StringConstructor;
    };
    dotType: {
        type: PropType<DotType>;
        default: string;
    };
    lineType: {
        type: PropType<LineType>;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    position: {
        type: PropType<PositionType>;
    };
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean | "horizontal" | "vertical" | import("./interface").LabelPositionType | undefined;
    })[]>;
    dotLineCls: import("vue").ComputedRef<string[]>;
    dotTypeCls: import("vue").ComputedRef<string[]>;
    prefixCls: string;
    computedDotLineStyle: import("vue").ComputedRef<{
        borderColor?: string | undefined;
    }>;
    computedDotStyle: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    labelPosition: import("vue").ComputedRef<import("./interface").LabelPositionType>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    dotColor?: unknown;
    dotType?: unknown;
    lineType?: unknown;
    lineColor?: unknown;
    label?: unknown;
    position?: unknown;
} & {
    dotType: DotType;
    lineType: LineType;
} & {
    position?: PositionType | undefined;
    label?: string | undefined;
    dotColor?: string | undefined;
    lineColor?: string | undefined;
}>, {
    dotType: DotType;
    lineType: LineType;
}>;
export default _default;
