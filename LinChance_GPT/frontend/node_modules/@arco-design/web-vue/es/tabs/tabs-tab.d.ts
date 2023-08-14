import type { PropType } from 'vue';
import type { TabData } from './interface';
declare const _default: import("vue").DefineComponent<{
    tab: {
        type: PropType<TabData>;
        required: true;
    };
    active: BooleanConstructor;
    editable: BooleanConstructor;
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    eventHandlers: import("vue").ComputedRef<({
        onClick: (e: Event) => void;
        onMouseover?: undefined;
    } | {
        onMouseover: (e: Event) => void;
        onClick?: undefined;
    }) & {
        onKeydown: (ev: KeyboardEvent) => void;
    }>;
    handleDelete: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete")[], "click" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tab?: unknown;
    active?: unknown;
    editable?: unknown;
} & {
    tab: TabData;
    active: boolean;
    editable: boolean;
} & {}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {
    active: boolean;
    editable: boolean;
}>;
export default _default;
