import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { HeaderIcons, Mode } from '../interface';
declare type ClickCallbackFunc = (payload: MouseEvent) => void;
export declare type HeaderLabelClickFunc = (label: 'year' | 'month') => void;
declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    value: {
        type: PropType<Dayjs>;
    };
    icons: {
        type: PropType<HeaderIcons>;
    };
    onPrev: {
        type: PropType<ClickCallbackFunc>;
    };
    onSuperPrev: {
        type: PropType<ClickCallbackFunc>;
    };
    onNext: {
        type: PropType<ClickCallbackFunc>;
    };
    onSuperNext: {
        type: PropType<ClickCallbackFunc>;
    };
    onLabelClick: {
        type: PropType<HeaderLabelClickFunc>;
    };
}, {
    showPrev: import("vue").ComputedRef<boolean>;
    showSuperPrev: import("vue").ComputedRef<boolean>;
    showNext: import("vue").ComputedRef<boolean>;
    showSuperNext: import("vue").ComputedRef<boolean>;
    year: import("vue").ComputedRef<string>;
    month: import("vue").ComputedRef<string>;
    getIconClassName: (show?: boolean | undefined) => (string | {
        [x: string]: boolean;
    })[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    title?: unknown;
    mode?: unknown;
    value?: unknown;
    icons?: unknown;
    onPrev?: unknown;
    onSuperPrev?: unknown;
    onNext?: unknown;
    onSuperNext?: unknown;
    onLabelClick?: unknown;
} & {
    mode: Mode;
    prefixCls: string;
    title: string;
} & {
    value?: Dayjs | undefined;
    onPrev?: ClickCallbackFunc | undefined;
    onNext?: ClickCallbackFunc | undefined;
    icons?: HeaderIcons | undefined;
    onSuperPrev?: ClickCallbackFunc | undefined;
    onSuperNext?: ClickCallbackFunc | undefined;
    onLabelClick?: HeaderLabelClickFunc | undefined;
}> & {
    "onLabel-click"?: ((...args: any[]) => any) | undefined;
}, {
    mode: Mode;
}>;
export default _default;
