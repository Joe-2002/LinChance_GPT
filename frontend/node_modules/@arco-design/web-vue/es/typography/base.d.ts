import { PropType } from 'vue';
import { EllipsisConfig } from './interface';
declare const _default: import("vue").DefineComponent<{
    component: {
        type: PropType<keyof HTMLElementTagNameMap>;
        required: true;
    };
    type: {
        type: PropType<"success" | "warning" | "danger" | "primary" | "secondary">;
    };
    bold: {
        type: BooleanConstructor;
    };
    mark: {
        type: PropType<boolean | {
            color: string;
        }>;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
    };
    delete: {
        type: BooleanConstructor;
    };
    code: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    editable: {
        type: BooleanConstructor;
    };
    editing: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultEditing: {
        type: BooleanConstructor;
    };
    editText: {
        type: StringConstructor;
    };
    copyable: {
        type: BooleanConstructor;
    };
    copyText: {
        type: StringConstructor;
    };
    copyDelay: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: {
        type: ObjectConstructor;
    };
    copyTooltipProps: {
        type: ObjectConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    editStart: () => true;
    change: (text: string) => true;
    'update:editText': (text: string) => true;
    editEnd: () => true;
    'update:editing': (editing: boolean) => true;
    copy: (text: string) => true;
    ellipsis: (isEllipsis: boolean) => true;
    expand: (expanded: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component?: unknown;
    type?: unknown;
    bold?: unknown;
    mark?: unknown;
    underline?: unknown;
    delete?: unknown;
    code?: unknown;
    disabled?: unknown;
    editable?: unknown;
    editing?: unknown;
    defaultEditing?: unknown;
    editText?: unknown;
    copyable?: unknown;
    copyText?: unknown;
    copyDelay?: unknown;
    ellipsis?: unknown;
    editTooltipProps?: unknown;
    copyTooltipProps?: unknown;
} & {
    disabled: boolean;
    ellipsis: boolean | EllipsisConfig;
    bold: boolean;
    underline: boolean;
    code: boolean;
    mark: boolean | {
        color: string;
    };
    component: keyof HTMLElementTagNameMap;
    delete: boolean;
    editable: boolean;
    defaultEditing: boolean;
    copyable: boolean;
    copyDelay: number;
} & {
    type?: "success" | "warning" | "danger" | "primary" | "secondary" | undefined;
    editing?: boolean | undefined;
    editText?: string | undefined;
    copyText?: string | undefined;
    editTooltipProps?: Record<string, any> | undefined;
    copyTooltipProps?: Record<string, any> | undefined;
}> & {
    onCopy?: ((text: string) => any) | undefined;
    onChange?: ((text: string) => any) | undefined;
    onExpand?: ((expanded: boolean) => any) | undefined;
    onEllipsis?: ((isEllipsis: boolean) => any) | undefined;
    onEditStart?: (() => any) | undefined;
    "onUpdate:editText"?: ((text: string) => any) | undefined;
    onEditEnd?: (() => any) | undefined;
    "onUpdate:editing"?: ((editing: boolean) => any) | undefined;
}, {
    disabled: boolean;
    ellipsis: boolean | EllipsisConfig;
    bold: boolean;
    underline: boolean;
    code: boolean;
    mark: boolean | {
        color: string;
    };
    delete: boolean;
    editable: boolean;
    editing: boolean;
    defaultEditing: boolean;
    copyable: boolean;
    copyDelay: number;
}>;
export default _default;
