/// <reference types="react" />
export interface DraggableRenderProps {
    isDragging: boolean;
}
export interface DraggableProps<Item = unknown> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    children?: (props: DraggableRenderProps) => React.ReactNode;
    item: Item;
    dataType?: string;
}
export declare function Draggable<Item = unknown>(props: DraggableProps<Item>): import("react/jsx-runtime").JSX.Element | null;
