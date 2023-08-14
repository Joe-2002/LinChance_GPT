interface ImageDragProps {
    wrapperEl: HTMLElement;
    imageEl: HTMLElement;
    scale: number;
}
export default function useImageDrag(props: ImageDragProps): {
    translate: import("vue").Ref<number[]>;
    moving: import("vue").Ref<boolean>;
    resetTranslate(): void;
};
export {};
