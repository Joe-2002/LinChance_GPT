import { Ref } from 'vue';
import { Size } from '../_utils/constant';
export declare const useSize: (size?: Ref<"mini" | "medium" | "large" | "small" | undefined> | undefined, { defaultValue }?: {
    defaultValue?: "mini" | "medium" | "large" | "small" | undefined;
}) => {
    mergedSize: import("vue").ComputedRef<"mini" | "medium" | "large" | "small">;
};
