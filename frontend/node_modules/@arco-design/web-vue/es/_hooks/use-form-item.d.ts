import { Ref } from 'vue';
import { FormItemContext } from '../form/context';
import { Size } from '../_utils/constant';
export declare const useFormItem: ({ size, disabled, error, uninject, }?: {
    size?: Ref<"mini" | "medium" | "large" | "small" | undefined> | undefined;
    disabled?: Ref<boolean> | undefined;
    error?: Ref<boolean> | undefined;
    uninject?: boolean | undefined;
}) => {
    formItemCtx: FormItemContext;
    mergedSize: import("vue").ComputedRef<"mini" | "medium" | "large" | "small" | undefined>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    mergedError: import("vue").ComputedRef<boolean>;
    feedback: Ref<string | undefined>;
    eventHandlers: Ref<import("..").FormItemEventHandler>;
};
