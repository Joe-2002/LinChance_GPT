import { PropType, CSSProperties } from 'vue';
import { AvatarShape } from './interface';
import { TriggerProps } from '../trigger';
declare const AvatarGroup: import("vue").DefineComponent<{
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    size: NumberConstructor;
    autoFixFontSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    zIndexAscend: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxStyle: {
        type: PropType<CSSProperties>;
    };
    maxPopoverTriggerProps: {
        type: PropType<TriggerProps>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    shape?: unknown;
    size?: unknown;
    autoFixFontSize?: unknown;
    maxCount?: unknown;
    zIndexAscend?: unknown;
    maxStyle?: unknown;
    maxPopoverTriggerProps?: unknown;
} & {
    shape: AvatarShape;
    autoFixFontSize: boolean;
    maxCount: number;
    zIndexAscend: boolean;
} & {
    size?: number | undefined;
    maxStyle?: CSSProperties | undefined;
    maxPopoverTriggerProps?: TriggerProps | undefined;
}>, {
    shape: AvatarShape;
    autoFixFontSize: boolean;
    maxCount: number;
    zIndexAscend: boolean;
}>;
export default AvatarGroup;
