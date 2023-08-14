import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    boundary: {
        type: PropType<number | "center" | "end" | "start" | "nearest">;
        default: string;
        validator: (value: any) => boolean;
    };
    lineLess: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: PropType<string | Window | HTMLElement>;
    };
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
    smooth: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    anchorRef: import("vue").Ref<HTMLElement | undefined>;
    lineSliderRef: import("vue").Ref<HTMLElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (hash: string | undefined, preHash: string) => true;
    change: (hash: string) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    boundary?: unknown;
    lineLess?: unknown;
    scrollContainer?: unknown;
    changeHash?: unknown;
    smooth?: unknown;
} & {
    smooth: boolean;
    boundary: number | "center" | "end" | "start" | "nearest";
    lineLess: boolean;
    changeHash: boolean;
} & {
    scrollContainer?: string | Window | HTMLElement | undefined;
}> & {
    onChange?: ((hash: string) => any) | undefined;
    onSelect?: ((hash: string | undefined, preHash: string) => any) | undefined;
}, {
    smooth: boolean;
    boundary: number | "center" | "end" | "start" | "nearest";
    lineLess: boolean;
    changeHash: boolean;
}>;
export default _default;
