import type { Ref } from 'vue';
import type { EmitFn2 } from '../_utils/types';
export declare const useTrigger: ({ popupVisible, defaultPopupVisible, emit, }: {
    popupVisible?: Ref<boolean | undefined> | undefined;
    defaultPopupVisible?: Ref<boolean> | undefined;
    emit: ((event: "update:popupVisible", visible: boolean) => void) & ((event: "popupVisibleChange", visible: boolean) => void);
}) => {
    computedPopupVisible: import("vue").ComputedRef<boolean>;
    handlePopupVisibleChange: (visible: boolean) => void;
};
