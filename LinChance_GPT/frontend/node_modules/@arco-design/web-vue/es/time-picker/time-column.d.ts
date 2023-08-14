import { PropType } from 'vue';
import { TimeList, TimeListItem } from './interface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    list: {
        type: PropType<TimeList>;
        required: true;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    visible: {
        type: BooleanConstructor;
    };
}, {
    refWrapper: import("vue").Ref<HTMLElement | undefined>;
    refMap: import("vue").Ref<Map<string | number, HTMLElement>>;
    onItemRef(el: HTMLElement, item: TimeListItem): void;
    onItemClick(item: TimeListItem): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    list?: unknown;
    value?: unknown;
    visible?: unknown;
} & {
    visible: boolean;
    prefixCls: string;
    list: TimeList;
} & {
    value?: string | number | undefined;
}> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
}>;
export default _default;
