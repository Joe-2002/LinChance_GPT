import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    weekList: {
        type: PropType<number[]>;
        required: true;
    };
}, {
    labelList: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    weekList?: unknown;
} & {
    prefixCls: string;
    weekList: number[];
} & {}>, {}>;
export default _default;
