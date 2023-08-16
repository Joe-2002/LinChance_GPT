import type { PropType } from 'vue';
import { ArcoLang } from '../locale/interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: PropType<ArcoLang>;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    locale?: unknown;
    size?: unknown;
    global?: unknown;
    updateAtScroll?: unknown;
    scrollToClose?: unknown;
    exchangeTime?: unknown;
} & {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    prefixCls: string;
    exchangeTime: boolean;
    global: boolean;
} & {
    size?: "mini" | "medium" | "large" | "small" | undefined;
    locale?: ArcoLang | undefined;
}>, {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    prefixCls: string;
    exchangeTime: boolean;
    global: boolean;
}>;
export default _default;
