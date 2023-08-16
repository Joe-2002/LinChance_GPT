declare const _default: import("vue").DefineComponent<{
    prefixCls: {
        type: StringConstructor;
        required: true;
    };
    showTodayBtn: {
        type: BooleanConstructor;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    confirmBtnDisabled: {
        type: BooleanConstructor;
    };
}, {
    datePickerT: (key: string, ...args: any[]) => any;
    onTodayClick: () => void;
    onConfirmBtnClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("today-btn-click" | "confirm-btn-click")[], "today-btn-click" | "confirm-btn-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    prefixCls?: unknown;
    showTodayBtn?: unknown;
    showConfirmBtn?: unknown;
    confirmBtnDisabled?: unknown;
} & {
    prefixCls: string;
    showTodayBtn: boolean;
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
} & {}> & {
    "onToday-btn-click"?: ((...args: any[]) => any) | undefined;
    "onConfirm-btn-click"?: ((...args: any[]) => any) | undefined;
}, {
    showTodayBtn: boolean;
    showConfirmBtn: boolean;
    confirmBtnDisabled: boolean;
}>;
export default _default;
