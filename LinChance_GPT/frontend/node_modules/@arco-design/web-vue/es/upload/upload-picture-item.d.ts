import { PropType } from 'vue';
import { FileItem } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    file: {
        type: PropType<FileItem>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    file?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    file: FileItem;
} & {}>, {
    disabled: boolean;
}>;
export default _default;
