import { PropType } from 'vue';
import { FileItem, ListType } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    fileList: {
        type: PropType<FileItem[]>;
        required: true;
    };
    listType: {
        type: PropType<ListType>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fileList?: unknown;
    listType?: unknown;
} & {
    fileList: FileItem[];
    listType: ListType;
} & {}>, {}>;
export default _default;
