import { PropType } from 'vue';
import type { ModeType, LabelPositionType } from './interface';
declare const _default: import("vue").DefineComponent<{
    reverse: {
        type: BooleanConstructor;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    mode: {
        type: PropType<ModeType>;
        default: string;
    };
    pending: {
        type: (BooleanConstructor | StringConstructor)[];
    };
    labelPosition: {
        type: PropType<LabelPositionType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    reverse?: unknown;
    direction?: unknown;
    mode?: unknown;
    pending?: unknown;
    labelPosition?: unknown;
} & {
    mode: ModeType;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    labelPosition: LabelPositionType;
} & {
    pending?: string | boolean | undefined;
}>, {
    mode: ModeType;
    reverse: boolean;
    direction: "horizontal" | "vertical";
    labelPosition: LabelPositionType;
}>;
export default _default;
