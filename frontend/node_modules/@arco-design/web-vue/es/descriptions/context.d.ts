import { InjectionKey } from 'vue';
import { DescItemData } from './interface';
export interface DescriptionsContext {
    addItem: (id: number, data: DescItemData) => void;
    removeItem: (id: number) => void;
}
export declare const descriptionsInjectionKey: InjectionKey<DescriptionsContext>;
