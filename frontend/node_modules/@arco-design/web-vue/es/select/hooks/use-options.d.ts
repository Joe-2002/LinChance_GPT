import type { Ref } from 'vue';
import type { FilterOption, SelectOption, SelectOptionInfo, SelectFieldNames } from '../interface';
export declare const useOptions: ({ options, extraOptions, inputValue, filterOption, showExtraOptions, valueKey, fieldNames, }: {
    options?: Ref<SelectOption[]> | undefined;
    extraOptions?: Ref<SelectOption[]> | undefined;
    inputValue?: Ref<string> | undefined;
    filterOption?: Ref<FilterOption> | undefined;
    showExtraOptions?: Ref<boolean> | undefined;
    valueKey?: Ref<string> | undefined;
    fieldNames?: Ref<import("../../_utils/types").FieldString<import("../interface").SelectOptionData> | undefined> | undefined;
}) => {
    validOptions: import("vue").ComputedRef<(SelectOptionInfo | import("../interface").SelectOptionGroupInfo)[]>;
    optionInfoMap: Map<string, SelectOptionInfo>;
    validOptionInfos: import("vue").ComputedRef<SelectOptionInfo[]>;
    enabledOptionKeys: import("vue").ComputedRef<string[]>;
    getNextSlotOptionIndex: () => number;
    addSlotOptionInfo: (id: number, optionInfo: SelectOptionInfo) => void;
    removeSlotOptionInfo: (id: number) => void;
};
