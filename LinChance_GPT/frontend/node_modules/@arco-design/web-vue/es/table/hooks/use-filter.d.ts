import type { Ref } from 'vue';
import type { Filters, TableColumnData } from '../interface';
export declare const useFilter: ({ columns, onFilterChange, }: {
    columns: Ref<TableColumnData[]>;
    onFilterChange: (dataIndex: string, filteredValues: string[]) => void;
}) => {
    _filters: Ref<{
        [x: string]: string[];
    }>;
    computedFilters: import("vue").ComputedRef<Filters>;
    resetFilters: (dataIndex?: string | string[] | undefined) => void;
    clearFilters: (dataIndex?: string | string[] | undefined) => void;
};
