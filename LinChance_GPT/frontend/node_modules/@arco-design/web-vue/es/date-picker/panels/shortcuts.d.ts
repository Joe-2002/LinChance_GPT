import { PropType } from 'vue';
import { ShortcutType } from '../interface';
import { isFunction } from '../../_utils/is';
export interface ShortcutsProps {
    prefixCls: string;
    shortcuts: ShortcutType[];
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    shortcuts: {
        type: PropType<ShortcutType[]>;
        default: () => never[];
    };
    showNowBtn: {
        type: BooleanConstructor;
    };
}, {
    datePickerT: (key: string, ...args: any[]) => any;
    onItemClick: (item: ShortcutType) => void;
    onItemMouseEnter: (item: ShortcutType) => void;
    onItemMouseLeave: (item: ShortcutType) => void;
    onNowClick: () => void;
    isFunction: typeof isFunction;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click")[], "item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    shortcuts?: unknown;
    showNowBtn?: unknown;
} & {
    prefixCls: string;
    showNowBtn: boolean;
    shortcuts: ShortcutType[];
} & {}> & {
    "onItem-click"?: ((...args: any[]) => any) | undefined;
    "onItem-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onItem-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onNow-click"?: ((...args: any[]) => any) | undefined;
}, {
    showNowBtn: boolean;
    shortcuts: ShortcutType[];
}>;
export default _default;
