export interface IconFontOptions {
    src?: string;
    extraProps?: {
        [key: string]: any;
    };
}
export declare const addFromIconFontCn: (options: IconFontOptions) => import("vue").DefineComponent<{
    type: StringConstructor;
    size: (StringConstructor | NumberConstructor)[];
    rotate: NumberConstructor;
    spin: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
