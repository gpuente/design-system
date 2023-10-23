/// <reference types="react" />
import { DropEvent } from 'react-aria';
export interface UseDraggableTargetProps<T = unknown> {
    data: T;
    onDropEvent?: (item: T, target: T, event: DropEvent) => void;
    dataType?: string;
}
export declare function useDraggableTarget<T = unknown>(props: UseDraggableTargetProps<T>): {
    dragProps: import("react").HTMLAttributes<HTMLElement>;
    dropProps: import("react").HTMLAttributes<HTMLElement>;
    isDropTarget: boolean;
    isDragging: boolean;
};
