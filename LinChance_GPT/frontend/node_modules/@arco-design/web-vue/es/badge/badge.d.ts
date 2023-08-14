import { PropType } from 'vue';
export declare const COLORS: readonly ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"];
export declare type ColorType = typeof COLORS[number];
export declare const BADGE_STATUSES: readonly ["normal", "processing", "success", "warning", "danger"];
export declare type BadgeStatus = typeof BADGE_STATUSES[number];
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
    };
    dot: {
        type: BooleanConstructor;
    };
    dotStyle: {
        type: ObjectConstructor;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: PropType<number[]>;
        default: () => never[];
    };
    color: {
        type: PropType<string>;
    };
    status: {
        type: PropType<"normal" | "success" | "warning" | "danger" | "processing">;
        validator: (value: any) => boolean;
    };
    count: {
        type: NumberConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
    dot?: unknown;
    dotStyle?: unknown;
    maxCount?: unknown;
    offset?: unknown;
    color?: unknown;
    status?: unknown;
    count?: unknown;
} & {
    dot: boolean;
    offset: number[];
    maxCount: number;
} & {
    color?: string | undefined;
    text?: string | undefined;
    status?: "normal" | "success" | "warning" | "danger" | "processing" | undefined;
    dotStyle?: Record<string, any> | undefined;
    count?: number | undefined;
}>, {
    dot: boolean;
    offset: number[];
    maxCount: number;
}>;
export default _default;
