import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: NumberConstructor;
    };
    offset: {
        type: NumberConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    type: StringConstructor;
    outerAttrs: ObjectConstructor;
    innerAttrs: ObjectConstructor;
}, {
    outerStyle: import("vue").ComputedRef<CSSProperties>;
    innerStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    height?: unknown;
    offset?: unknown;
    disabled?: unknown;
    type?: unknown;
    outerAttrs?: unknown;
    innerAttrs?: unknown;
} & {
    disabled: boolean;
} & {
    type?: string | undefined;
    height?: number | undefined;
    offset?: number | undefined;
    outerAttrs?: Record<string, any> | undefined;
    innerAttrs?: Record<string, any> | undefined;
}>, {
    disabled: boolean;
}>;
export default _default;
