import type { PropType } from 'vue';
import { MessageItem } from './interface';
declare const _default: import("vue").DefineComponent<{
    messages: {
        type: PropType<MessageItem[]>;
        default: () => never[];
    };
    position: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "afterClose")[], "close" | "afterClose", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    messages?: unknown;
    position?: unknown;
} & {
    position: "top" | "bottom";
    messages: MessageItem[];
} & {}> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onAfterClose?: ((...args: any[]) => any) | undefined;
}, {
    position: "top" | "bottom";
    messages: MessageItem[];
}>;
export default _default;
