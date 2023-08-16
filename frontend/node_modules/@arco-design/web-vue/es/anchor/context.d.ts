import { InjectionKey } from 'vue';
export interface AnchorContext {
    currentLink: string;
    addLink: (hash: string, node: HTMLElement) => void;
    removeLink: () => void;
    handleClick: (e: Event, hash?: string) => void;
}
export declare const anchorInjectionKey: InjectionKey<AnchorContext>;
