import { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    value: {
        type: NumberConstructor;
        default: () => number;
    };
    now: {
        type: NumberConstructor;
        default: () => number;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueStyle: {
        type: PropType<CSSProperties>;
    };
}, {
    prefixCls: string;
    displayValue: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    value?: unknown;
    now?: unknown;
    format?: unknown;
    start?: unknown;
    valueStyle?: unknown;
} & {
    start: boolean;
    value: number;
    format: string;
    now: number;
} & {
    title?: string | undefined;
    valueStyle?: CSSProperties | undefined;
}> & {
    onFinish?: (() => any) | undefined;
}, {
    start: boolean;
    value: number;
    format: string;
    now: number;
}>;
export default _default;
