import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: (NumberConstructor | StringConstructor)[];
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    strokeLinejoin: {
        type: StringConstructor;
        default: string;
        validator: (value: any) => boolean;
    };
    rotate: NumberConstructor;
    spin: BooleanConstructor;
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    innerStyle: import("vue").ComputedRef<CSSProperties>;
    onClick: (ev: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    strokeWidth?: unknown;
    strokeLinecap?: unknown;
    strokeLinejoin?: unknown;
    rotate?: unknown;
    spin?: unknown;
} & {
    strokeWidth: number;
    strokeLinecap: string;
    strokeLinejoin: string;
    spin: boolean;
} & {
    size?: string | number | undefined;
    rotate?: number | undefined;
}> & {
    onClick?: ((ev: MouseEvent) => any) | undefined;
}, {
    strokeWidth: number;
    strokeLinecap: string;
    strokeLinejoin: string;
    spin: boolean;
}>;
export default _default;
