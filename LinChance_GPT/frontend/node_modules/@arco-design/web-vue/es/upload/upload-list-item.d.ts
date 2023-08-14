import { PropType } from 'vue';
import { FileItem, ListType } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    file: {
        type: PropType<FileItem>;
        required: true;
    };
    listType: {
        type: PropType<ListType>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    file?: unknown;
    listType?: unknown;
} & {
    listType: ListType;
    file: FileItem;
} & {}>, {}>;
export default _default;
