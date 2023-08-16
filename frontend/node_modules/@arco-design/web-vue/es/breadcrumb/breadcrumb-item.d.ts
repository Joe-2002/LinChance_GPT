import { PropType } from 'vue';
import { DropDownProps } from '../dropdown';
declare const _default: import("vue").DefineComponent<{
    separator: {
        type: (StringConstructor | NumberConstructor)[];
    };
    droplist: {
        type: PropType<{
            label: string;
            path: string;
        }[] | undefined>;
    };
    dropdownProps: {
        type: PropType<DropDownProps>;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    separator?: unknown;
    droplist?: unknown;
    dropdownProps?: unknown;
    index?: unknown;
} & {
    index: number;
} & {
    separator?: string | number | undefined;
    droplist?: {
        label: string;
        path: string;
    }[] | undefined;
    dropdownProps?: DropDownProps | undefined;
}>, {
    index: number;
}>;
export default _default;
