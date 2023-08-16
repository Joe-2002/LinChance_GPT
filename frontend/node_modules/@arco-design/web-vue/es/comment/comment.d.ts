declare const _default: import("vue").DefineComponent<{
    author: {
        type: StringConstructor;
    };
    avatar: {
        type: StringConstructor;
    };
    content: {
        type: StringConstructor;
    };
    datetime: {
        type: StringConstructor;
    };
    align: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, {
    prefixCls: string;
    hasAuthor: import("vue").ComputedRef<boolean>;
    hasAvatar: import("vue").ComputedRef<boolean>;
    hasContent: import("vue").ComputedRef<boolean>;
    hasDatetime: import("vue").ComputedRef<boolean>;
    computedAlign: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    author?: unknown;
    avatar?: unknown;
    content?: unknown;
    datetime?: unknown;
    align?: unknown;
} & {
    align: string | Record<string, any>;
} & {
    content?: string | undefined;
    author?: string | undefined;
    avatar?: string | undefined;
    datetime?: string | undefined;
}>, {
    align: string | Record<string, any>;
}>;
export default _default;
