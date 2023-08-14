import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    activeKey: {
        type: PropType<(string | number)[]>;
        default: undefined;
    };
    defaultActiveKey: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    showExpandIcon: {
        type: BooleanConstructor;
        default: undefined;
    };
    expandIconPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:activeKey': (activeKey: (string | number)[]) => true;
    change: (activeKey: (string | number)[], ev: Event) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    activeKey?: unknown;
    defaultActiveKey?: unknown;
    accordion?: unknown;
    showExpandIcon?: unknown;
    expandIconPosition?: unknown;
    bordered?: unknown;
    destroyOnHide?: unknown;
} & {
    bordered: boolean;
    defaultActiveKey: (string | number)[];
    accordion: boolean;
    expandIconPosition: "left" | "right";
    destroyOnHide: boolean;
} & {
    activeKey?: (string | number)[] | undefined;
    showExpandIcon?: boolean | undefined;
}> & {
    onChange?: ((activeKey: (string | number)[], ev: Event) => any) | undefined;
    "onUpdate:activeKey"?: ((activeKey: (string | number)[]) => any) | undefined;
}, {
    bordered: boolean;
    activeKey: (string | number)[];
    defaultActiveKey: (string | number)[];
    accordion: boolean;
    showExpandIcon: boolean;
    expandIconPosition: "left" | "right";
    destroyOnHide: boolean;
}>;
export default _default;
