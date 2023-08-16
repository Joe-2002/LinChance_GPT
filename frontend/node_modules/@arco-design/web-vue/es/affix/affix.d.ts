import type { CSSProperties, PropType, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: {
        type: NumberConstructor;
    };
    target: {
        type: PropType<string | Window | HTMLElement>;
    };
    targetContainer: {
        type: PropType<string | Window | HTMLElement>;
    };
}, {
    wrapperRef: Ref<HTMLElement | undefined>;
    isFixed: Ref<boolean>;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    placeholderStyles: Ref<CSSProperties>;
    fixedStyles: Ref<CSSProperties>;
    updatePositionThrottle: {
        (...args: any[]): void;
        cancel(): void;
    };
}, unknown, {}, {
    updatePosition(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (fixed: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    offsetTop?: unknown;
    offsetBottom?: unknown;
    target?: unknown;
    targetContainer?: unknown;
} & {
    offsetTop: number;
} & {
    offsetBottom?: number | undefined;
    target?: string | Window | HTMLElement | undefined;
    targetContainer?: string | Window | HTMLElement | undefined;
}> & {
    onChange?: ((fixed: boolean) => any) | undefined;
}, {
    offsetTop: number;
}>;
export default _default;
