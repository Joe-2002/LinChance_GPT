import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    directory: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: StringConstructor;
    listType: {
        type: StringConstructor;
    };
    tip: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    uploadFiles: {
        type: FunctionConstructor;
        required: true;
    };
    hide: BooleanConstructor;
    onButtonClick: {
        type: PropType<(event: Event) => Promise<FileList> | void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    directory?: unknown;
    accept?: unknown;
    listType?: unknown;
    tip?: unknown;
    draggable?: unknown;
    multiple?: unknown;
    uploadFiles?: unknown;
    hide?: unknown;
    onButtonClick?: unknown;
} & {
    hide: boolean;
    disabled: boolean;
    multiple: boolean;
    draggable: boolean;
    directory: boolean;
    uploadFiles: Function;
} & {
    tip?: string | undefined;
    accept?: string | undefined;
    listType?: string | undefined;
    onButtonClick?: ((event: Event) => Promise<FileList> | void) | undefined;
}>, {
    hide: boolean;
    disabled: boolean;
    multiple: boolean;
    draggable: boolean;
    directory: boolean;
}>;
export default _default;
