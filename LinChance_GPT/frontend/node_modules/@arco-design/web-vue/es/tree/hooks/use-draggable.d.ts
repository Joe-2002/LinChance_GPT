import { DropPosition, TreeNodeKey } from '../interface';
export default function useDraggable(props: {
    key: TreeNodeKey;
    refTitle: HTMLElement | undefined;
}): {
    isDragOver: import("vue").Ref<boolean>;
    isDragging: import("vue").Ref<boolean>;
    isAllowDrop: import("vue").Ref<boolean>;
    dropPosition: import("vue").Ref<DropPosition>;
    setDragStatus(status: 'dragStart' | 'dragOver' | 'dragLeave' | 'dragEnd' | 'drop', e: DragEvent): void;
};
