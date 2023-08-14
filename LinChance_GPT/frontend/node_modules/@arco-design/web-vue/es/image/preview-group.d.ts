import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    srcList: {
        type: PropType<string[]>;
    };
    current: {
        type: NumberConstructor;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    actionsLayout: {
        type: PropType<string[]>;
        default: () => string[];
    };
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
}, {
    mergedVisible: import("vue").ComputedRef<boolean>;
    currentUrl: import("vue").ComputedRef<string | undefined>;
    prevIndex: import("vue").ComputedRef<number | undefined>;
    nextIndex: import("vue").ComputedRef<number | undefined>;
    onClose(): void;
    groupArrowProps: {
        onPrev: (() => void) | undefined;
        onNext: (() => void) | undefined;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:current" | "update:visible" | "visible-change")[], "change" | "update:current" | "update:visible" | "visible-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    renderToBody?: unknown;
    srcList?: unknown;
    current?: unknown;
    defaultCurrent?: unknown;
    infinite?: unknown;
    visible?: unknown;
    defaultVisible?: unknown;
    maskClosable?: unknown;
    closable?: unknown;
    actionsLayout?: unknown;
    popupContainer?: unknown;
} & {
    renderToBody: boolean;
    infinite: boolean;
    closable: boolean;
    defaultCurrent: number;
    actionsLayout: string[];
    defaultVisible: boolean;
    maskClosable: boolean;
} & {
    popupContainer?: string | HTMLElement | undefined;
    visible?: boolean | undefined;
    current?: number | undefined;
    srcList?: string[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
}, {
    renderToBody: boolean;
    infinite: boolean;
    visible: boolean;
    closable: boolean;
    defaultCurrent: number;
    actionsLayout: string[];
    defaultVisible: boolean;
    maskClosable: boolean;
}>;
export default _default;
