import type { PropType } from 'vue';
import { NotificationItem } from './interface';
declare const _default: import("vue").DefineComponent<{
    notifications: {
        type: PropType<NotificationItem[]>;
        default: () => never[];
    };
    position: {
        type: PropType<"topLeft" | "topRight" | "bottomLeft" | "bottomRight">;
        default: string;
        validator: (value: any) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "afterClose")[], "close" | "afterClose", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    notifications?: unknown;
    position?: unknown;
} & {
    position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    notifications: NotificationItem[];
} & {}> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onAfterClose?: ((...args: any[]) => any) | undefined;
}, {
    position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    notifications: NotificationItem[];
}>;
export default _default;
