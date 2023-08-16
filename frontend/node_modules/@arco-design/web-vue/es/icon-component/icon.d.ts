import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: StringConstructor;
    size: (StringConstructor | NumberConstructor)[];
    rotate: NumberConstructor;
    spin: BooleanConstructor;
}, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    } | undefined)[]>;
    innerStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    size?: unknown;
    rotate?: unknown;
    spin?: unknown;
} & {
    spin: boolean;
} & {
    size?: string | number | undefined;
    type?: string | undefined;
    rotate?: number | undefined;
}>, {
    spin: boolean;
}>;
export default _default;
